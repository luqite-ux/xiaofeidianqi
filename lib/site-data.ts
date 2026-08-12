import { Cpu, Factory, FlaskConical, Gauge, Layers3, RadioTower, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Localized = { en: string }

export type ProductCategory = {
  slug: string
  title: Localized
  eyebrow: string
  summary: Localized
  applications: string[]
  functions: string[]
  capabilities: string[]
  parameters?: string[]
  icon: LucideIcon
}

export const siteInfo = {
  brand: 'XIAOFEIDIANQI',
  company: 'Hangzhou Xiaofei Electrical Appliance Co., Ltd.',
  adminDisplayName: '杭州小飞电器有限公司',
  tagline: 'Smart Control Systems for Next-Generation Home Appliances',
  description:
    'OEM/ODM electronic control solutions for steam ovens, electric ovens, vacuum cleaners, disinfection cabinets, range hoods, and integrated kitchen appliances.',
  phone: '0571-86382308',
  email: 'hangzhouxiaofei@126.com',
  address: 'Anjiajiao, Chaijiawu Village, Tangqi Town, Linping District, Hangzhou, China',
  logo: '/images/logo.png',
  founded: '2002'
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Quality & Testing', href: '/quality' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' }
]

export const stats = [
  { value: '2002', label: 'Founded' },
  { value: '3,000 m²', label: 'Production Facility' },
  { value: '4', label: 'Workshops' },
  { value: '4', label: 'Production Lines' },
  { value: '50,000', label: 'Units Monthly' },
  { value: '1,500-1,800', label: 'Units Daily' }
]

export const productCategories: ProductCategory[] = [
  {
    slug: 'steam-oven-control-systems',
    title: { en: 'Steam Oven Control Systems' },
    eyebrow: 'Integrated cooking control',
    summary: {
      en: 'Control systems for steam ovens and combi cooking appliances with steam, baking, hot-air, fermentation, cleaning, timing, and protection logic.'
    },
    applications: ['Steam ovens', 'Combi steam ovens', 'Integrated kitchen appliances'],
    functions: ['Steam mode control', 'Hot-air circulation', 'Steam baking', 'Fermentation', 'Defrosting', 'Heat preservation'],
    capabilities: ['Hardware and software coordination', 'Mode logic customization', 'Control panel adaptation', 'Stable production support'],
    icon: Sparkles
  },
  {
    slug: 'electric-oven-control-systems',
    title: { en: 'Electric Oven Control Systems' },
    eyebrow: 'Heating and timing logic',
    summary: {
      en: 'Electronic control solutions for electric ovens that require temperature logic, heating-zone control, display interaction, and appliance protection functions.'
    },
    applications: ['Electric ovens', 'Kitchen cooking appliances', 'Built-in appliance projects'],
    functions: ['Upper and lower heating control', 'Temperature logic', 'Timing programs', 'Display and key input', 'Protection logic'],
    capabilities: ['Custom control boards', 'Software function mapping', 'Appliance-specific interface support'],
    icon: Gauge
  },
  {
    slug: 'vacuum-cleaner-control-systems',
    title: { en: 'Vacuum Cleaner Control Systems' },
    eyebrow: 'Cleaning appliance control',
    summary: {
      en: 'Control solutions for vacuum cleaners and cleaning appliances, including multi-level suction adjustment, sensing keys, and gesture sliding interaction.'
    },
    applications: ['Vacuum cleaners', 'Household cleaning appliances', 'Private-label cleaning products'],
    functions: ['1-6 level adjustment', 'Sensing key control', 'Gesture sliding sensing', 'Motor control logic'],
    capabilities: ['Interface customization', 'Stable hardware/software performance', 'Model-specific control configuration'],
    icon: RadioTower
  },
  {
    slug: 'disinfection-cabinet-control-systems',
    title: { en: 'Disinfection Cabinet Control Systems' },
    eyebrow: 'Sterilization appliance control',
    summary: {
      en: 'Control systems for disinfection cabinets with ozone, UV, drying, ventilation, layered control, scheduled operation, and safety-protection logic.'
    },
    applications: ['Disinfection cabinets', 'Kitchen sterilization appliances', 'Mother-and-baby appliance lines'],
    functions: ['Ozone operation control', 'UV operation control', 'Hot-air drying', 'Sterile storage ventilation', 'Layered independent control', 'Child lock', 'Door-open power-off protection'],
    capabilities: ['Multiple functional layouts', 'Mass production experience', 'Appliance safety logic adaptation'],
    icon: ShieldCheck
  },
  {
    slug: 'range-hood-control-systems',
    title: { en: 'Range Hood Control Systems' },
    eyebrow: 'Kitchen ventilation electronics',
    summary: {
      en: 'Control panel and electronic control support for range hood products, sensing interaction, fan control logic, and customized appliance interfaces.'
    },
    applications: ['Range hoods', 'Integrated stove systems', 'Kitchen ventilation appliances'],
    functions: ['Panel input', 'Fan control logic', 'Sensing interaction', 'Mode switching'],
    capabilities: ['Control board customization', 'Interface design support', 'OEM/ODM project alignment'],
    icon: Layers3
  },
  {
    slug: 'appliance-power-control-modules',
    title: { en: 'Appliance Power Supply & Control Modules' },
    eyebrow: 'Module-level support',
    summary: {
      en: 'Power and control module support for appliance control systems, including wide AC input and low-voltage output allocation for appliance electronics.'
    },
    applications: ['Control boards', 'Appliance modules', 'Custom electronic control projects'],
    functions: ['85-264V AC input', '5V output up to 3W', '12V output up to 12W', 'Power allocation support'],
    capabilities: ['Module configuration', 'Control-board integration', 'Production-ready technical alignment'],
    parameters: ['Input: 85-264V AC', '5V output: up to 3W', '12V output: up to 12W'],
    icon: Zap
  }
]

export const solutions = [
  {
    title: 'Kitchen Appliance Control',
    text: 'Control systems for steam ovens, electric ovens, range hoods, and integrated cooking appliances.',
    icon: Cpu
  },
  {
    title: 'Cleaning Appliance Control',
    text: 'Multi-level suction, sensing interaction, and motor-control logic for vacuum cleaner projects.',
    icon: RadioTower
  },
  {
    title: 'Sterilization Appliance Control',
    text: 'Functional control for disinfection cabinets, drying, ventilation, layered operation, and protection logic.',
    icon: ShieldCheck
  },
  {
    title: 'OEM/ODM Development',
    text: 'Requirement review, hardware and software development, sampling, testing, and production coordination.',
    icon: Factory
  }
]

export const manufacturingFacts = [
  'SMT machine and wave soldering equipment for control-board production',
  'Potting equipment for module protection and production consistency',
  'Constant temperature and humidity equipment for controlled testing conditions',
  'Anti-interference testing equipment for appliance-control verification',
  'Four workshops and four production lines, including two fully automatic lines'
]

export const workflow = [
  'Requirement Analysis',
  'Hardware & Software Development',
  'Sampling',
  'Testing',
  'Mass Production'
]

export const faqs = [
  {
    question: 'What appliance control systems do you supply?',
    answer: 'We support control systems for steam ovens, electric ovens, vacuum cleaners, disinfection cabinets, range hoods, integrated cooking appliances, and related smart home appliances.'
  },
  {
    question: 'Do you support OEM and ODM projects?',
    answer: 'Yes. We can review appliance requirements, define control functions, support hardware and software development, prepare samples, and coordinate production.'
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'The reference MOQ is 500 sets. Final order terms depend on the appliance type, control functions, and confirmed project requirements.'
  },
  {
    question: 'Can samples be provided?',
    answer: 'Samples can be arranged for suitable projects. Sample timing and project scope are confirmed according to the requested control solution.'
  },
  {
    question: 'What is the regular production lead time?',
    answer: 'Reference production lead time is about 45-60 days, depending on project complexity, sampling progress, and confirmed production requirements.'
  },
  {
    question: 'Can you provide technical data sheets or inspection documents?',
    answer: 'Relevant technical parameters and inspection records can be provided according to the confirmed project and documentation scope.'
  }
]

export const qualitySteps = [
  'Requirement and parameter review',
  'Control-board production checks',
  'Function testing under agreed appliance logic',
  'Anti-interference testing',
  'Final outgoing inspection'
]

export const forbiddenTermsNote = 'Inspection, testing, and agreed specifications are used for public copy.'
