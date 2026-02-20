/**
 * Lead Generation Types
 * Full type definitions for the EnergyBillCruncher platform
 */

// Zip Code to Provider mapping
export interface ElectricProvider {
  id: string;
  name: string;
  state: string;
  city: string;
  zipCode: string;
  serviceArea: string[];
  contactPhone?: string;
  website?: string;
}

// Lead form data
export interface LeadFormData {
  zipCode: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  monthlyBill?: string;
  homeowner?: boolean;
  roofShade?: string;
  creditScore?: string;
  tcpaConsent: boolean;
  jornayaLeadId?: string;
  trustedFormCertUrl?: string;
}

// API Response types
export interface ZipCodeLookupResponse {
  success: boolean;
  providers: ElectricProvider[];
  state: string;
  city: string;
  message?: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  leadId: string;
  message: string;
  redirectUrl?: string;
}

// Zapier webhook payload
export interface ZapierWebhookPayload {
  leadId: string;
  zipCode: string;
  state: string;
  city: string;
  providers: ElectricProvider[];
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  monthlyBill?: string;
  homeowner?: boolean;
  tcpaConsent: boolean;
  jornayaLeadId?: string;
  trustedFormCertUrl?: string;
  timestamp: string;
  source: string;
  userAgent: string;
  ipAddress?: string;
}

// Jornaya integration
export interface JornayaConfig {
  accountId: string;
  campaignId: string;
  leadType: string;
}

// TrustedForm integration
export interface TrustedFormConfig {
  accountId: string;
  campaignId: string;
}

// Navigation item
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Blog post
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  slug: string;
}

// Stats counter
export interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

// Step item
export interface StepItem {
  number: number;
  title: string;
  description: string;
}

// Feature card
export interface FeatureCard {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

// Solar learning topic
export interface LearningTopic {
  title: string;
  description: string;
  link: string;
}
