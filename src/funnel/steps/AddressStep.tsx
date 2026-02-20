/**
 * Address Step
 * Property address input
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, MapPin } from 'lucide-react';
import type { FunnelData } from '../Funnel';

interface AddressStepProps {
  data: FunnelData;
  updateData: (field: keyof FunnelData, value: unknown) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function AddressStep({ data, updateData, onNext, onBack }: AddressStepProps) {
  const [address, setAddress] = useState(data.address);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!address.trim()) {
      setError('Please enter your street address');
      return;
    }

    updateData('address', address);
    onNext();
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

      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
        What's your property address?
      </h2>
      <p className="text-blue-200 text-center mb-8">
        For verification only. We do not mail.
      </p>

      {/* Location Display */}
      <div className="bg-white/10 rounded-lg p-4 mb-6 text-center">
        <p className="text-white">
          <span className="font-semibold">{data.city}</span>,{' '}
          <span className="font-semibold">{data.state}</span>,{' '}
          <span className="font-semibold">{data.zipCode}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setError('');
            }}
            placeholder="Street Address"
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
          />
        </div>

        {error && (
          <p className="text-red-300 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-colors"
        >
          Continue
        </button>
      </form>
    </motion.div>
  );
}
