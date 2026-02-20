/**
 * API Services
 * Handles all backend communication for lead generation
 */

import type {
  LeadFormData,
  ZipCodeLookupResponse,
  LeadSubmissionResponse,
  ZapierWebhookPayload,
} from '@/types';
import { lookupProvidersByZipCode, getStateFromZipCode, getStateFullName } from '@/data/providers';

// API Configuration
const ZAPIER_WEBHOOK_URL = import.meta.env.VITE_ZAPIER_WEBHOOK_URL || '';
const JORNAYA_ACCOUNT_ID = import.meta.env.VITE_JORNAYA_ACCOUNT_ID || '';
const TRUSTED_FORM_ACCOUNT_ID = import.meta.env.VITE_TRUSTED_FORM_ACCOUNT_ID || '';

/**
 * Validate ZIP code format
 * @param zipCode - ZIP code to validate
 * @returns Boolean indicating validity
 */
export function isValidZipCode(zipCode: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(zipCode);
}

/**
 * Lookup electric providers by ZIP code
 * @param zipCode - 5-digit ZIP code
 * @returns Promise with providers and location data
 */
export async function lookupProviders(zipCode: string): Promise<ZipCodeLookupResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (!isValidZipCode(zipCode)) {
    return {
      success: false,
      providers: [],
      state: '',
      city: '',
      message: 'Invalid ZIP code format',
    };
  }

  const cleanZip = zipCode.substring(0, 5);
  const providers = lookupProvidersByZipCode(cleanZip);
  const stateCode = getStateFromZipCode(cleanZip);

  if (!stateCode || providers.length === 0) {
    return {
      success: false,
      providers: [],
      state: '',
      city: '',
      message: 'No providers found for this ZIP code',
    };
  }

  return {
    success: true,
    providers,
    state: getStateFullName(stateCode),
    city: providers[0]?.city || '',
  };
}

/**
 * Submit lead to backend
 * @param formData - Lead form data
 * @returns Promise with submission result
 */
export async function submitLead(formData: LeadFormData): Promise<LeadSubmissionResponse> {
  try {
    // Validate required fields
    if (!formData.zipCode || !formData.tcpaConsent) {
      return {
        success: false,
        leadId: '',
        message: 'ZIP code and TCPA consent are required',
      };
    }

    // Generate unique lead ID
    const leadId = `LEAD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Get providers for the ZIP code
    const providerLookup = await lookupProviders(formData.zipCode);

    // Prepare webhook payload
    const webhookPayload: ZapierWebhookPayload = {
      leadId,
      zipCode: formData.zipCode,
      state: providerLookup.state,
      city: providerLookup.city,
      providers: providerLookup.providers,
      email: formData.email,
      phone: formData.phone,
      firstName: formData.firstName,
      lastName: formData.lastName,
      monthlyBill: formData.monthlyBill,
      homeowner: formData.homeowner,
      tcpaConsent: formData.tcpaConsent,
      jornayaLeadId: formData.jornayaLeadId,
      trustedFormCertUrl: formData.trustedFormCertUrl,
      timestamp: new Date().toISOString(),
      source: window.location.hostname,
      userAgent: navigator.userAgent,
    };

    // Send to Zapier webhook if configured
    if (ZAPIER_WEBHOOK_URL) {
      await sendToZapier(webhookPayload);
    }

    // Log lead submission (in production, this would save to database)
    console.log('Lead submitted:', { ...webhookPayload });

    // Store lead in localStorage for demo purposes
    storeLeadLocally({ leadId, ...formData });

    return {
      success: true,
      leadId,
      message: 'Lead submitted successfully',
      redirectUrl: '/thank-you',
    };
  } catch (error) {
    console.error('Lead submission error:', error);
    return {
      success: false,
      leadId: '',
      message: 'Failed to submit lead. Please try again.',
    };
  }
}

/**
 * Send lead data to Zapier webhook
 * @param payload - Zapier webhook payload
 */
async function sendToZapier(payload: ZapierWebhookPayload): Promise<void> {
  try {
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Zapier webhook failed: ${response.status}`);
    }

    console.log('Zapier webhook sent successfully');
  } catch (error) {
    console.error('Zapier webhook error:', error);
    // Don't throw - we don't want to fail the lead submission if webhook fails
  }
}

/**
 * Store lead locally (for demo/development)
 * @param leadData - Lead data to store
 */
function storeLeadLocally(leadData: Record<string, unknown>): void {
  try {
    const existing = JSON.parse(localStorage.getItem('leads') || '[]');
    existing.push(leadData);
    localStorage.setItem('leads', JSON.stringify(existing));
  } catch {
    // Ignore localStorage errors
  }
}

/**
 * Initialize Jornaya lead ID
 * @returns Jornaya lead ID or null
 */
export function initJornaya(): string | null {
  if (!JORNAYA_ACCOUNT_ID) {
    return null;
  }

  // In production, this would integrate with Jornaya's JavaScript library
  // For demo, we generate a mock lead ID
  const jornayaLeadId = `JRN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Load Jornaya script dynamically
  const script = document.createElement('script');
  script.src = `https://leadid.com/js/jornaya.js?account=${JORNAYA_ACCOUNT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  return jornayaLeadId;
}

/**
 * Initialize TrustedForm
 * @returns TrustedForm certificate URL or null
 */
export function initTrustedForm(): string | null {
  if (!TRUSTED_FORM_ACCOUNT_ID) {
    return null;
  }

  // In production, this would integrate with TrustedForm's JavaScript library
  // For demo, we generate a mock certificate URL
  const certId = `TF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const certUrl = `https://cert.trustedform.com/${certId}`;

  // Load TrustedForm script dynamically
  const script = document.createElement('script');
  script.src = `https://api.trustedform.com/trustedform.js?account=${TRUSTED_FORM_ACCOUNT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  return certUrl;
}

/**
 * Subscribe to newsletter
 * @param email - Email address
 * @returns Promise with subscription result
 */
export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address',
    };
  }

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));

  // Store subscription locally
  try {
    const existing = JSON.parse(localStorage.getItem('newsletter_subs') || '[]');
    existing.push({ email, date: new Date().toISOString() });
    localStorage.setItem('newsletter_subs', JSON.stringify(existing));
  } catch {
    // Ignore localStorage errors
  }

  return {
    success: true,
    message: 'Successfully subscribed to newsletter',
  };
}
