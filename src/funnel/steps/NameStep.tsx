/**
 * Name Step
 * First and last name input
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, User, Lock } from 'lucide-react';
import type { FunnelData } from '../Funnel';

interface NameStepProps {
  data: FunnelData;
  updateData: (field: keyof FunnelData, value: unknown) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function NameStep({ data, updateData, onNext, onBack }: NameStepProps) {
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName.trim()) {
      setError('Please enter your first name');
      return;
    }
    if (!lastName.trim()) {
      setError('Please enter your last name');
      return;
    }

    updateData('firstName', firstName);
    updateData('lastName', lastName);
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
        What's your name?
      </h2>
      <div className="flex items-center justify-center gap-2 text-blue-200 mb-8">
        <Lock className="w-4 h-4" />
        <span className="text-sm">Personal Information Is Safe & Secure.</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setError('');
            }}
            placeholder="First Name"
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
          />
        </div>

        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setError('');
            }}
            placeholder="Last Name"
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
