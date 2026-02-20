/**
 * Phone Step
 * Phone number input with TCPA consent
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Phone, Loader2, Check, Zap } from 'lucide-react';
import type { FunnelData } from '../Funnel';

interface PhoneStepProps {
  data: FunnelData;
  updateData: (field: keyof FunnelData, value: unknown) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export default function PhoneStep({ data, updateData, onSubmit, onBack, isSubmitting }: PhoneStepProps) {
  const [phone, setPhone] = useState(data.phone);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 10);
    if (numbers.length === 0) return '';
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const phoneNumbers = phone.replace(/\D/g, '');
    if (phoneNumbers.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    if (!consent) {
      setError('You must agree to the terms to continue');
      return;
    }

    updateData('phone', phoneNumbers);
    onSubmit();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full max-w-lg mx-auto"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-white/80 hover:text-white mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Back
      </button>

      {/* Success Banner */}
      <div className="bg-green-500 rounded-xl p-4 mb-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-green-500" />
          </div>
          <span className="text-white font-bold">You've Been Matched With Top Providers To Get Quotes!</span>
        </div>
        <p className="text-green-100 text-sm">All Providers Selected</p>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
        Complete This Final Step To See Results
      </h2>
      <p className="text-blue-200 text-center text-sm mb-8">
        We respect your privacy. See terms below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Phone Input */}
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            value={formatPhone(phone)}
            onChange={(e) => {
              setPhone(e.target.value.replace(/\D/g, ''));
              setError('');
            }}
            placeholder="Phone Number"
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
          />
        </div>

        {/* TCPA Consent */}
        <div className="bg-white rounded-xl p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setError('');
              }}
              className="w-5 h-5 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600 leading-relaxed">
              By clicking the button above, I am providing my electronic signature in which I authorize up to four{' '}
              <a href="/partners" className="text-blue-600 hover:underline">home services or solar companies</a>{' '}
              to email and/or call me, and send me pre-recorded messages and text messages at the number I've entered above, 
              using an autodialer, with offers about their solar products or services, even if my phone number is on any 
              national, or state or corporate "Do-Not-Call" list. Message and data rates may apply. Up to four of the 
              following solar companies that you have been preselected may contact you with a quote:{' '}
              <span className="font-semibold">
                {data.provider || 'Selected Providers'}
              </span>. 
              Your consent is not a condition of purchase. You may revoke your consent at any time. You also agree to our{' '}
              <a href="/terms" className="text-blue-600 hover:underline">terms</a>{' '}
              and{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">privacy policy</a>.
            </span>
          </label>
        </div>

        {error && (
          <p className="text-red-300 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold text-lg rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              View Results
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
