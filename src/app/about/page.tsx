'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Target,
  Eye,
  Lightbulb,
  Shield,
  Users,
  TrendingUp,
  Calendar,
  Clock,
  ArrowRightLeft,
  Zap,
  Link2,
  BarChart3,
  ArrowRight,
  Cpu,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { AnimatedSection } from '@/components';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

/** Matches “How we create impact” — section heading text */
const aboutSectionTitleText =
  'text-2xl md:text-3xl font-bold text-[var(--foreground)] tracking-tight text-center';

/** Standalone section title + bottom spacing (no subtitle below) */
const aboutSectionTitle = `${aboutSectionTitleText} mb-12 md:mb-16`;

/** Primary line inside cards / tiles (body copy) */
const aboutCardBody = 'text-sm text-[var(--foreground-muted)] leading-relaxed';

/** Bold label inside a card when paired with body (e.g. impact tiles) */
const aboutCardTitle = 'text-base font-bold text-[var(--foreground)]';

/** Vertical rhythm: section padding (all main bands) */
const sectionPad = 'py-20 md:py-24';

/** Muted band — consistent “system” background (reference layout) */
const sectionMuted = 'bg-[var(--background-secondary)]/35';

/** Grid / flex gap between sibling cards */
const gridGap = 'gap-5 md:gap-6';

/** Gradient icon tile — 48px, white glyph (reference: core values cards) */
const iconTile = (gradient: string) =>
  `flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-sm`;

const iconGlyph = 'h-6 w-6 text-white stroke-[2]';

/** Shared card shell + hover lift */
const cardShell =
  'rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--shadow-md)]';

const cardHoverMotion = { y: -5, transition: { type: 'spring' as const, stiffness: 420, damping: 28 } };

const aboutSubSectionTitle =
  'text-xl md:text-2xl font-bold text-[var(--foreground)] tracking-tight text-center mt-14 md:mt-16 mb-8 md:mb-10';

export default function AboutPage() {
  const { t } = useLanguage();

  const snapshotItems = [
    {
      icon: Calendar,
      gradient: 'from-sky-500 to-blue-600',
      valueKey: 'about.snapshot.1.value' as const,
      labelKey: 'about.snapshot.1.label' as const,
      descKey: 'about.snapshot.1.desc' as const,
    },
    {
      icon: Clock,
      gradient: 'from-amber-500 to-orange-600',
      valueKey: 'about.snapshot.2.value' as const,
      labelKey: 'about.snapshot.2.label' as const,
      descKey: 'about.snapshot.2.desc' as const,
    },
    {
      icon: ArrowRightLeft,
      gradient: 'from-fuchsia-500 to-pink-600',
      valueKey: 'about.snapshot.3.value' as const,
      labelKey: 'about.snapshot.3.label' as const,
      descKey: 'about.snapshot.3.desc' as const,
      badgeKey: 'about.snapshot.3.badge' as const,
      highlight: true as const,
    },
  ];

  const impactItems = [
    {
      icon: Zap,
      gradient: 'from-amber-400 to-orange-500',
      titleKey: 'about.impact.1.title' as const,
      lineKey: 'about.impact.1.line' as const,
    },
    {
      icon: Link2,
      gradient: 'from-blue-500 to-indigo-600',
      titleKey: 'about.impact.2.title' as const,
      lineKey: 'about.impact.2.line' as const,
    },
    {
      icon: BarChart3,
      gradient: 'from-teal-500 to-cyan-600',
      titleKey: 'about.impact.3.title' as const,
      lineKey: 'about.impact.3.line' as const,
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      gradient: 'from-amber-500 to-orange-500',
      titleKey: 'about.values.innovation' as const,
      shortKey: 'about.values.innovation.short' as const,
    },
    {
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-500',
      titleKey: 'about.values.integrity' as const,
      shortKey: 'about.values.integrity.short' as const,
    },
    {
      icon: Users,
      gradient: 'from-emerald-500 to-teal-500',
      titleKey: 'about.values.collaboration' as const,
      shortKey: 'about.values.collaboration.short' as const,
    },
    {
      icon: TrendingUp,
      gradient: 'from-violet-500 to-purple-500',
      titleKey: 'about.values.excellence' as const,
      shortKey: 'about.values.excellence.short' as const,
    },
  ];

  const positioningBullets = [
    { icon: Cpu, gradient: 'from-cyan-500 to-blue-600', key: 'about.hero.pillar1' as const },
    { icon: Link2, gradient: 'from-violet-500 to-purple-600', key: 'about.hero.pillar2' as const },
    {
      icon: ShieldCheck,
      gradient: 'from-emerald-500 to-teal-600',
      key: 'about.hero.pillar3' as const,
    },
  ];

  const culturePointKeys = [
    'about.culture.pill1',
    'about.culture.pill2',
    'about.culture.pill3',
    'about.culture.pill4',
  ] as const;

  const whyKeys = ['about.why.1', 'about.why.2', 'about.why.3'] as const;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Who we are + positioning (merged) */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(90vw,720px)] h-64 bg-[var(--primary)] rounded-full blur-[120px] opacity-[0.06]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium tracking-wide text-[var(--foreground-light)] uppercase mb-4"
          >
            {t('about.hero.kicker')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight leading-[1.1]"
          >
            {t('about.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 text-base md:text-lg font-semibold text-[var(--foreground)] tracking-tight"
          >
            {t('about.hero.brandLine')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-2 text-lg md:text-xl text-[var(--foreground-muted)] font-medium"
          >
            {t('about.hero.tagline')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-8 text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed max-w-2xl mx-auto"
          >
            {t('about.hero.description')}
          </motion.p>
          <ul className="mt-10 max-w-2xl mx-auto text-left space-y-4">
            {positioningBullets.map((row, index) => (
              <motion.li
                key={row.key}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.06 }}
                className="flex items-start gap-4"
              >
                <div className={`${iconTile(row.gradient)} shrink-0`}>
                  <row.icon className={iconGlyph} aria-hidden />
                </div>
                <span className={`${aboutCardBody} text-[var(--foreground)] font-medium pt-1`}>
                  {t(row.key)}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* At a glance: audience line + 3 metric cards */}
      <AnimatedSection className={`${sectionPad} ${sectionMuted}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={aboutSectionTitle}
          >
            {t('about.glance.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className={`${aboutCardBody} text-[var(--foreground)] font-medium text-center max-w-2xl mx-auto mb-12 md:mb-14`}
          >
            {t('about.audience.card1')}
          </motion.p>

          <div className={`grid sm:grid-cols-3 ${gridGap}`}>
            {snapshotItems.map((item, index) => (
              <motion.div
                key={item.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={cardHoverMotion}
                transition={{ delay: index * 0.08 }}
                className={`flex flex-col items-center text-center sm:items-start sm:text-left ${cardShell} p-6 md:p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-lg)] ${
                  'highlight' in item && item.highlight
                    ? 'ring-1 ring-[var(--primary)]/15 border-[var(--primary)]/20'
                    : ''
                }`}
              >
                <div className={`mb-4 ${iconTile(item.gradient)}`} aria-hidden>
                  <item.icon className={iconGlyph} />
                </div>
                {'badgeKey' in item && item.badgeKey ? (
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {t(item.badgeKey)}
                  </p>
                ) : null}
                <p className="text-2xl md:text-3xl font-bold text-[var(--foreground)] tabular-nums tracking-tight">
                  {t(item.valueKey)}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--foreground-light)]">
                  {t(item.labelKey)}
                </p>
                <p
                  className={`mt-3 max-w-[220px] sm:max-w-none mx-auto sm:mx-0 ${aboutCardBody}`}
                >
                  {t(item.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission — brand statement */}
      <AnimatedSection className={sectionPad}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={cardHoverMotion}
              className="relative rounded-2xl border-2 border-[var(--primary)]/20 bg-[var(--card-bg)] p-8 lg:p-10 shadow-[var(--shadow-md)] overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary)] rounded-full blur-[80px] opacity-[0.07] pointer-events-none" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-white mb-6">
                <Eye className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
                {t('about.vision.title')}
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-[var(--foreground)] leading-snug">
                {t('about.vision.text')}
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              whileHover={cardHoverMotion}
              className="relative rounded-2xl border-2 border-[var(--secondary)]/40 bg-[var(--card-bg)] p-8 lg:p-10 shadow-[var(--shadow-md)] overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--secondary)] rounded-full blur-[80px] opacity-[0.12] pointer-events-none" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--primary-muted)] text-[var(--primary)] mb-6">
                <Target className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)] mb-3">
                {t('about.mission.title')}
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-[var(--foreground)] leading-snug">
                {t('about.mission.text')}
              </p>
            </motion.article>
          </div>
        </div>
      </AnimatedSection>

      {/* How we create impact + why (unified) */}
      <AnimatedSection className={`${sectionPad} ${sectionMuted}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={aboutSectionTitle}
          >
            {t('about.impact.title')}
          </motion.h2>
          <div className={`grid md:grid-cols-3 ${gridGap}`}>
            {impactItems.map((item, index) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={cardHoverMotion}
                className={`${cardShell} p-6 md:p-7 flex gap-4 transition-shadow duration-300 hover:shadow-[var(--shadow-lg)] hover:border-[var(--primary)]/25`}
              >
                <div className={`${iconTile(item.gradient)} shrink-0`} aria-hidden>
                  <item.icon className={iconGlyph} />
                </div>
                <div>
                  <h3 className={aboutCardTitle}>{t(item.titleKey)}</h3>
                  <p className={`mt-2 ${aboutCardBody}`}>{t(item.lineKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={aboutSubSectionTitle}
          >
            {t('about.why.title')}
          </motion.h3>
          <ul className="max-w-3xl mx-auto space-y-4">
            {whyKeys.map((key, index) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check
                  className="h-5 w-5 shrink-0 text-[var(--accent)] mt-0.5 stroke-[2.5]"
                  aria-hidden
                />
                <span className={`${aboutCardBody} text-[var(--foreground)] font-medium`}>{t(key)}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* Values & culture (merged — single list, no duplicate culture grid) */}
      <AnimatedSection className={`${sectionPad} pb-24 md:pb-32`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={aboutSectionTitle}
          >
            {t('about.valuesCulture.title')}
          </motion.h2>

          <div className={`grid grid-cols-2 lg:grid-cols-4 ${gridGap} mb-14 md:mb-16`}>
            {values.map((value, index) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={cardHoverMotion}
                className={`${cardShell} p-6 text-center flex flex-col items-center transition-shadow duration-300 hover:shadow-[var(--shadow-lg)] hover:border-[var(--primary)]/25`}
              >
                <div className={`mb-4 ${iconTile(value.gradient)}`}>
                  <value.icon className={iconGlyph} aria-hidden />
                </div>
                <h3 className={aboutCardTitle}>{t(value.titleKey)}</h3>
                <p className={`mt-2 ${aboutCardBody}`}>{t(value.shortKey)}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${sectionMuted} rounded-2xl border border-[var(--card-border)] p-8 md:p-10 max-w-3xl mx-auto`}
          >
            <p className={`${aboutCardBody} text-[var(--foreground)] font-medium text-center mb-2`}>
              {t('about.culture.text')}
            </p>
            <p className={`${aboutCardBody} text-center mb-8`}>{t('about.culture.lead')}</p>
            <ul className="space-y-4 max-w-xl mx-auto">
              {culturePointKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Zap className="h-5 w-5 shrink-0 text-[var(--accent)] mt-0.5 stroke-[2]" aria-hidden />
                  <span className={`${aboutCardBody} text-[var(--foreground)] font-medium`}>{t(key)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Soft CTA */}
      <AnimatedSection className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={cardHoverMotion}
            className={`${cardShell} px-6 py-10 md:px-10 md:py-12 text-center transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]`}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] tracking-tight">
              {t('about.cta.title')}
            </h2>
            <p className="mt-4 text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed max-w-xl mx-auto">
              {t('about.cta.subtitle')}
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-8 inline-flex items-center gap-2 no-underline"
            >
              {t('about.cta.button')}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
