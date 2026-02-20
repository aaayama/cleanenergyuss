/**
 * Roof Shade Step
 * Roof shade level selection
 */

import { motion } from 'framer-motion';
import { ChevronLeft, Sun, Cloud, CloudFog, HelpCircle } from 'lucide-react';
import type { FunnelData } from '../Funnel';

interface RoofShadeStepProps {
  data: FunnelData;
  updateData: (field: keyof FunnelData, value: unknown) => void;
  onNext: () => void;
  onBack: () => void;
}

const shadeOptions = [
  { value: 'no-shade', label: 'No Shade', icon: Sun, description: 'Full sun all day' },
  { value: 'little-shade', label: 'A Little Shade', icon: Cloud, description: 'Some shade during the day' },
  { value: 'lot-shade', label: 'A Lot Of Shade', icon: CloudFog, description: 'Significant shade coverage' },
  { value: 'uncertain', label: 'Uncertain', icon: HelpCircle, description: 'Not sure about shade level' },
];

export default function RoofShadeStep({ data, updateData, onNext, onBack }: RoofShadeStepProps) {
  const handleSelect = (value: string) => {
    updateData('roofShade', value);
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
        How much roof shade do you have?
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {shadeOptions.map((option) => {
          const Icon = option.icon;
          return (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(option.value)}
              className={`p-6 rounded-xl flex flex-col items-center gap-3 transition-all ${
                data.roofShade === option.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-900 hover:bg-blue-50'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                data.roofShade === option.value ? 'bg-white/20' : 'bg-blue-100'
              }`}>
                <Icon className={`w-7 h-7 ${
                  data.roofShade === option.value ? 'text-white' : 'text-blue-600'
                }`} />
              </div>
              <span className="text-lg font-bold">{option.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
