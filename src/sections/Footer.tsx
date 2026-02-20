/**
 * Footer Component
 * Newsletter signup, links, and compliance info
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { subscribeNewsletter } from '@/services/api';

const resourceLinks = [
  { label: 'Solar Calculator', href: '#calculator' },
  { label: 'Solar Net Metering', href: '#net-metering' },
  { label: 'Zero Down Solar', href: '#zero-down' },
  { label: 'Solar Incentives & Rebates', href: '#incentives' },
  { label: 'Solar Energy Basics', href: '#basics' },
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Terms & Disclosures', href: '#terms' },
  { label: 'Do Not Sell My Info', href: '#privacy' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Installer Sign Up', href: '#installers' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubscribeStatus(null);

    const result = await subscribeNewsletter(email);
    setSubscribeStatus(result);

    if (result.success) {
      setEmail('');
    }

    setIsSubmitting(false);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              <span className="text-xl font-bold">energybillcruncher</span>
            </a>

            <p className="text-gray-400 mb-6 max-w-md">
              EnergyBillCruncher is an unbiased and free online resource created to benefit
              homeowners. Join our newsletter & stay up-to-date with the latest solar news.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-yellow-400"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || !email}
                className="h-12 px-6 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Subscribe Status */}
            {subscribeStatus && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 text-sm ${
                  subscribeStatus.success ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {subscribeStatus.message}
              </motion.p>
            )}
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Installer CTA */}
            <div className="mt-8 p-4 bg-white/5 rounded-lg">
              <p className="text-sm font-semibold mb-2">Are you a Solar Installer?</p>
              <p className="text-xs text-gray-400 mb-3">
                Our team is here for you! Sign up and get access to premium leads that convert.
              </p>
              <a
                href="#installers"
                className="text-sm text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                Join our network →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance & Legal */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-xs text-gray-500 space-y-4">
            <p>
              * Tax and credits or incentives including those provided by federal, state, or local
              governments may change or end. This can impact the amount of money you might save.
              Consult a tax professional to understand any tax liability or eligibility for any tax
              credits that may result from the purchase of your solar system.
            </p>
            <p>
              † Savings vary depending on your energy consumption, system cost, home location and
              characteristics, and your utility&apos;s policies.
            </p>
            <p>
              ** All financing is subject to credit approval. This is not a commitment to make a
              loan. Loans are subject to borrower qualifications, and final credit approval.
              Approvals are subject to interest rates, program guidelines, and are subject to change
              without notice based on applicant&apos;s eligibility and market conditions. Financing
              for credit programs is not provided by EnergyBillCruncher.com; financing is provided
              by third-party financial institutions without regard to race, color, religion, national
              origin, sex or familial status.
            </p>
            <p>
              ‡ Your utility or electric cooperative may not be required to offer net metering.
              Net-metering programs vary by state. Your utility bills may have fixed fees that
              cannot be zeroed out. Excess electricity may be compensated at lower than retail rates
              or solar households may be moved to a different rate class. Rates may differ based on
              the time of day. Net-metering programs are subject to change over the life of the
              system.
            </p>
            <p>
              1 2019 Zillow Study shows solar increases your home value.{''}
              <a
                href="https://www.zillow.com/research/solar-panels-house-sell-more-23798/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                https://www.zillow.com/research/solar-panels-house-sell-more-23798/
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} EnergyBillCruncher. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Jornaya Badge */}
              <div className="text-xs text-gray-600">Jornaya Certified</div>
              {/* TrustedForm Badge */}
              <div className="text-xs text-gray-600">TrustedForm Verified</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
