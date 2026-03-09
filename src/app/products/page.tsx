'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Users,
  Briefcase,
  Package,
  MessageSquare,
  Building2,
  Sparkles
} from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection } from '@/components';
import { PricingModal } from '@/components/PricingModal';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import AssetWatchLogo from '@/components/logo_asset watch.png';

interface PricingPlan {
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  icon: React.ReactElement;
}

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  plans: {
    individual: PricingPlan;
    business: PricingPlan;
  };
}

const AssetTrackerIcon = () => (
  <Image
    src={AssetWatchLogo}
    alt="Asset Tracker logo"
    className="w-8 h-8 object-contain"
  />
);

const products: Product[] = [
  {
    id: 'hrms',
    name: 'HRMS',
    description: 'A comprehensive Human Resource Management System that streamlines HR operations, from recruitment to retirement, with intelligent automation and analytics.',
    icon: Users,
    gradient: 'from-[var(--primary)] to-[var(--secondary)]',
    plans: {
      individual: {
        name: 'Individual',
        subtitle: 'Perfect for small teams',
        monthlyPrice: 49,
        yearlyPrice: 469,
        features: [
          'Up to 50 employees',
          'Employee management',
          'Attendance tracking',
          'Leave management',
          'Basic payroll processing',
          'Document management',
          'Email support',
          'Mobile app access',
        ],
        icon: <Users className="w-4 h-4 text-white" />,
      },
      business: {
        name: 'Business',
        subtitle: 'For growing businesses',
        monthlyPrice: 149,
        yearlyPrice: 1429,
        features: [
          'Unlimited employees',
          'Advanced employee management',
          'Real-time attendance tracking',
          'Automated leave management',
          'Advanced payroll processing',
          'Performance management',
          'Recruitment & onboarding',
          'Analytics & reporting',
          'API integrations',
          'Custom workflows',
          'Priority support',
          'Dedicated account manager',
        ],
        highlighted: true,
        icon: <Building2 className="w-4 h-4 text-white" />,
      },
    },
  },
  {
    id: 'projecthub',
    name: 'ProjectHub',
    description: 'Powerful project management platform for teams of all sizes with advanced collaboration tools and real-time tracking.',
    icon: Briefcase,
    gradient: 'from-[var(--primary)] to-[var(--premium)]',
    plans: {
      individual: {
        name: 'Individual',
        subtitle: 'Perfect for small teams',
        monthlyPrice: 39,
        yearlyPrice: 374,
        features: [
          'Up to 10 projects',
          '5 team members',
          'Task management',
          'Basic reporting',
          'File storage (5GB)',
          'Email support',
          'Mobile app access',
        ],
        icon: <Users className="w-4 h-4 text-white" />,
      },
      business: {
        name: 'Business',
        subtitle: 'For growing businesses',
        monthlyPrice: 99,
        yearlyPrice: 949,
        features: [
          'Unlimited projects',
          'Unlimited members',
          'Advanced Gantt charts',
          'Time tracking',
          'Resource planning',
          'Integrations',
          'Admin controls',
          'Custom fields',
          'Priority support',
        ],
        highlighted: true,
        icon: <Building2 className="w-4 h-4 text-white" />,
      },
    },
  },
  {
    id: 'asset-tracker',
    name: 'Asset Tracker',
    description: 'Complete asset management solution for tracking and maintaining your assets with real-time visibility and automated workflows.',
    icon: AssetTrackerIcon,
    gradient: 'from-[var(--secondary)] to-white',
    plans: {
      individual: {
        name: 'Individual',
        subtitle: 'Perfect for small teams',
        monthlyPrice: 35,
        yearlyPrice: 335,
        features: [
          'Up to 100 assets',
          'QR code scanning',
          'Basic maintenance logs',
          'Mobile app access',
          'Email alerts',
          'Basic reporting',
          'Email support',
        ],
        icon: <Users className="w-4 h-4 text-white" />,
      },
      business: {
        name: 'Business',
        subtitle: 'For growing businesses',
        monthlyPrice: 89,
        yearlyPrice: 849,
        features: [
          'Unlimited assets',
          'GPS tracking',
          'Depreciation tracking',
          'Custom fields',
          'Audit trails',
          'Multi-location',
          'Enterprise SSO',
          'Advanced analytics',
          'API access',
          'Priority support',
        ],
        highlighted: true,
        icon: <Building2 className="w-4 h-4 text-white" />,
      },
    },
  },
  {
    id: 'query-tracker',
    name: 'Query Tracker',
    description: 'Smart customer query management for exceptional support experiences with AI-powered automation and omnichannel capabilities.',
    icon: MessageSquare,
    gradient: 'from-orange-500 to-red-500',
    plans: {
      individual: {
        name: 'Individual',
        subtitle: 'Perfect for small teams',
        monthlyPrice: 45,
        yearlyPrice: 429,
        features: [
          'Up to 500 tickets/mo',
          '3 support agents',
          'Email ticketing',
          'Basic automation',
          'Knowledge base',
          'Email support',
          'Mobile app access',
        ],
        icon: <Users className="w-4 h-4 text-white" />,
      },
      business: {
        name: 'Business',
        subtitle: 'For growing businesses',
        monthlyPrice: 119,
        yearlyPrice: 1139,
        features: [
          'Unlimited tickets',
          'Unlimited agents',
          'Omnichannel support',
          'AI suggestions',
          'SLA management',
          'Custom reports',
          'White-labeling',
          'Advanced analytics',
          'API integrations',
          'Priority support',
        ],
        highlighted: true,
        icon: <Building2 className="w-4 h-4 text-white" />,
      },
    },
  },
  {
    id: 'business-portal',
    name: 'Business Portal',
    description: 'All-in-one enterprise portal that unifies business operations with custom workflows, integrations, and advanced automation.',
    icon: Building2,
    gradient: 'from-indigo-500 to-violet-500',
    plans: {
      individual: {
        name: 'Individual',
        subtitle: 'Perfect for small teams',
        monthlyPrice: 59,
        yearlyPrice: 565,
        features: [
          'Basic dashboard',
          'Document management',
          'Team collaboration',
          'Standard workflows',
          'Mobile access',
          'Email support',
          'Basic integrations',
        ],
        icon: <Users className="w-4 h-4 text-white" />,
      },
      business: {
        name: 'Business',
        subtitle: 'For growing businesses',
        monthlyPrice: 199,
        yearlyPrice: 1899,
        features: [
          'Executive dashboards',
          'Vendor portal',
          'Custom branding',
          'Advanced automation',
          'API platform',
          'Dedicated support',
          'On-premise option',
          'Custom integrations',
          'Priority support',
          'Dedicated account manager',
        ],
        highlighted: true,
        icon: <Building2 className="w-4 h-4 text-white" />,
      },
    },
  },
  {
    id: 'nexaverse',
    name: 'NexaVerse',
    description: 'Your one-stop solution to track and manage all your entertainment in one place. Organize anime, games, movies, K-dramas, websites, credentials, and more with intelligent recommendations and seamless synchronization.',
    icon: Sparkles,
    gradient: 'from-rose-500 to-pink-500',
    plans: {
      individual: {
        name: 'Individual',
        subtitle: 'Perfect for personal use',
        monthlyPrice: 9,
        yearlyPrice: 89,
        features: [
          'Unlimited entertainment tracking',
          'Anime & K-drama watchlist',
          'Game library management',
          'Movie & TV show tracking',
          'Website bookmark organizer',
          'Secure credential storage',
          'Cross-device synchronization',
          'Basic recommendations',
          'Mobile app access',
          'Email support',
        ],
        icon: <Users className="w-4 h-4 text-white" />,
      },
      business: {
        name: 'Business',
        subtitle: 'For teams and organizations',
        monthlyPrice: 29,
        yearlyPrice: 279,
        features: [
          'Everything in Individual plan',
          'Team collaboration features',
          'Shared watchlists & libraries',
          'Advanced AI recommendations',
          'Custom categories & tags',
          'Bulk import/export',
          'API access',
          'Priority support',
          'Advanced analytics',
          'Custom branding',
          'Admin dashboard',
          'Team management',
        ],
        highlighted: true,
        icon: <Building2 className="w-4 h-4 text-white" />,
      },
    },
  },
];

export default function ProductsPage() {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        subtitle="Enterprise Solutions"
        title={t('products.hero.title')}
        description={t('products.hero.subtitle')}
      />

      {/* Products Grid */}
      <AnimatedSection className="py-24 relative bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard
                  className="h-full cursor-pointer group hover:ring-2 hover:ring-[var(--primary)] transition-all"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)] mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-auto pt-4 w-full">
                      <div className="text-sm text-[var(--primary)] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        View Pricing →
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Modal */}
      {selectedProduct && (
        <PricingModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          productName={selectedProduct.name}
          productDescription={selectedProduct.description}
          plans={selectedProduct.plans}
          isYearly={isYearly}
          onToggleYearly={() => setIsYearly(!isYearly)}
        />
      )}
    </div>
  );
}
