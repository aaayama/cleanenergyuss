/**
 * Power Bill Step
 * Monthly electricity bill selection
 */

import { motion } from 'framer-motion';
import { ChevronLeft, DollarSign } from 'lucide-react';
import type { FunnelData } from '../Funnel';

interface PowerBillStepProps {
  data: FunnelData;
  updateData: (field: keyof FunnelData, value: unknown) => void;
  onNext: () => void;
  onBack: () => void;
}

const billOptions = [
  { value: 'under-100', label: 'Under $100' },
  { value: '100-150', label: '$100 - $150' },
  { value: '151-200', label: '$151 - $200' },
  { value: '200-250', label: '$200 - $250' },
  { value: '250-300', label: '$250 - $300' },
  { value: 'over-300', label: 'Over $300' },
];

export default function PowerBillStep({ data, updateData, onNext, onBack }: PowerBillStepProps) {
  const handleSelect = (value: string) => {
    updateData('powerBill', value);
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

      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
        Current Monthly Power Bill
      </h2>

      <div className="space-y-3">
        {billOptions.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect(option.value)}
            className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all ${
              data.powerBill === option.value
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-900 hover:bg-blue-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              data.powerBill === option.value ? 'bg-white/20' : 'bg-blue-100'
            }`}>
              <DollarSign className={`w-5 h-5 ${
                data.powerBill === option.value ? 'text-white' : 'text-blue-600'
              }`} />
            </div>
            <span className="text-lg font-semibold">{option.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
