/**
 * Email Step
 * Email address input
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Mail, Shield } from 'lucide-react';
import type { FunnelData } from '../Funnel';

interface EmailStepProps {
  data: FunnelData;
  updateData: (field: keyof FunnelData, value: unknown) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function EmailStep({ data, updateData, onNext, onBack }: EmailStepProps) {
  const [email, setEmail] = useState(data.email);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    updateData('email', email);
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
        What's your email?
      </h2>
      <div className="flex items-center justify-center gap-2 text-blue-200 mb-8">
        <Shield className="w-4 h-4" />
        <span className="text-sm">We take privacy seriously. No spam!</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="Email"
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
