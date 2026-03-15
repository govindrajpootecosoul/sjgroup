'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight,
  BarChart3,
  Building2,
  Bot,
  ChevronRight,
  Zap,
  Users,
  Clock,
  X
} from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection } from '@/components';
import { LogoLoop } from '@/components/LogoLoop';

interface SolutionPackage {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  popupContent: string[];
}

const solutionPackages: SolutionPackage[] = [
  {
    id: 'ecommerce-intelligence',
    icon: BarChart3,
    title: 'E‑commerce Intelligence Suite',
    description:
      'A unified analytics platform that transforms marketplace data into actionable insights for smarter e-commerce decisions.',
    color: 'from-yellow-500 to-orange-500',
    popupContent: [
      'Amazon Sellercentral automation',
      'Shopify report automation',
      'Helium 10 scraping',
      'Power BI dashboards',
      'Tailored for brands and agencies',
    ],
  },
  {
    id: 'operations-control-tower',
    icon: Building2,
    title: 'Business Control Solution',
    description:
      'A centralized command center that monitors operations, automates workflows, and delivers real-time performance visibility.',
    color: 'from-indigo-500 to-blue-500',
    popupContent: [
      'SJ DataCanvas', 'HRMS', 'Asset Tracker', 'Query Tracker', 'ProjectHUB', 'Finance Tools',
      'Custom business portal',
    ],
  },
  {
    id: 'product-experience-lab',
    icon: Bot,
    title: 'Digital Solutions with Intelligence & Automation',
    description:
      'An innovation hub where data, design, and experimentation come together to build better digital products and user experiences.',
    color: 'from-emerald-500 to-teal-500',
    popupContent: [
      'Website and Webapp development with AI-powered chatbots',
      'iOS and Android app development with AI-powered chatbots',
      'UI/UX design',
      'Custom AI chat models',
    ],
  },
];

const stats = [
  { value: '40–80', label: 'Hours saved / month', icon: Clock },
  { value: '20–30%', label: 'Reporting cost reduced', icon: Zap },
  { value: '200+', label: 'Projects delivered', icon: Users },
  { value: '150+', label: 'Tech & domain experts', icon: Building2 },
];

export default function SJTechPage() {
  const [selectedService, setSelectedService] = useState<SolutionPackage | null>(null);
  const [isFlowOpen, setIsFlowOpen] = useState(false);

  const [teamSize, setTeamSize] = useState('15');
  const [avgSalary, setAvgSalary] = useState('30000');
  const [hoursWasted, setHoursWasted] = useState('10');

  const estimatedMonthlySavings = useMemo(() => {
    const size = Number(teamSize) || 0;
    const salary = Number(avgSalary) || 0;
    const hours = Number(hoursWasted) || 0;
    if (!size || !salary || !hours) return 0;

    const hourlyRate = salary / (22 * 8); // rough working days * hours
    const totalHours = size * hours;
    const baselineSavings = totalHours * hourlyRate;

    // Assume automation can reclaim 40–60% of wasted time.
    return Math.round(baselineSavings * 0.5);
  }, [teamSize, avgSalary, hoursWasted]);

  const handleServiceClick = (offering: SolutionPackage) => {
    setSelectedService(offering);
    setIsFlowOpen(true);
  };

  const handleClosePopup = () => {
    setIsFlowOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        subtitle="For businesses tired of manual reporting and repetitive work"
        title="Automation & analytics for businesses that want people focused on thinking, not copy‑paste"
        compact
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="max-w-4xl mx-auto mb-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center flex flex-col items-center gap-2"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] mb-1">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-[var(--foreground)]">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wide text-[var(--foreground-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-lg md:text-xl font-semibold text-[var(--foreground-muted)] mt-2 max-w-3xl mx-auto"
        >
          <span className="font-extrabold text-[var(--foreground)]">Cut 40–80+ hours</span>{' '}
          of manual work every month with unified dashboards, workflows, and AI assistants for your reports, operations, and data.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-sm md:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto"
        >
          We combine real operator experience with full-stack engineering to automate the boring work your team hates—across any industry or size of business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <motion.button
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a 30-minute automation audit (free)
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <Link href="/about">
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See example dashboards & workflows
            </motion.button>
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-3 text-xs md:text-sm text-[var(--foreground-muted)]"
        >
          Typical clients save 40–80 hours/month and 20–30% reporting cost within the first 90 days.
        </motion.p>
      </PageHero>

      {/* Pain → ROI Section */}
      <AnimatedSection className="py-20 bg-[var(--background-secondary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4 text-center"
          >
            Turn manual reporting into automated insights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--foreground-muted)] text-center max-w-3xl mx-auto"
          >
            SJ Tech centralises your business data and automates reporting so your team spends less time compiling
            spreadsheets and more time making decisions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs md:text-sm text-[var(--foreground-muted)] text-center max-w-2xl mx-auto mt-3 mb-10"
          >
            Modern teams shouldn&apos;t spend hours every week switching between tools, downloading reports, and merging data.
          </motion.p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Data &amp; reporting is still manual
              </h3>
              <ul className="list-disc list-inside text-[var(--foreground-muted)] space-y-1 text-sm">
                <li>Teams spend 4–6 hours weekly creating reports in Excel.</li>
                <li>Amazon sellers spend 2–3 hours daily downloading reports.</li>
                <li>Data from multiple systems must be manually cleaned and combined.</li>
              </ul>
              <div className="mt-4 h-1.5 w-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]" />
            </GlassCard>

            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Too many disconnected tools
              </h3>
              <ul className="list-disc list-inside text-[var(--foreground-muted)] space-y-1 text-sm">
                <li>Separate platforms for HR, Attendance, Assets, Finance, Support, and Analytics.</li>
                <li>Creates massive data silos.</li>
                <li>Causes severe operational inefficiency.</li>
              </ul>
              <div className="mt-4 h-1.5 w-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
            </GlassCard>

            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Lack of real-time visibility
              </h3>
              <ul className="list-disc list-inside text-[var(--foreground-muted)] space-y-1 text-sm">
                <li>Weekly or monthly reporting hides real-time performance.</li>
                <li>Inventory issues are discovered too late.</li>
                <li>Finance teams take days to prepare actionable insights.</li>
              </ul>
              <div className="mt-4 h-1.5 w-full rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)]" />
            </GlassCard>

            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Operational impact
              </h3>
              <ul className="list-disc list-inside text-[var(--foreground-muted)] space-y-1 text-sm">
                <li>60+ hours lost per month per team.</li>
                <li>Increased operational costs.</li>
                <li>Slow decision making.</li>
                <li>Higher error rates in business data.</li>
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[var(--foreground-muted)]">
                <div className="p-2 rounded-lg bg-[var(--background-secondary)]/80">
                  <div className="font-semibold text-[var(--foreground)]">60+ hrs</div>
                  <div>Lost per team / month</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--background-secondary)]/80">
                  <div className="font-semibold text-[var(--foreground)]">High</div>
                  <div>Error &amp; rework risk</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Infographic: Hidden cost, full width */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              The hidden cost of fragmented tools
            </h3>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={require('@/components/hidden_loss.png')}
                alt="Fragmented tools lead to hidden productivity losses"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>
          </div>

          {/* Charts + Calculator */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Weekly time drain per employee
              </h3>
              <p className="text-sm text-[var(--foreground-muted)] mb-4">
                Routine report downloading, cleaning, and HR manual tracking consume massive portions of
                the workweek. This donut chart illustrates the average hours wasted per week on
                non-strategic manual tasks across different roles.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full bg-[#1C3B5A]" />
                  <div className="absolute inset-3 rounded-full border-[14px] border-[#3B82F6] border-t-[#E5E7EB] border-l-[#F59E0B] border-b-[#111827]" />
                  <div className="absolute inset-9 rounded-full bg-[#02192a]" />
                </div>
                <div className="space-y-2 text-xs text-[var(--foreground-muted)]">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#F59E0B]" />
                    <span>HR Manual Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#3B82F6]" />
                    <span>Routine Report Prep</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#E5E7EB]" />
                    <span>Amazon Data Stitching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#111827]" />
                    <span>Error Rework</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                See your potential monthly savings
              </h3>
              <p className="text-sm text-[var(--foreground-muted)] mb-4">
                Estimate how much time and money you could save by automating reporting and routine operational work.
              </p>
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div>
                  <label className="block text-[var(--foreground-muted)] mb-1">
                    Team members involved in reporting / manual ops
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-[var(--foreground-muted)] mb-1">
                    Avg monthly salary per member (₹)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(e.target.value)}
                    className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-[var(--foreground-muted)] mb-1">
                    Hours wasted per member / month on manual tasks
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={hoursWasted}
                    onChange={(e) => setHoursWasted(e.target.value)}
                    className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-[var(--background-secondary)] text-sm">
                <div className="text-xs text-[var(--foreground-muted)] mb-1">
                  Estimated monthly savings from automation (approx.)
                </div>
                <div className="text-2xl font-bold text-[var(--foreground)]">
                  {estimatedMonthlySavings > 0 ? `₹${estimatedMonthlySavings.toLocaleString('en-IN')}` : '—'}
                </div>
                <div className="mt-1 text-xs text-[var(--foreground-muted)]">
                  Based on reclaiming ~40–60% of the time currently wasted on manual work. Get a free automation audit to see your real numbers.
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Infographic: From manual reporting to intelligent operations */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              From manual reporting to intelligent operations
            </h3>
            <div className="relative w-full max-w-5xl mx-auto aspect-[2.5/1] rounded-2xl overflow-hidden">
              <Image
                src={require('@/components/before_after.png')}
                alt="Before and after with SJ Tech: from manual reporting to intelligent operations"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </div>

          {/* End Pain → ROI Section content */}
        </div>
      </AnimatedSection>

      {/* Solution Packages Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background-secondary)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              One platform <span className="gradient-text">for your entire 
                Business</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Not a long “services menu”, but three focused solution packages designed to remove the manual work your
              people are currently hired to do.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionPackages.map((offering, index) => (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="expandable-card"
              >
                <GlassCard 
                  className="cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-[var(--primary)] h-full flex flex-col"
                  hover={false}
                  onClick={() => handleServiceClick(offering)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${offering.color} flex items-center justify-center flex-shrink-0`}>
                      <offering.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-[var(--foreground)]">
                          {offering.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-[var(--foreground-muted)] flex-shrink-0" />
                      </div>
                      <p className="text-[var(--foreground-muted)] mt-2 leading-relaxed text-sm">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Proof & Case Studies Section */}
      <AnimatedSection className="py-20 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2"
            >
              Proof from teams like yours
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              We have delivered automation and analytics across e-commerce, manufacturing, services, and internal SJ Group
              brands—always with one goal: free your people from low-value manual work.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <GlassCard>
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                E-commerce & marketplace brand
              </h4>
              <p className="text-xs text-[var(--foreground-muted)] mb-3">
                Automated marketplace, ads, and payout reporting into a single dashboard.
              </p>
              <ul className="text-xs text-[var(--foreground-muted)] list-disc list-inside space-y-1">
                <li>~2 hours/day saved per analyst.</li>
                <li>Reduced stock-outs with real-time inventory alerts.</li>
                <li>Leadership gets a weekly summary email, auto-generated.</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                Mid-size services & operations team
              </h4>
              <p className="text-xs text-[var(--foreground-muted)] mb-3">
                Built an operations control tower combining HR, attendance, finance, and tasks.
              </p>
              <ul className="text-xs text-[var(--foreground-muted)] list-disc list-inside space-y-1">
                <li>Month-end closing time reduced from 10 days to 4.</li>
                <li>30–40% fewer manual follow-ups for status updates.</li>
                <li>Managers make same-day decisions instead of waiting for reports.</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                Internal SJ Group products
              </h4>
              <p className="text-xs text-[var(--foreground-muted)] mb-3">
                Platforms like HRMS and ProjectHub started as internal needs—and now power both our brands and clients.
              </p>
              <ul className="text-xs text-[var(--foreground-muted)] list-disc list-inside space-y-1">
                <li>Real, daily usage by teams across SJ Group.</li>
                <li>Battle-tested workflows and dashboards.</li>
                <li>We bring operator experience, not just agency theory.</li>
              </ul>
            </GlassCard>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="h-full">
              <div className="text-xs uppercase tracking-wide text-[var(--foreground-muted)] mb-2">
                Testimonials
              </div>
              <div className="space-y-4 text-sm text-[var(--foreground-muted)]">
                <p>
                  “We used to pull 8 different reports every day. Now everything is live in a single dashboard—saves my
                  team at least 50 hours a month and our Monday mornings.”
                </p>
                <p>
                  “SJ Tech connected our tools and built simple portals so my team spends time solving problems, not
                  hunting for data.”
                </p>
              </div>
            </GlassCard>

            <GlassCard className="h-full">
              <div className="text-xs uppercase tracking-wide text-[var(--foreground-muted)] mb-2">
                Trusted by brands & teams
              </div>
              <p className="text-sm text-[var(--foreground-muted)] mb-4">
                From growing businesses to established enterprises and internal SJ Group brands, we build and maintain
                automation that teams actually use every day.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[var(--foreground)]">
                <span className="px-3 py-1 rounded-full bg-[var(--background-secondary)]">E-commerce brands</span>
                <span className="px-3 py-1 rounded-full bg-[var(--background-secondary)]">Manufacturing SMEs</span>
                <span className="px-3 py-1 rounded-full bg-[var(--background-secondary)]">Service organizations</span>
                <span className="px-3 py-1 rounded-full bg-[var(--background-secondary)]">Internal SJ Group teams</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Technology + AI Section */}
      <AnimatedSection className="py-16 relative overflow-hidden bg-[var(--background)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2"
            >
              Scalable automation & AI, not fragile scripts
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-[var(--foreground-muted)]"
            >
              Our team of 150+ tech experts builds on modern stacks like React, Next.js, Node.js, Python, and AWS—so your
              dashboards, workflows, and AI agents are secure, scalable, and ready for change.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <GlassCard>
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Practical AI for everyday work
              </h4>
              <ul className="list-disc list-inside text-sm text-[var(--foreground-muted)] space-y-2">
                <li>
                  AI agents that read your business data and answer questions in plain language, like “Which customers or
                  products dropped in margin last month?”.
                </li>
                <li>
                  Assistants that draft weekly performance summaries for management with charts and highlights—no manual
                  PPT work.
                </li>
                <li>
                  Alert bots that watch for anomalies—sudden spikes in returns, delays, or cost—and send updates to
                  email, Slack, or Teams.
                </li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Built on your data, your rules
              </h4>
              <p className="text-sm text-[var(--foreground-muted)] mb-3">
                We connect to the tools you already use—marketplaces, ERPs, HR systems, CRMs, spreadsheets—and design
                automations around your real-world workflows.
              </p>
              <ul className="list-disc list-inside text-sm text-[var(--foreground-muted)] space-y-2">
                <li>Secure data pipelines with audit trails and access controls.</li>
                <li>Modular architecture so changes in one tool do not break everything.</li>
                <li>Documentation and training so your team can use and extend what we build.</li>
              </ul>
            </GlassCard>
          </div>
          <div className="py-8 bg-[var(--background-secondary)] rounded-2xl px-8 overflow-hidden relative">
            <LogoLoop
              logos={[
                { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React', title: 'React' },
                { src: 'https://cdn.simpleicons.org/nextdotjs/000000', alt: 'Next.js', title: 'Next.js' },
                { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript', title: 'TypeScript' },
                { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js', title: 'Node.js' },
                { src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python', title: 'Python' },
                { src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker', title: 'Docker' },
                { src: 'https://cdn.simpleicons.org/amazonaws/232F3E', alt: 'AWS', title: 'AWS' },
                { src: 'https://cdn.simpleicons.org/github/181717', alt: 'GitHub', title: 'GitHub' },
                { src: 'https://cdn.simpleicons.org/mongodb/47A248', alt: 'MongoDB', title: 'MongoDB' },
                { src: 'https://cdn.simpleicons.org/postgresql/4169E1', alt: 'PostgreSQL', title: 'PostgreSQL' },
                { src: 'https://cdn.simpleicons.org/redis/DC382D', alt: 'Redis', title: 'Redis' },
                { src: 'https://cdn.simpleicons.org/kubernetes/326CE5', alt: 'Kubernetes', title: 'Kubernetes' },
              ]}
              speed={60}
              direction="left"
              logoHeight={40}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="var(--background-secondary)"
              scaleOnHover={true}
              className="w-full"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* SJ Tech within SJ Group */}
      <AnimatedSection className="py-16 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="bg-[var(--background)]/80">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
              Who we are within SJ Group
            </h3>
            <p className="text-sm md:text-base text-[var(--foreground-muted)] mb-4">
              SJ Tech is the technology and automation arm of SJ Group—building data, analytics, and digital products
              for both our own brands and external clients.
            </p>
            <p className="text-sm md:text-base text-[var(--foreground-muted)]">
              Because we build and run real products like Melora, JivaPure, HRMS, and ProjectHub, we bring real operator
              experience to every engagement. We know what it means to keep dashboards accurate, workflows simple, and
              teams actually using what we ship.
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background)]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12 md:p-16 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Free your team from manual work in the next 90 days
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
              Book a free 30-minute automation audit and we&apos;ll map your current reporting and operations, identify
              quick-win automations, and share a clear roadmap to save 40–80 hours per month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book your free automation audit
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn how SJ Tech works
                </motion.button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-[var(--foreground-muted)]">
              We reply in under 24 hours. In our first call, we focus on understanding your workflows, spotting quick
              wins, and aligning on a 2–6 week build plan.
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Solution package popup */}
      <AnimatePresence>
        {isFlowOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleClosePopup}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="relative w-full max-w-lg rounded-2xl bg-[var(--background)] border border-[var(--border)] shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute top-4 right-4 p-1 rounded-lg text-[var(--foreground-muted)] hover:bg-[var(--background-secondary)] hover:text-[var(--foreground)]"
                onClick={handleClosePopup}
              >
                <X className="w-5 h-5" />
              </button>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${selectedService.color} mb-4`}>
                <selectedService.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                {selectedService.title}
              </h3>
              <ul className="space-y-2 text-[var(--foreground-muted)]">
                {selectedService.popupContent.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[var(--primary)] mt-1.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
