/**
 * Solar Lead Funnel
 * Multi-step lead capture form matching EnergyBillCruncher flow
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import ZipCodeStep from './steps/ZipCodeStep';
import PowerBillStep from './steps/PowerBillStep';
import HomeownerStep from './steps/HomeownerStep';
import ProviderStep from './steps/ProviderStep';
import RoofShadeStep from './steps/RoofShadeStep';
import AddressStep from './steps/AddressStep';
import NameStep from './steps/NameStep';
import EmailStep from './steps/EmailStep';
import PhoneStep from './steps/PhoneStep';
import { submitLead } from '@/services/api';
import type { ElectricProvider } from '@/types';

export interface FunnelData {
  zipCode: string;
  powerBill: string;
  homeowner: boolean;
  provider: string;
  roofShade: string;
  address: string;
  city: string;
  state: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const initialData: FunnelData = {
  zipCode: '',
  powerBill: '',
  homeowner: true,
  provider: '',
  roofShade: '',
  address: '',
  city: '',
  state: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

export default function Funnel() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FunnelData>(initialData);
  const [providers, setProviders] = useState<ElectricProvider[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateData = (field: keyof FunnelData, value: unknown) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 9));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const jornayaLeadId = sessionStorage.getItem('lead_jornaya') || undefined;
    const trustedFormCertUrl = sessionStorage.getItem('lead_trustedform') || undefined;

    const result = await submitLead({
      zipCode: data.zipCode,
      email: data.email,
      phone: data.phone,
      firstName: data.firstName,
      lastName: data.lastName,
      address: `${data.address}, ${data.city}, ${data.state} ${data.zipCode}`,
      monthlyBill: data.powerBill,
      homeowner: data.homeowner,
      roofShade: data.roofShade,
      tcpaConsent: true,
      jornayaLeadId,
      trustedFormCertUrl,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            We've received your information and will connect you with top solar installers in your area. 
            Expect a call within 24-48 hours.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Return to Homepage
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col">
      {/* Header */}
      <header className="py-4 px-4">
        <div className="flex justify-center">
          <a href="/" className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <span className="text-xl font-bold text-white">energybillcruncher</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <ZipCodeStep
              key="zipcode"
              data={data}
              updateData={updateData}
              onNext={nextStep}
              setProviders={setProviders}
            />
          )}
          {step === 2 && (
            <PowerBillStep
              key="powerbill"
              data={data}
              updateData={updateData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 3 && (
            <HomeownerStep
              key="homeowner"
              data={data}
              updateData={updateData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 4 && (
            <ProviderStep
              key="provider"
              data={data}
              updateData={updateData}
              onNext={nextStep}
              onBack={prevStep}
              providers={providers}
            />
          )}
          {step === 5 && (
            <RoofShadeStep
              key="roofshade"
              data={data}
              updateData={updateData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 6 && (
            <AddressStep
              key="address"
              data={data}
              updateData={updateData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 7 && (
            <NameStep
              key="name"
              data={data}
              updateData={updateData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 8 && (
            <EmailStep
              key="email"
              data={data}
              updateData={updateData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 9 && (
            <PhoneStep
              key="phone"
              data={data}
              updateData={updateData}
              onSubmit={handleSubmit}
              onBack={prevStep}
              isSubmitting={isSubmitting}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 text-sm">
          <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
            Terms & Disclosures
          </a>
          <a href="/privacy/doNotSellMyInfo" className="text-gray-400 hover:text-white transition-colors">
            Do Not Sell My Info
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Energybillcruncher
        </p>
      </footer>
    </div>
  );
}
