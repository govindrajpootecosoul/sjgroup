'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection } from '@/components';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

// Contact info data
const contactInfo = [
  {
    icon: Mail,
    labelKey: 'Email',
    value: 'info@sjgroup.com',
    href: 'mailto:info@sjgroup.com',
  },
  {
    icon: Phone,
    labelKey: 'Phone',
    value: '(+91) 831 887 5772',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    labelKey: 'Address',
    value: 'Noida (India)',
    href: '#',
  },
  {
    icon: Clock,
    labelKey: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    href: '#',
  },
];

// Inquiry types
const inquiryTypes = [
  'General Inquiry',
  'Product Demo',
  'Partnership',
  'Support',
  'Careers',
  'Other',
];

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        subtitle={t('contact.hero.subtitle')}
        title={t('contact.hero.title')}
        description={t('contact.hero.description')}
      />

      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                  Let&apos;s Start a <span className="gradient-text">Conversation</span>
                </h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Whether you&apos;re looking to transform your business, explore partnership 
                  opportunities, or just want to say hello, we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.labelKey}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 glass-card group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--foreground-muted)]">{item.labelKey}</div>
                      <div className="font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Placeholder */}
              <GlassCard className="p-0 overflow-hidden h-64" hover={false}>
                <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto text-[var(--primary)] mb-3" />
                    <p className="text-[var(--foreground-muted)]">Interactive map coming soon</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <GlassCard className="p-8 md:p-10" hover={false}>
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                        {t('contact.form.success')}
                      </h3>
                      <p className="text-[var(--foreground-muted)]">
                        {t('contact.form.successText')}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[var(--foreground)]">Send us a Message</h3>
                          <p className="text-sm text-[var(--foreground-muted)]">Fill out the form below</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="relative">
                          <motion.label
                            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                              focusedField === 'name' || formData.name
                                ? 'top-2 text-xs text-[var(--primary)]'
                                : 'top-4 text-[var(--foreground-muted)]'
                            }`}
                          >
                            {t('contact.form.name')} *
                          </motion.label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="input-field pt-6"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                          <motion.label
                            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                              focusedField === 'email' || formData.email
                                ? 'top-2 text-xs text-[var(--primary)]'
                                : 'top-4 text-[var(--foreground-muted)]'
                            }`}
                          >
                            {t('contact.form.email')} *
                          </motion.label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="input-field pt-6"
                          />
                        </div>

                        {/* Company Field */}
                        <div className="relative">
                          <motion.label
                            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                              focusedField === 'company' || formData.company
                                ? 'top-2 text-xs text-[var(--primary)]'
                                : 'top-4 text-[var(--foreground-muted)]'
                            }`}
                          >
                            {t('contact.form.company')}
                          </motion.label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('company')}
                            onBlur={() => setFocusedField(null)}
                            className="input-field pt-6"
                          />
                        </div>

                        {/* Inquiry Type Field */}
                        <div className="relative">
                          <label className="absolute left-4 top-2 text-xs text-[var(--primary)] pointer-events-none">
                            {t('contact.form.type')} *
                          </label>
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            required
                            className="input-field pt-6 cursor-pointer appearance-none"
                          >
                            <option value="">Select an option</option>
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-5 h-5 text-[var(--foreground-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="relative">
                        <motion.label
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === 'message' || formData.message
                              ? 'top-2 text-xs text-[var(--primary)]'
                              : 'top-4 text-[var(--foreground-muted)]'
                          }`}
                        >
                          {t('contact.form.message')} *
                        </motion.label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={5}
                          className="input-field pt-6 resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            {t('contact.form.submit')}
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs text-center text-[var(--foreground-muted)]">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy-policy" className="text-[var(--primary)] hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Preview Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background-secondary)]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] mb-12">
            Quick answers to common questions about our services and products.
          </p>

          <div className="space-y-4 text-left">
            {[
              {
                q: 'What industries does SJ Group serve?',
                a: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology sectors.',
              },
              {
                q: 'How can I request a product demo?',
                a: 'You can request a demo by filling out the contact form above and selecting "Product Demo" as your inquiry type.',
              },
              {
                q: 'What support options are available?',
                a: 'We offer 24/7 technical support, dedicated account managers, and comprehensive documentation for all our products.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6" hover={false}>
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{faq.q}</h3>
                  <p className="text-[var(--foreground-muted)]">{faq.a}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
