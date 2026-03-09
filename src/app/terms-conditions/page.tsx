'use client';

import { motion } from 'framer-motion';
import { FileCheck, Globe, Shield, AlertTriangle, Ban, Scale, Mail } from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection } from '@/components';

const sections = [
  {
    icon: FileCheck,
    title: '1. Acceptance of Terms',
    content: `By accessing and using the SJ Group website and services ("Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions ("Terms"). These Terms constitute a legally binding agreement between you and SJ Group.

If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms. In such cases, "you" and "your" will refer to both you as an individual and the organization you represent.

We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our Services following any changes indicates your acceptance of the modified Terms.

If you do not agree with any part of these Terms, you must discontinue use of our Services immediately.`,
  },
  {
    icon: Globe,
    title: '2. Use of Website',
    content: `You agree to use our website and Services only for lawful purposes and in accordance with these Terms. Specifically, you agree NOT to:

• Use our Services in any way that violates any applicable federal, state, local, or international law or regulation.

• Attempt to gain unauthorized access to any portion of our Services, other accounts, computer systems, or networks connected to our servers.

• Engage in any conduct that restricts or inhibits any other user from using or enjoying our Services.

• Use our Services to transmit any advertising or promotional material without our prior written consent.

• Impersonate or attempt to impersonate SJ Group, an SJ Group employee, another user, or any other person or entity.

• Use any robot, spider, or other automatic device to access our Services for any purpose without our express written permission.

• Introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful.

We reserve the right to terminate or suspend your access to our Services at any time, without prior notice or liability, for any reason, including breach of these Terms.`,
  },
  {
    icon: Shield,
    title: '3. Intellectual Property',
    content: `All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of SJ Group or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

**Trademarks**: The SJ Group name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of SJ Group or its affiliates. You may not use such marks without our prior written permission.

**License**: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal or internal business purposes.

**Restrictions**: You may not:
• Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content obtained from our Services.
• Reverse engineer, decompile, or disassemble any software or technology used in our Services.
• Remove any copyright, trademark, or other proprietary notices from our content.

Any unauthorized use of our intellectual property may result in legal action.`,
  },
  {
    icon: AlertTriangle,
    title: '4. Limitation of Liability',
    content: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW:

**Disclaimer of Warranties**: Our Services are provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.

SJ Group does not warrant that:
• Our Services will be uninterrupted, timely, secure, or error-free.
• The results obtained from using our Services will be accurate or reliable.
• The quality of any products, services, information, or other material obtained through our Services will meet your expectations.

**Limitation of Damages**: In no event shall SJ Group, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:

• Your access to or use of (or inability to access or use) our Services.
• Any conduct or content of any third party on our Services.
• Any content obtained from our Services.
• Unauthorized access, use, or alteration of your transmissions or content.

Our total liability for any claims arising from or related to these Terms or our Services shall not exceed the amount you paid to us, if any, in the twelve (12) months preceding the claim.`,
  },
  {
    icon: Ban,
    title: '5. Termination',
    content: `**Termination by You**: You may terminate your use of our Services at any time by discontinuing access to our website and, if applicable, closing your account.

**Termination by Us**: We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including but not limited to:

• Breach of these Terms
• Violation of applicable laws or regulations
• Fraudulent, abusive, or illegal activity
• Non-payment of fees (if applicable)
• Extended periods of inactivity
• Request by law enforcement or government agencies

**Effects of Termination**: Upon termination:
• Your right to use our Services will cease immediately.
• We may delete your account and any content or information associated with it.
• All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.

We shall not be liable to you or any third party for any termination of your access to our Services.`,
  },
  {
    icon: Scale,
    title: '6. Governing Law',
    content: `**Applicable Law**: These Terms and any dispute arising out of or related to these Terms or our Services shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.

**Jurisdiction**: You agree to submit to the exclusive jurisdiction of the state and federal courts located in San Francisco County, California, for any actions or proceedings arising out of or relating to these Terms or our Services.

**Dispute Resolution**: Before initiating any legal proceeding, you agree to first attempt to resolve any dispute informally by contacting us. If a dispute cannot be resolved informally, you agree that any claim or dispute will be resolved through binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules.

**Class Action Waiver**: You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.

**Waiver and Severability**: Our failure to enforce any right or provision of these Terms will not be considered a waiver. If any provision is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.`,
  },
  {
    icon: Mail,
    title: '7. Contact Information',
    content: `If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us through the following channels:

**General Inquiries**
Email: legal@sjgroup.com
Phone: (+91) 831 887 5772

**Mailing Address**
SJ Group
Legal Department
123 Innovation Drive
Tech City, TC 12345
United States

**Business Hours**
Monday - Friday: 9:00 AM - 6:00 PM (PST)
Saturday - Sunday: Closed

**Response Time**
We aim to respond to all inquiries within 2-3 business days. For urgent matters, please indicate "URGENT" in your subject line.

**Legal Notices**
Any legal notices to SJ Group should be sent to the above mailing address, attention: Legal Department, or by email to legal@sjgroup.com.

These Terms and Conditions were last updated on December 27, 2024.`,
  },
];

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        subtitle="Legal"
        title="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our services. By using our services, you agree to be bound by these terms."
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
              Welcome to SJ Group. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of 
              our website, products, and services (collectively, &quot;Services&quot;). Please read these Terms 
              carefully before using our Services.
            </p>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mt-4">
              By accessing or using our Services, you signify your agreement to these Terms. If you do not 
              agree to any part of these Terms, you must immediately discontinue use of our Services.
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-pink)] flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">
                      {section.title}
                    </h2>
                  </div>
                  <div 
                    className="text-[var(--foreground-muted)] leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ 
                      __html: section.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--foreground)]">$1</strong>')
                        .replace(/\n\n/g, '</p><p class="mt-4">')
                        .replace(/• /g, '<span class="text-[var(--neon-purple)]">•</span> ')
                    }}
                  />
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Agreement Confirmation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <GlassCard className="p-8 text-center">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                Agreement Confirmation
              </h3>
              <p className="text-[var(--foreground-muted)] mb-6">
                By using our Services, you confirm that you have read, understood, and agree to be bound 
                by these Terms and Conditions. If you have any questions, please{' '}
                <a href="/contact" className="text-[var(--neon-blue)] hover:underline">
                  contact us
                </a>
                {' '}before proceeding.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-[var(--foreground-muted)]">
                <Shield className="w-4 h-4 text-[var(--neon-blue)]" />
                <span>Your rights are protected under applicable consumer protection laws.</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

