/**
 * Provider Step
 * Electricity provider selection
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Zap, ChevronDown } from 'lucide-react';
import type { FunnelData } from '../Funnel';
import type { ElectricProvider } from '@/types';

interface ProviderStepProps {
  data: FunnelData;
  updateData: (field: keyof FunnelData, value: unknown) => void;
  onNext: () => void;
  onBack: () => void;
  providers: ElectricProvider[];
}

// Extended list of providers for demo
const additionalProviders: Record<string, string[]> = {
  CA: [
    'Pacific Gas & Electric Co',
    'Southern California Edison Co',
    'San Diego Gas & Electric Co',
    'Los Angeles Department of Water & Power',
    'Sacramento Municipal Util Dist',
    'Modesto Irrigation District',
    'Turlock Irrigation District',
    'Imperial Irrigation District',
    'PacifiCorp',
    'Other',
  ],
  TX: [
    'Oncor Electric Delivery',
    'CenterPoint Energy',
    'AEP Texas',
    'Texas-New Mexico Power',
    'Other',
  ],
  FL: [
    'Florida Power & Light',
    'Duke Energy Florida',
    'Tampa Electric',
    'Orlando Utilities Commission',
    'Other',
  ],
  NY: [
    'Consolidated Edison',
    'New York State Electric & Gas',
    'PSEG Long Island',
    'Central Hudson Gas & Electric',
    'Other',
  ],
};

export default function ProviderStep({ data, updateData, onNext, onBack, providers }: ProviderStepProps) {
  const [selectedProvider, setSelectedProvider] = useState(data.provider);
  const [showDropdown, setShowDropdown] = useState(false);

  // Get state code from providers or default to CA
  const stateCode = providers[0]?.state || 'CA';
  const allProviders = additionalProviders[stateCode] || providers.map(p => p.name).concat(['Other']);

  const handleContinue = () => {
    if (selectedProvider) {
      updateData('provider', selectedProvider);
      onNext();
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
        Who is your electricity provider?
      </h2>

      <div className="space-y-3">
        {/* Top providers as buttons */}
        {allProviders.slice(0, 3).map((provider) => (
          <motion.button
            key={provider}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedProvider(provider)}
            className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all ${
              selectedProvider === provider
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-900 hover:bg-blue-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              selectedProvider === provider ? 'bg-white/20' : 'bg-blue-100'
            }`}>
              <Zap className={`w-5 h-5 ${
                selectedProvider === provider ? 'text-white' : 'text-blue-600'
              }`} />
            </div>
            <span className="text-lg font-semibold text-left flex-1">{provider}</span>
          </motion.button>
        ))}

        {/* More Options Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full p-4 rounded-xl bg-white text-gray-900 hover:bg-blue-50 transition-all flex items-center justify-between"
          >
            <span className="text-lg font-semibold">
              {selectedProvider && !allProviders.slice(0, 3).includes(selectedProvider) 
                ? selectedProvider 
                : 'More Options'}
            </span>
            <ChevronDown className={`w-5 h-5 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl max-h-60 overflow-y-auto z-10"
            >
              {allProviders.slice(3).map((provider) => (
                <button
                  key={provider}
                  onClick={() => {
                    setSelectedProvider(provider);
                    setShowDropdown(false);
                  }}
                  className={`w-full p-3 text-left hover:bg-blue-50 transition-colors ${
                    selectedProvider === provider ? 'bg-blue-100 text-blue-700' : 'text-gray-900'
                  }`}
                >
                  {provider}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Continue Button */}
      {selectedProvider && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleContinue}
          className="w-full mt-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-colors"
        >
          Continue
        </motion.button>
      )}
    </motion.div>
  );
}
