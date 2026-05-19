import type { NavItem, Feature, Testimonial, PricingPlan, Stat, FAQ } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const stats: Stat[] = [
  { value: '50K+', label: 'Active Teams' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '3×', label: 'Faster Delivery' },
];

export const features: Feature[] = [
  {
    icon: 'Zap',
    title: 'Blazing Fast Workflows',
    description:
      'Automate repetitive tasks and eliminate bottlenecks. NovaSpark intelligently queues, prioritises, and executes work so your team focuses on what matters.',
  },
  {
    icon: 'Users',
    title: 'Real-Time Collaboration',
    description:
      'Everyone stays in sync with live cursors, instant comments, and conflict-free merging. Say goodbye to version chaos and hello to seamless teamwork.',
  },
  {
    icon: 'BarChart2',
    title: 'Actionable Analytics',
    description:
      'Turn raw data into clear decisions. Beautiful dashboards surface the metrics that move the needle, from sprint velocity to customer happiness scores.',
  },
  {
    icon: 'Shield',
    title: 'Enterprise-Grade Security',
    description:
      'SOC 2 Type II certified, end-to-end encrypted, and GDPR compliant. Your data is locked down tighter than Fort Knox — and we can prove it.',
  },
  {
    icon: 'Puzzle',
    title: '200+ Integrations',
    description:
      'Plug into Slack, GitHub, Jira, Notion, Salesforce, and hundreds more with one click. NovaSpark lives where you already work.',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Powered Suggestions',
    description:
      'Our built-in AI learns your team's patterns and proactively suggests improvements, from smarter assignments to predicted delivery dates.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'Apexify',
    avatar: 'SC',
    quote:
      'NovaSpark cut our sprint planning from 3 hours to 20 minutes. The AI suggestions alone paid for itself in the first week.',
    rating: 5,
  },
  {
    name: 'Marcus Okafor',
    role: 'CTO',
    company: 'Loopline',
    avatar: 'MO',
    quote:
      "We evaluated six tools. NovaSpark was the only one that didn't require a PhD to set up. The team adopted it overnight.",
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Product Lead',
    company: 'Stellarworks',
    avatar: 'PN',
    quote:
      'The analytics dashboard is genuinely beautiful. I finally have one place to answer every stakeholder question without digging through spreadsheets.',
    rating: 5,
  },
  {
    name: 'James Whitfield',
    role: 'Founder & CEO',
    company: 'Nimbly',
    avatar: 'JW',
    quote:
      'We shipped our last three features ahead of schedule. I attribute at least 40% of that improvement directly to NovaSpark.',
    rating: 5,
  },
  {
    name: 'Aiko Tanaka',
    role: 'Engineering Manager',
    company: 'Fluxcore',
    avatar: 'AT',
    quote:
      "Best investment we made this year. The integrations are rock solid and the support team actually responds within minutes — not days.",
    rating: 5,
  },
  {
    name: 'Luca Ferraro',
    role: 'Head of Product',
    company: 'Brightloop',
    avatar: 'LF',
    quote:
      'Real-time collaboration changed everything for our remote team. No more conflicting docs, no more lost context. Just clean, fast execution.',
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for solo builders and tiny teams just getting started.',
    features: [
      'Up to 3 team members',
      '5 active projects',
      'Basic analytics',
      '10 integrations',
      'Community support',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per seat / mo',
    description: 'For growing teams that need serious power without enterprise complexity.',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Advanced analytics & AI',
      '200+ integrations',
      'Priority email support',
      'Custom workflows',
      'SSO & SAML',
    ],
    cta: 'Start 14-day free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'billed annually',
    description: 'Tailored solutions for large organisations with complex needs.',
    features: [
      'Everything in Pro',
      'Dedicated success manager',
      'Custom SLA & uptime',
      'On-premise deployment',
      'Advanced audit logs',
      'HIPAA & SOC 2',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How does the free trial work?',
    answer:
      'Start your 14-day Pro trial with no credit card required. You get full access to every Pro feature. At the end of the trial, you can choose to subscribe or downgrade to our free Starter plan — no pressure.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. Upgrade or downgrade any time from your account settings. Upgrades take effect immediately; downgrades take effect at the next billing cycle.',
  },
  {
    question: 'What integrations do you support?',
    answer:
      'NovaSpark integrates with 200+ tools including Slack, GitHub, GitLab, Jira, Notion, Linear, Figma, Salesforce, HubSpot, Zendesk, and many more. We also provide a REST API and webhooks for custom integrations.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. NovaSpark is SOC 2 Type II certified and GDPR compliant. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We undergo third-party penetration testing quarterly.',
  },
  {
    question: 'Do you offer discounts for startups or non-profits?',
    answer:
      'We offer a 50% discount for early-stage startups (under $1M ARR) and a 40% discount for registered non-profits. Reach out to our team with proof of eligibility.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Starter users have access to our community forum and documentation. Pro users get priority email support with a 4-hour response SLA. Enterprise customers receive a dedicated Customer Success Manager and 24/7 phone support.',
  },
];
