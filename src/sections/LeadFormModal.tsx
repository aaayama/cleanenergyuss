/**
 * Lead Form Modal
 * Multi-step lead capture form with TCPA compliance
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ChevronRight, ChevronLeft, Loader2, Home, Zap, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { submitLead } from '@/services/api';
import type { ElectricProvider } from '@/types';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  providers: ElectricProvider[];
  zipCode: string;
}

const monthlyBillOptions = [
  { value: 'under-100', label: 'Under $100' },
  { value: '100-150', label: '$100 - $150' },
  { value: '150-200', label: '$150 - $200' },
  { value: '200-250', label: '$200 - $250' },
  { value: '250-300', label: '$250 - $300' },
  { value: 'over-300', label: 'Over $300' },
];

const roofShadeOptions = [
  { value: 'full-sun', label: 'Full Sun', description: 'No shade, sun all day' },
  { value: 'partial-shade', label: 'Partial Shade', description: 'Some shade during the day' },
  { value: 'mostly-shady', label: 'Mostly Shady', description: 'Significant shade coverage' },
  { value: 'not-sure', label: 'Not Sure', description: 'I need help determining this' },
];

const creditScoreOptions = [
  { value: 'excellent', label: 'Excellent (720+)' },
  { value: 'good', label: 'Good (680-719)' },
  { value: 'fair', label: 'Fair (640-679)' },
  { value: 'poor', label: 'Poor (Below 640)' },
  { value: 'not-sure', label: 'Not Sure' },
];

export default function LeadFormModal({ isOpen, onClose, providers, zipCode }: LeadFormModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    monthlyBill: '',
    homeowner: true,
    roofShade: '',
    creditScore: '',
    tcpaConsent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 4;

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    if (currentStep === 2) {
      if (!formData.monthlyBill) newErrors.monthlyBill = 'Please select your monthly bill';
    }

    if (currentStep === 3) {
      if (!formData.roofShade) newErrors.roofShade = 'Please select roof shade level';
      if (!formData.creditScore) newErrors.creditScore = 'Please select credit score range';
    }

    if (currentStep === 4) {
      if (!formData.tcpaConsent) {
        newErrors.tcpaConsent = 'You must consent to be contacted';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(step)) return;

    setIsSubmitting(true);

    // Get compliance IDs from session storage
    const jornayaLeadId = sessionStorage.getItem('lead_jornaya') || undefined;
    const trustedFormCertUrl = sessionStorage.getItem('lead_trustedform') || undefined;

    const result = await submitLead({
      ...formData,
      zipCode,
      jornayaLeadId,
      trustedFormCertUrl,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setErrors({ submit: result.message });
    }
  };

  const updateFormData = (field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 10);
    if (numbers.length === 0) return '';
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Success State */}
          {isSuccess ? (
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We&apos;ve received your information and will connect you with top solar installers
                in your area. Expect a call within 24-48 hours.
              </p>
              <Button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700">
                Close
              </Button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Get Your Free Solar Quote</h3>
                <p className="text-blue-100 text-sm">
                  Step {step} of {totalSteps}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 h-2 bg-blue-800/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-yellow-400 rounded-full"
                  />
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {/* Step 1: Contact Info */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">Let&apos;s get started</h4>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData('firstName', e.target.value)}
                          className={errors.firstName ? 'border-red-500' : ''}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData('lastName', e.target.value)}
                          className={errors.lastName ? 'border-red-500' : ''}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className={errors.email ? 'border-red-500' : ''}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formatPhone(formData.phone)}
                        onChange={(e) => updateFormData('phone', e.target.value.replace(/\D/g, ''))}
                        className={errors.phone ? 'border-red-500' : ''}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="address">Street Address (Optional)</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => updateFormData('address', e.target.value)}
                        placeholder="123 Main St"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Monthly Bill */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">
                      What&apos;s your average monthly electric bill?
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                      {monthlyBillOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateFormData('monthlyBill', option.value)}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            formData.monthlyBill === option.value
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <DollarSign
                            className={`w-5 h-5 mb-2 ${
                              formData.monthlyBill === option.value
                                ? 'text-blue-500'
                                : 'text-gray-400'
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              formData.monthlyBill === option.value
                                ? 'text-blue-700'
                                : 'text-gray-700'
                            }`}
                          >
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>

                    {errors.monthlyBill && (
                      <p className="text-red-500 text-sm">{errors.monthlyBill}</p>
                    )}

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Home className="w-5 h-5 text-gray-500" />
                      <div>
                        <Label className="font-medium">Are you a homeowner?</Label>
                        <div className="flex gap-4 mt-2">
                          <button
                            onClick={() => updateFormData('homeowner', true)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              formData.homeowner
                                ? 'bg-blue-600 text-white'
                                : 'bg-white border border-gray-300 text-gray-700'
                            }`}
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => updateFormData('homeowner', false)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              !formData.homeowner
                                ? 'bg-blue-600 text-white'
                                : 'bg-white border border-gray-300 text-gray-700'
                            }`}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Roof & Credit */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        How much shade does your roof get?
                      </h4>
                      <div className="space-y-2">
                        {roofShadeOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateFormData('roofShade', option.value)}
                            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                              formData.roofShade === option.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Zap
                                className={`w-5 h-5 ${
                                  formData.roofShade === option.value
                                    ? 'text-blue-500'
                                    : 'text-gray-400'
                                }`}
                              />
                              <div>
                                <span
                                  className={`font-medium ${
                                    formData.roofShade === option.value
                                      ? 'text-blue-700'
                                      : 'text-gray-700'
                                  }`}
                                >
                                  {option.label}
                                </span>
                                <p className="text-sm text-gray-500">{option.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                      {errors.roofShade && (
                        <p className="text-red-500 text-sm mt-2">{errors.roofShade}</p>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        What&apos;s your estimated credit score?
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {creditScoreOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateFormData('creditScore', option.value)}
                            className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                              formData.creditScore === option.value
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 text-gray-700 hover:border-blue-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      {errors.creditScore && (
                        <p className="text-red-500 text-sm mt-2">{errors.creditScore}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: TCPA Consent */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">Almost done!</h4>

                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-blue-800">
                        <strong>Your ZIP Code:</strong> {zipCode}
                      </p>
                      <p className="text-sm text-blue-800 mt-1">
                        <strong>Providers in your area:</strong>
                      </p>
                      <ul className="mt-2 space-y-1">
                        {providers.slice(0, 3).map((provider) => (
                          <li key={provider.id} className="text-sm text-blue-700 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            {provider.name}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="tcpa"
                          checked={formData.tcpaConsent}
                          onCheckedChange={(checked) =>
                            updateFormData('tcpaConsent', checked === true)
                          }
                          className={errors.tcpaConsent ? 'border-red-500' : ''}
                        />
                        <Label htmlFor="tcpa" className="text-sm text-gray-600 leading-relaxed">
                          By checking this box, I consent to receive marketing emails, phone calls,
                          and text messages from solar installers and partners at the phone number
                          and email provided above, including automated dialing systems. I
                          understand that consent is not a condition of purchase and I can revoke
                          consent at any time. Message and data rates may apply.
                        </Label>
                      </div>
                      {errors.tcpaConsent && (
                        <p className="text-red-500 text-sm mt-2">{errors.tcpaConsent}</p>
                      )}
                    </div>

                    {errors.submit && (
                      <p className="text-red-500 text-sm text-center">{errors.submit}</p>
                    )}
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  )}

                  {step < totalSteps ? (
                    <Button type="button" onClick={handleNext} className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Continue
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Free Quote
                          <Check className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
