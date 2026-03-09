'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, Eye, Lock, Globe, UserCheck, RefreshCw } from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection } from '@/components';

const sections = [
  {
    icon: FileText,
    title: '1. Information Collection',
    content: `We collect information that you provide directly to us, including but not limited to:

• **Personal Information**: Name, email address, phone number, company name, and job title when you fill out forms, subscribe to our services, or contact us.

• **Usage Data**: Information about how you interact with our website and services, including pages visited, time spent, and navigation patterns.

• **Technical Data**: IP address, browser type, operating system, device information, and other technical identifiers collected automatically when you access our services.

• **Communication Data**: Records of correspondence when you contact our support team or engage with our marketing communications.

We only collect information that is necessary for the purposes outlined in this policy and with your explicit or implied consent where required by law.`,
  },
  {
    icon: Eye,
    title: '2. Usage of Data',
    content: `The information we collect is used for the following purposes:

• **Service Delivery**: To provide, maintain, and improve our products and services, including processing transactions and sending related information.

• **Communication**: To respond to your inquiries, provide customer support, and send you technical notices, updates, and administrative messages.

• **Personalization**: To personalize your experience and deliver content and product offerings relevant to your interests.

• **Analytics**: To understand how our services are used, identify trends, and measure the effectiveness of our marketing campaigns.

• **Security**: To detect, prevent, and address technical issues, fraud, and security concerns.

• **Legal Compliance**: To comply with applicable laws, regulations, legal processes, and governmental requests.

We will not sell, trade, or rent your personal information to third parties for their marketing purposes without your explicit consent.`,
  },
  {
    icon: Shield,
    title: '3. Cookies Policy',
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience:

• **Essential Cookies**: Required for the operation of our website. These include cookies that enable you to log in to secure areas.

• **Analytics Cookies**: Allow us to recognize and count visitors and see how visitors navigate our website. This helps us improve site functionality.

• **Functional Cookies**: Enable enhanced functionality and personalization, such as remembering your preferences.

• **Marketing Cookies**: Used to track visitors across websites to display relevant advertisements.

You can control cookie preferences through your browser settings. However, disabling certain cookies may impact your ability to use some features of our website.

We respect "Do Not Track" signals and do not track users when a DNT browser mechanism is in place.`,
  },
  {
    icon: Lock,
    title: '4. Data Security',
    content: `We implement robust security measures to protect your personal information:

• **Encryption**: All data transmitted between your browser and our servers is encrypted using TLS 1.3 or higher.

• **Access Controls**: Strict access controls ensure that only authorized personnel can access personal data, and only for legitimate business purposes.

• **Infrastructure Security**: Our systems are hosted on enterprise-grade infrastructure with 24/7 monitoring, firewalls, and intrusion detection systems.

• **Regular Audits**: We conduct regular security assessments and penetration testing to identify and address vulnerabilities.

• **Employee Training**: All employees receive regular training on data protection and security best practices.

• **Incident Response**: We maintain a comprehensive incident response plan to address any security breaches promptly and effectively.

While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to implementing industry-standard protections.`,
  },
  {
    icon: Globe,
    title: '5. Third-Party Services',
    content: `We may share your information with trusted third parties in the following circumstances:

• **Service Providers**: We work with third-party companies that provide services on our behalf, such as hosting, analytics, payment processing, and customer support. These providers are bound by contractual obligations to protect your data.

• **Business Partners**: With your consent, we may share information with business partners to offer products, services, or promotions that may interest you.

• **Legal Requirements**: We may disclose your information when required by law, court order, or government regulation, or to protect our rights, property, or safety.

• **Business Transfers**: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.

All third parties are required to respect the security of your data and treat it in accordance with applicable laws. We do not allow them to use your personal data for their own purposes.`,
  },
  {
    icon: UserCheck,
    title: '6. User Rights',
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

• **Right to Access**: You can request a copy of the personal information we hold about you.

• **Right to Rectification**: You can request correction of any inaccurate or incomplete information.

• **Right to Erasure**: You can request deletion of your personal data under certain circumstances.

• **Right to Restrict Processing**: You can request that we limit how we use your data.

• **Right to Data Portability**: You can request your data in a structured, machine-readable format.

• **Right to Object**: You can object to the processing of your personal data for direct marketing purposes.

• **Right to Withdraw Consent**: Where processing is based on consent, you can withdraw it at any time.

To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days, as required by applicable law.`,
  },
  {
    icon: RefreshCw,
    title: '7. Policy Updates',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws:

• **Notification**: We will notify you of any material changes by posting the updated policy on our website and, where appropriate, by email.

• **Effective Date**: The updated policy will be effective as of the date posted unless otherwise specified.

• **Review**: We encourage you to review this policy periodically to stay informed about how we protect your information.

• **Acceptance**: Your continued use of our services after any changes indicates your acceptance of the updated policy.

This policy was last updated on December 27, 2024.

For questions about this Privacy Policy or our data practices, please contact us at:

**SJ Group**
Email: privacy@sjgroup.com
Phone: (+91) 831 887 5772
Address: Noida (India)`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        subtitle="Legal"
        title="Privacy Policy"
        description="Your privacy is important to us. This policy outlines how SJ Group collects, uses, protects, and handles your personal information."
        compact
      />

      <AnimatedSection className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last Updated Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-4 glass-card text-center"
          >
            <p className="text-sm text-[var(--foreground-muted)]">
              <strong>Effective Date:</strong> December 27, 2024 | <strong>Last Updated:</strong> December 27, 2024
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
              SJ Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy describes how we collect, use, 
              disclose, and safeguard your information when you visit our website, use our services, or 
              interact with us in any way.
            </p>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mt-4">
              By accessing or using our services, you acknowledge that you have read, understood, and agree 
              to be bound by this Privacy Policy. If you do not agree with our policies and practices, 
              please do not use our services.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">
                      {section.title}
                    </h2>
                  </div>
                  <div 
                    className="text-[var(--foreground-muted)] leading-relaxed whitespace-pre-line prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: section.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--foreground)]">$1</strong>')
                        .replace(/\n\n/g, '</p><p class="mt-4">')
                        .replace(/• /g, '<span class="text-[var(--neon-blue)]">•</span> ')
                    }}
                  />
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[var(--foreground-muted)]">
              If you have any questions about this Privacy Policy, please{' '}
              <a href="/contact" className="text-[var(--neon-blue)] hover:underline">
                contact us
              </a>
              .
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

