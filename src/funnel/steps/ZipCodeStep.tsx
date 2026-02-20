/**
 * ZIP Code Step
 * Landing page of the funnel
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Loader2 } from 'lucide-react';
import { lookupProviders, isValidZipCode, initJornaya, initTrustedForm } from '@/services/api';
import type { FunnelData } from '../Funnel';
import type { ElectricProvider } from '@/types';

interface ZipCodeStepProps {
  data: FunnelData;
  updateData: (field: keyof FunnelData, value: unknown) => void;
  onNext: () => void;
  setProviders: (providers: ElectricProvider[]) => void;
}

export default function ZipCodeStep({ data, updateData, onNext, setProviders }: ZipCodeStepProps) {
  const [zipCode, setZipCode] = useState(data.zipCode);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isValidZipCode(zipCode)) {
      setError('Please enter a valid 5-digit ZIP code');
      return;
    }

    setIsLoading(true);

    try {
      const response = await lookupProviders(zipCode);

      if (response.success && response.providers.length > 0) {
        updateData('zipCode', zipCode);
        updateData('city', response.city);
        updateData('state', response.state);
        setProviders(response.providers);
        
        // Initialize compliance tracking
        const jornayaId = initJornaya();
        const trustedFormUrl = initTrustedForm();
        sessionStorage.setItem('lead_zip', zipCode);
        sessionStorage.setItem('lead_jornaya', jornayaId || '');
        sessionStorage.setItem('lead_trustedform', trustedFormUrl || '');
        
        onNext();
      } else {
        setError(response.message || 'No providers found for this ZIP code');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-xl mx-auto text-center"
    >
      {/* American Flag Decoration */}
      <div className="absolute top-0 left-0 w-32 h-20 overflow-hidden">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <rect width="100" height="60" fill="#B22234" />
          <rect y="4.6" width="100" height="4.6" fill="white" />
          <rect y="13.8" width="100" height="4.6" fill="white" />
          <rect y="23" width="100" height="4.6" fill="white" />
          <rect y="32.2" width="100" height="4.6" fill="white" />
          <rect y="41.4" width="100" height="4.6" fill="white" />
          <rect y="50.6" width="100" height="4.6" fill="white" />
          <rect width="40" height="32" fill="#3C3B6E" />
        </svg>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Unlock Solar Savings Before Funding Runs Out
      </h1>
      <p className="text-lg text-blue-200 mb-8">
        Check eligibility for $0-down solar and start reducing your energy bill today.
      </p>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        {/* Badge */}
        <div className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-6">
          Takes 2 Minutes to Check Eligibility
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={zipCode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                  setZipCode(value);
                  setError('');
                }}
                placeholder="Enter Your Zip Code"
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
                maxLength={5}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || zipCode.length !== 5}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold text-lg rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Checking...
                </>
              ) : (
                'SEE IF YOU QUALIFY'
              )}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
        </form>
      </div>

      {/* Houses Illustration */}
      <div className="mt-12 relative">
        <svg viewBox="0 0 800 150" className="w-full max-w-4xl mx-auto">
          {/* Row of colorful houses */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <g key={i} transform={`translate(${i * 110 + 20}, 50)`}>
              {/* House body */}
              <rect
                x="10"
                y="40"
                width="80"
                height="60"
                fill={['#E74C3C', '#F39C12', '#27AE60', '#3498DB', '#9B59B6', '#E67E22', '#1ABC9C'][i]}
              />
              {/* Roof */}
              <polygon
                points="50,10 10,40 90,40"
                fill={['#C0392B', '#D68910', '#1E8449', '#2980B9', '#8E44AD', '#CA6F1E', '#16A085'][i]}
              />
              {/* Door */}
              <rect x="35" y="70" width="20" height="30" fill="#2C3E50" />
              {/* Window */}
              <rect x="15" y="50" width="15" height="15" fill="#F1C40F" />
              <rect x="60" y="50" width="15" height="15" fill="#F1C40F" />
            </g>
          ))}
          {/* Trees */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={`tree-${i}`} transform={`translate(${i * 100 + 60}, 80)`}>
              <circle cx="0" cy="20" r="20" fill="#27AE60" />
              <rect x="-3" y="35" width="6" height="25" fill="#8B4513" />
            </g>
          ))}
        </svg>
      </div>
    </motion.div>
  );
}
