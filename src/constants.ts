import { NavItem, Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact Us', href: '/contact' },
];

export const COMPANY_DETAILS = {
  name: 'Cumbria Supported Living',
  legalName: 'Cumbria Supported Living Ltd',
  crn: '17045936',
  email: 'Info@cumbriasupportedliving.co.uk',
  phone: '01228 555 0123',
  address: 'Enterprise House, 12 Station Road, Carlisle, Cumbria, CA1 1PY',
  hours: 'Monday - Friday: 09:00 - 17:30',
};

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive day-to-day IT management and proactive support for businesses of all sizes.',
    targetAudience: 'SMEs looking for a reliable external IT department.',
    process: ['Audit', 'Onboarding', '24/7 Monitoring', 'Helpdesk Support'],
    benefits: ['Reduced downtime', 'Fixed monthly costs', 'Expert advice'],
    startingPrice: '£250',
    icon: 'ShieldCheck',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Advanced protection against evolving digital threats, ensuring your business data remains secure.',
    targetAudience: 'Companies handling sensitive client data or financial records.',
    process: ['Risk Assessment', 'Implementation', 'Staff Training', 'Continuous Monitoring'],
    benefits: ['GDPR compliance', 'Peace of mind', 'Threat prevention'],
    startingPrice: '£400',
    icon: 'Lock',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Seamless migration and management of cloud infrastructure for enhanced flexibility and scalability.',
    targetAudience: 'Businesses aiming for remote work capabilities and scalability.',
    process: ['Cloud Audit', 'Migration Strategy', 'Deployment', 'Optimization'],
    benefits: ['Work from anywhere', 'Scalable resources', 'Automatic backups'],
    startingPrice: '£150',
    icon: 'Cloud',
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    description: 'Strategic IT planning to align your technology with your long-term business goals.',
    targetAudience: 'Growing businesses needing a digital transformation roadmap.',
    process: ['Discovery', 'Strategy Development', 'Project Management', 'Review'],
    benefits: ['Strategic alignment', 'ROI optimization', 'Future-proofing'],
    startingPrice: '£800',
    icon: 'Lightbulb',
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design, installation, and maintenance of robust wired and wireless networks.',
    targetAudience: 'Offices requiring high-speed, reliable connectivity.',
    process: ['Site Survey', 'Design', 'Installation', 'Testing'],
    benefits: ['High-speed connectivity', 'Reliable uptime', 'Secure access'],
    startingPrice: '£500',
    icon: 'Network',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Essential',
    price: '£199',
    features: [
      'Remote Support',
      'Antivirus Management',
      'Cloud Backups (50GB)',
      'Monthly Health Check',
      'Email Support',
    ],
    supportLevel: 'Business Hours (9-5)',
    idealFor: 'Small startups and sole traders',
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '£499',
    features: [
      'Remote & On-site Support',
      'Advanced Cyber Security',
      'Cloud Backups (500GB)',
      'Weekly Reporting',
      'Priority Helpdesk',
      'Office 365 Management',
    ],
    supportLevel: 'Priority Support (8-8)',
    idealFor: 'Growing SMEs with 10-50 employees',
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '£999',
    features: [
      'Unlimited On-site Support',
      'Full Managed Security (SOC)',
      'Unlimited Cloud Backups',
      'Dedicated Account Manager',
      '24/7 Emergency Support',
      'Strategic IT Roadmap',
    ],
    supportLevel: '24/7/365 Support',
    idealFor: 'Large organisations with complex needs',
    cta: 'Contact Sales',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alistair Graham',
    role: 'Managing Director',
    company: 'Lakeside Logistics',
    content: 'Cumbria IT Solutions transformed our remote working capabilities overnight. Their professionalism and local knowledge are unmatched.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Eden Valley Care',
    content: 'The peace of mind we have knowing our data is secure and GDPR compliant is worth every penny. Excellent service.',
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    company: 'Carlisle Creative',
    content: 'Fast, reliable, and they speak plain English. No technical jargon, just solutions that work.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Cloud Migration Success',
    client: 'Northern Manufacturing Ltd',
    challenge: 'Legacy on-premise servers causing frequent downtime and high maintenance costs.',
    solution: 'Full migration to Microsoft Azure with redundant backup systems.',
    result: 'Saved £12,000 annually in hardware costs and achieved 99.99% uptime.',
  },
  {
    title: 'Cyber Security Overhaul',
    client: 'Cumbria Legal Partners',
    challenge: 'Inadequate security measures leading to a near-miss phishing attempt.',
    solution: 'Implemented Multi-Factor Authentication (MFA) and advanced endpoint protection.',
    result: 'Zero security breaches in 24 months and full GDPR compliance certification.',
  },
];
