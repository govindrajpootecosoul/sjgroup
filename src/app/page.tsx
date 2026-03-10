'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp,
  Building2,
  Cpu,
  ChevronRight,
  Lightbulb,
  Airplay,
  BrainCircuitIcon
} from 'lucide-react';
import { GlassCard, AnimatedSection, StaggerContainer, StaggerItem } from '@/components';
import { Snowfall } from '@/components/Snowfall';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import FloatingLines from '@/components/FloatingLines';

// Stats data
const stats = [
  { value: '50+', labelKey: 'home.stats.clients', icon: Building2 },
  { value: '1M+', labelKey: 'home.stats.users', icon: Users },
  { value: '99.9%', labelKey: 'home.stats.uptime', icon: TrendingUp },
  { value: '24/7', labelKey: 'home.stats.support', icon: Zap },
];

// Features data
const features = [
  {
    icon: Cpu,
    title: 'Cutting-Edge Technology',
    description: 'Leveraging AI, machine learning, and cloud-native architectures to deliver future-ready solutions.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols ensuring your data is protected with industry-leading standards.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Infrastructure designed to scale globally, supporting millions of users across continents.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Continuous R&D investment driving breakthrough innovations that transform industries.',
  },
  {
    icon: Airplay,
    title: 'Automated Data & Reporting',
    description: 'Automatically collects and processes business data. Eliminates manual report downloads completely. Generates real-time dashboards and actionable insights.',
  },
  {
    icon: Lightbulb,
    title: 'Seller Central Intelligence',
    description: 'Direct integration with Amazon APIs, Tracks sales performance and advertising analytics, Monitors inventory and calculates true profitability in one place.',
  },
  {
    icon: Lightbulb,
    title: 'Unified Business Ecosystem',
    description: 'Replaces multiple fragmented tools with one system. Integrated HRMS and Employee Portal. Built-in Asset Management and Support Tracking. Comprehensive analytics dashboards.',
  },
  {
    icon: BrainCircuitIcon,
    title: 'AI-Powered Business Assistant',
    description: 'Ask simple questions like “What were yesterday’s sales?” or “Which product is out of stock?” Identify best performing ad campaigns instantly. AI retrieves answers directly from your company data.',
  },
];

// Infinite Moving Cards items
const movingCardsItems = [
  { 
    name: 'Melora', 
    title: 'Retail & Fashion Solutions', 
    bgColor: '#012436', 
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
    variant: 'card' as const 
  },
  { 
    name: 'JivaPure', 
    title: 'Natural Wellness Products', 
    bgColor: '#16a34a', 
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80',
    variant: 'card' as const 
  },
  { 
    name: 'SJ Tech', 
    title: 'Digital Solutions & Services', 
    bgColor: '#7c3aed', 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80',
    variant: 'card' as const 
  },
  { 
    name: 'HRMS', 
    title: 'Human Resource Management', 
    bgColor: '#2563eb', 
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80',
    variant: 'card' as const 
  },
  { 
    name: 'ProjectHub', 
    title: 'Project Management', 
    bgColor: '#dc2626', 
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80',
    variant: 'card' as const 
  },
  { 
    name: 'Asset Tracker', 
    title: 'Asset Management', 
    bgColor: '#ea580c', 
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80',
    variant: 'card' as const 
  },
  { 
    name: 'Query Tracker', 
    title: 'Customer Support', 
    bgColor: '#9EB3C2', 
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80',
    variant: 'card' as const 
  },
  { 
    name: 'Business Portal', 
    title: 'Enterprise Platform', 
    bgColor: '#4f46e5', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    variant: 'card' as const 
  },
];

// Services preview
const services = [
  {
    title: 'Melora',
    description: 'Premium retail solutions for clothing businesses with AI-powered inventory and analytics.',
    href: '/services/melora',
    gradient: 'from-[var(--primary)] to-[var(--secondary)]',
  },
  {
    title: 'JivaPure',
    description: 'Pure and natural products delivering wellness through sustainable practices.',
    href: '/services/jivapure',
    gradient: 'from-[var(--secondary)] to-white',
  },
  {
    title: 'SJ Tech Solution',
    description: 'Solutions that move you forward - Enterprise technology services at scale.',
    href: '/services/sj-tech',
    gradient: 'from-[var(--primary)] to-[var(--premium)]',
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Floating Lines Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <FloatingLines
            linesGradient={['#f97316', '#fb923c', '#fdba74']}
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[4, 6, 4]}
            lineDistance={[5, 5, 5]}
            topWavePosition={undefined}
            middleWavePosition={undefined}
            animationSpeed={0.5}
            interactive={true}
            parallax={true}
            parallaxStrength={0.15}
            mixBlendMode="screen"
          />
        </div>
        
        {/* Snowfall Effect */}
        <Snowfall />
        
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

        <div className="relative z-10 max-w-[95%] mx-auto px-3 sm:px-4 lg:px-6 text-center pt-16 pb-12">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            {t('home.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <Link href="/contact">
              <motion.button
                className="bg-transparent border-none flex items-center gap-2 text-lg mx-auto text-white font-semibold hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('home.hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Infinite Moving Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 w-full flex justify-center"
          >
            <div className="w-full max-w-7xl mx-auto">
              <InfiniteMovingCards
                items={movingCardsItems}
                direction="left"
                speed="normal"
                pauseOnHover={true}
                className="[--animation-duration:40s] mx-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-white"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-20 relative bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Container Scroll Animation Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--background)] via-[var(--background-secondary)] to-[var(--background)]">
        <ContainerScroll
          titleComponent={
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-4"
              >
                <span className="gradient-text">Innovation</span> in Motion
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto"
              >
                Experience our cutting-edge technology solutions that transform businesses and drive digital excellence
              </motion.p>
            </div>
          }
        >
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-transparent to-[var(--secondary)]/20 rounded-3xl blur-3xl" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&q=80"
                  alt="Dashboard Analytics"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover rounded-2xl drop-shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-secondary)]/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </ContainerScroll>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background-secondary)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              {t('home.features.title').split(' ').map((word, i, arr) => (
                <span key={i}>
                  {i === arr.length - 1 ? <span className="gradient-text">{word}</span> : word + ' '}
                </span>
              ))}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              {t('home.features.subtitle')}
            </motion.p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <GlassCard className="h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-5">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              {t('home.services.title').split(' ').map((word, i, arr) => (
                <span key={i}>
                  {i === arr.length - 1 ? <span className="gradient-text">{word}</span> : word + ' '}
                </span>
              ))}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              {t('home.services.subtitle')}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <GlassCard className="h-full group cursor-pointer">
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${service.gradient} mb-6`} />
                    <h3 className="text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-[var(--primary)] font-medium">
                      {t('common.learnMore')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background)]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('common.contactUs')}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('common.learnMore')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
