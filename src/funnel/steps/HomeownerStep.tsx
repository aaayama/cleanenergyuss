/**
 * Homeowner Step
 * Yes/No question about home ownership
 */

import { motion } from 'framer-motion';
import { ChevronLeft, Home, X } from 'lucide-react';
import type { FunnelData } from '../Funnel';

interface HomeownerStepProps {
  data: FunnelData;
  updateData: (field: keyof FunnelData, value: unknown) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function HomeownerStep({ updateData, onNext, onBack }: HomeownerStepProps) {
  const handleSelect = (value: boolean) => {
    updateData('homeowner', value);
    if (value) {
      onNext();
    } else {
      // Show message for non-homeowners
      alert('Solar panels are typically only available for homeowners. You may want to discuss options with your landlord or consider community solar programs.');
    }
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

      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
        Do you own your home?
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSelect(true)}
          className="p-6 rounded-xl bg-white text-gray-900 hover:bg-green-50 transition-all flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <Home className="w-8 h-8 text-green-600" />
          </div>
          <span className="text-xl font-bold">Yes</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSelect(false)}
          className="p-6 rounded-xl bg-white text-gray-900 hover:bg-red-50 transition-all flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <span className="text-xl font-bold">No</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
