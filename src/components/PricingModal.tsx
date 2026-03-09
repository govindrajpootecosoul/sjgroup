'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { ReactNode } from 'react';

interface PricingPlan {
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  icon: ReactNode;
}

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productDescription: string;
  plans: {
    individual: PricingPlan;
    business: PricingPlan;
  };
  isYearly: boolean;
  onToggleYearly: () => void;
}

export function PricingModal({
  isOpen,
  onClose,
  productName,
  productDescription,
  plans,
  isYearly,
  onToggleYearly,
}: PricingModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[var(--card-bg)] rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-[var(--card-bg)] border-b border-[var(--card-border)] p-4 flex items-start justify-between z-10">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-1">
                    {productName} - Pricing Plans
                  </h2>
                  <p className="text-[var(--foreground-muted)] text-xs md:text-sm max-w-2xl">
                    {productDescription}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 p-2 rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-[var(--foreground-muted)]" />
                </button>
              </div>

              {/* Pricing Toggle */}
              <div className="p-4 border-b border-[var(--card-border)]">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span
                    className={`font-medium transition-colors ${
                      !isYearly ? 'text-[var(--foreground)]' : 'text-[var(--foreground-muted)]'
                    }`}
                  >
                    Monthly
                  </span>
                  <button
                    onClick={onToggleYearly}
                    className="relative w-16 h-8 rounded-full bg-[var(--background-secondary)] border border-[var(--card-border)] p-1 transition-colors"
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]"
                      animate={{ x: isYearly ? 32 : 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  </button>
                  <span
                    className={`font-medium transition-colors ${
                      isYearly ? 'text-[var(--foreground)]' : 'text-[var(--foreground-muted)]'
                    }`}
                  >
                    Yearly
                  </span>
                </div>
                <p className="text-center text-xs text-[var(--foreground-muted)] uppercase tracking-wide">
                  Compare Pricing Plans
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="p-4 grid md:grid-cols-2 gap-4">
                {/* Individual Plan */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                      {plans.individual.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--foreground)]">{plans.individual.name} Plan</h3>
                      <p className="text-xs text-[var(--foreground-muted)]">{plans.individual.subtitle}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-[var(--foreground)]">
                      ${isYearly ? plans.individual.yearlyPrice : plans.individual.monthlyPrice}
                    </span>
                    <span className="text-xs text-[var(--foreground-muted)]"> /month</span>
                  </div>
                  <ul className="space-y-2 mb-4 flex-1">
                    {plans.individual.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--secondary)] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-[var(--foreground-muted)] leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                  className="w-full py-2 rounded-lg bg-[var(--accent)] hover:bg-[#e65d00] text-white text-sm font-medium flex items-center justify-center gap-2 mt-auto transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started →
                  </motion.button>
                </motion.div>

                {/* Business Plan (Premium Highlight) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[var(--premium)] rounded-xl p-4 text-white relative flex flex-col shadow-lg"
                >
                  {plans.business.highlighted && (
                    <div className="absolute -top-2 right-3">
                      <span className="px-2 py-0.5 rounded-full bg-[var(--accent)] text-white text-xs font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      {plans.business.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{plans.business.name} Plan</h3>
                      <p className="text-xs text-white/80">{plans.business.subtitle}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">
                      ${isYearly ? plans.business.yearlyPrice : plans.business.monthlyPrice}
                    </span>
                    <span className="text-xs text-white/80"> /month</span>
                  </div>
                  <ul className="space-y-2 mb-4 flex-1">
                    {plans.business.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-white/90 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="w-full py-2 rounded-lg bg-[var(--accent)] hover:bg-[#e65d00] text-white text-sm font-medium flex items-center justify-center gap-2 mt-auto transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started →
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

