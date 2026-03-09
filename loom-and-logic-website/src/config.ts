// =============================================================================
// Villa Template Configuration - Loom and Logic Agency
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Loom and Logic Agency | Intelligent Automation & Virtual Assistance",
  description: "Transform your business with intelligent automation. We help B2B founders scale efficiently through custom workflows, AI agents, chatbots, CRM systems, and dedicated virtual assistance.",
  language: "en",
  keywords: "automation, AI chatbots, virtual assistance, workflow automation, CRM integration, B2B automation, business process automation",
  ogImage: "/images/hero-banner.jpg",
  canonical: "https://loomandlogic.com",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "LOOM AND LOGIC",
  brandSubname: "Agency",
  tagline: "Intelligent Automation",
  navLinks: [
    { name: "Home", href: "#hero", icon: "Home" },
    { name: "Services", href: "#services", icon: "Grape" },
    { name: "Portfolio", href: "#portfolio", icon: "BookOpen" },
    { name: "Process", href: "#process", icon: "Users" },
    { name: "Testimonials", href: "#testimonials", icon: "Newspaper" },
    { name: "Contact", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "Get Started",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "LOOM AND LOGIC",
  brandSubname: "Agency",
  yearText: "Est. 2020",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Automation & Virtual Assistance",
  mainTitle: "Transform Your\nBusiness with AI",
  ctaButtonText: "Explore Our Services",
  ctaTarget: "#services",
  stats: [
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 30, suffix: "+", label: "Happy Clients" },
    { value: 1000, suffix: "+", label: "Hours Saved" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
  ],
  decorativeText: "INTELLIGENT AUTOMATION",
  backgroundImage: "/images/hero-banner.jpg",
};

// -----------------------------------------------------------------------------
// Wine Showcase Config -> Repurposed as Services Showcase
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "Our Solutions",
  subtitle: "COMPREHENSIVE AUTOMATION SERVICES",
  mainTitle: "Services That Scale Your Business",
  wines: [
    {
      id: "workflow",
      name: "Workflow Automation",
      subtitle: "Streamline Operations",
      year: "Core",
      image: "/images/service-workflow.jpg",
      filter: "",
      glowColor: "bg-cyan-500/20",
      description: "Streamline repetitive tasks and connect your tools seamlessly. Build custom workflows that run on autopilot, saving time and reducing errors.",
      tastingNotes: "n8n, Zapier, Make, Airtable Integration",
      alcohol: "2 Days",
      temperature: "→ 2 Hours",
      aging: "95% Time Saved",
    },
    {
      id: "chatbot",
      name: "AI Chatbots",
      subtitle: "24/7 Customer Engagement",
      year: "AI",
      image: "/images/service-chatbot.jpg",
      filter: "brightness(1.15) sepia(0.2) hue-rotate(10deg) saturate(1.1)",
      glowColor: "bg-purple-500/20",
      description: "Engage customers 24/7 with intelligent chatbots that understand context, provide real value, and escalate to humans when needed.",
      tastingNotes: "OpenAI, Python, Custom API Integration",
      alcohol: "80%",
      temperature: "Inquiries",
      aging: "60% Cost Reduction",
    },
    {
      id: "ai-agent",
      name: "AI Agents",
      subtitle: "Autonomous Intelligence",
      year: "Pro",
      image: "/images/service-ai-agent.jpg",
      filter: "brightness(1.1) sepia(0.15) hue-rotate(-10deg) saturate(1.2)",
      glowColor: "bg-blue-500/20",
      description: "Deploy autonomous AI agents that handle complex tasks, make intelligent decisions, and learn from every interaction.",
      tastingNotes: "Python, n8n, Machine Learning, NLP",
      alcohol: "15+",
      temperature: "Hours/Week",
      aging: "Saved Per Agent",
    },
    {
      id: "crm",
      name: "CRM Integration",
      subtitle: "Optimize Relationships",
      year: "Plus",
      image: "/images/service-crm.jpg",
      filter: "brightness(1.2) sepia(0.1) hue-rotate(20deg) saturate(0.9)",
      glowColor: "bg-emerald-500/20",
      description: "Optimize customer relationships with smart CRM systems that track leads, analyze patterns, and nurture relationships automatically.",
      tastingNotes: "HubSpot, Salesforce, Pipedrive, Zapier",
      alcohol: "40%",
      temperature: "Productivity",
      aging: "Boost Achieved",
    },
    {
      id: "virtual",
      name: "Virtual Assistance",
      subtitle: "Dedicated Support",
      year: "Essential",
      image: "/images/service-virtual.jpg",
      filter: "brightness(1.25) sepia(0.05) hue-rotate(30deg) saturate(0.8)",
      glowColor: "bg-amber-500/20",
      description: "Get dedicated support for administrative tasks, customer service, scheduling, research, and day-to-day business operations.",
      tastingNotes: "Calendar, Email, Research, Admin Tasks",
      alcohol: "20+",
      temperature: "Hours/Month",
      aging: "Time Freed Up",
    },
    {
      id: "custom",
      name: "Custom Solutions",
      subtitle: "Tailored Automation",
      year: "Bespoke",
      image: "/images/service-custom.jpg",
      filter: "brightness(1.05) sepia(0.25) hue-rotate(-30deg) saturate(1.3)",
      glowColor: "bg-rose-500/20",
      description: "Tailored automation strategies designed specifically for your unique business needs, challenges, and growth goals.",
      tastingNotes: "Custom API, Webhooks, Integration",
      alcohol: "100%",
      temperature: "Bespoke",
      aging: "Tailored to You",
    },
  ],
  features: [
    {
      icon: "Sparkles",
      title: "AI-Powered",
      description: "Cutting-edge artificial intelligence that learns and adapts to your business needs",
    },
    {
      icon: "Clock",
      title: "24/7 Operation",
      description: "Automated systems that work around the clock without interruption",
    },
    {
      icon: "Thermometer",
      title: "Measurable Results",
      description: "Clear metrics and ROI tracking for every automation we implement",
    },
  ],
  quote: {
    text: "Automation is not just about saving time—it's about scaling your business intelligently.",
    attribution: "Loom and Logic Philosophy",
    prefix: "Our Vision",
  },
};

// -----------------------------------------------------------------------------
// Winery Carousel Config -> Repurposed as Portfolio Carousel
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "Case Studies",
  subtitle: "REAL RESULTS FOR REAL BUSINESSES",
  mainTitle: "Featured Projects",
  locationTag: "Global Clientele",
  slides: [
    {
      image: "/images/portfolio-onboarding.jpg",
      title: "SaaS Customer Onboarding",
      subtitle: "Workflow Automation",
      area: "2 Days",
      unit: "→ 2 Hours",
      description: "Automated complete customer onboarding workflow, reducing manual work from 2 days to 2 hours per client. Integrated with CRM and email marketing platforms.",
    },
    {
      image: "/images/portfolio-chatbot.jpg",
      title: "24/7 Customer Support Bot",
      subtitle: "AI Chatbot Solution",
      area: "80%",
      unit: "Inquiries Handled",
      description: "Built intelligent chatbot handling 80% of customer inquiries automatically, with seamless handoff to human agents for complex issues. Reduced support costs by 60%.",
    },
    {
      image: "/images/portfolio-crm.jpg",
      title: "Sales Pipeline Automation",
      subtitle: "CRM Integration",
      area: "40%",
      unit: "Productivity Boost",
      description: "Streamlined sales process by automating lead capture, qualification, and follow-ups. Increased sales team productivity by 40%.",
    },
    {
      image: "/images/portfolio-ai-agent.jpg",
      title: "Intelligent Lead Qualification",
      subtitle: "AI Agent Deployment",
      area: "15+",
      unit: "Hours Saved Weekly",
      description: "Deployed autonomous AI agent that qualifies leads, schedules meetings, and enriches contact data. Saved sales team 15+ hours weekly.",
    },
    {
      image: "/images/portfolio-virtual.jpg",
      title: "Executive Support Package",
      subtitle: "Virtual Assistance",
      area: "20+",
      unit: "Hours/Month Freed",
      description: "Provided dedicated virtual assistant for calendar management, email coordination, research, and administrative tasks. Freed up 20 hours monthly for strategic work.",
    },
    {
      image: "/images/portfolio-sync.jpg",
      title: "Multi-Platform Data Sync",
      subtitle: "Process Automation",
      area: "95%",
      unit: "Error Reduction",
      description: "Built custom automation syncing data across 5 different platforms in real-time. Eliminated manual data entry and reduced errors by 95%.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Museum Config -> Repurposed as Process/How We Work
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "How We Work",
  subtitle: "OUR PROVEN PROCESS",
  mainTitle: "From Discovery to Deployment",
  introText: "We follow a structured approach that ensures every automation project delivers measurable results. Our process is designed to understand your unique needs and build solutions that scale with your business.",
  timeline: [
    { year: "Step 1", event: "Discovery Call - Understanding your business challenges" },
    { year: "Step 2", event: "Strategy & Planning - Creating your automation roadmap" },
    { year: "Step 3", event: "Build & Test - Developing with rigorous quality assurance" },
    { year: "Step 4", event: "Launch & Support - Deployment with ongoing optimization" },
  ],
  tabs: [
    {
      id: "discovery",
      name: "Discovery",
      icon: "History",
      image: "/images/service-workflow.jpg",
      content: {
        title: "Understanding Your Needs",
        description: "We start with a comprehensive discovery call to understand your business, identify pain points, and uncover automation opportunities that will have the biggest impact.",
        highlight: "Free 30-minute consultation",
      },
    },
    {
      id: "strategy",
      name: "Strategy",
      icon: "BookOpen",
      image: "/images/service-crm.jpg",
      content: {
        title: "Building Your Roadmap",
        description: "Based on our discovery, we create a detailed automation strategy with clear milestones, timelines, and expected ROI. You'll know exactly what to expect at every stage.",
        highlight: "Clear project timeline & deliverables",
      },
    },
    {
      id: "delivery",
      name: "Delivery",
      icon: "Award",
      image: "/images/service-ai-agent.jpg",
      content: {
        title: "Implementation Excellence",
        description: "Our team builds your custom solution with rigorous testing and quality assurance. We ensure everything works flawlessly before launch.",
        highlight: "Quality assured & fully tested",
      },
    },
  ],
  openingHours: "Monday - Friday: 9:00 AM - 6:00 PM",
  openingHoursLabel: "Business Hours",
  ctaButtonText: "Start Your Project",
  yearBadge: "2020",
  yearBadgeLabel: "Founded",
  quote: {
    prefix: "Our Promise",
    text: "We don't just build automations—we build partnerships that help your business grow.",
    attribution: "Loom and Logic Team",
  },
  founderPhotoAlt: "Automation Expert",
  founderPhoto: "/images/founder-photo.jpg",
};

// -----------------------------------------------------------------------------
// News Config -> Repurposed as Testimonials & About
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "Latest Insights",
  subtitle: "AUTOMATION TRENDS & TIPS",
  mainTitle: "From Our Blog",
  viewAllText: "View All Articles",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/service-workflow.jpg",
      title: "5 Workflow Automations Every SaaS Needs",
      excerpt: "Discover the essential automations that can save your team hours every week.",
      date: "March 2024",
      category: "Workflow",
    },
    {
      id: 2,
      image: "/images/service-chatbot.jpg",
      title: "AI Chatbots: The Future of Customer Support",
      excerpt: "How intelligent chatbots are transforming customer service delivery.",
      date: "February 2024",
      category: "AI",
    },
    {
      id: 3,
      image: "/images/service-crm.jpg",
      title: "CRM Automation Best Practices",
      excerpt: "Maximize your CRM investment with these proven automation strategies.",
      date: "January 2024",
      category: "CRM",
    },
    {
      id: 4,
      image: "/images/service-virtual.jpg",
      title: "When to Hire a Virtual Assistant",
      excerpt: "Signs that your business is ready for dedicated virtual support.",
      date: "December 2023",
      category: "Virtual Assistance",
    },
  ],
  testimonialsScriptText: "Client Stories",
  testimonialsSubtitle: "REAL FEEDBACK FROM REAL CLIENTS",
  testimonialsMainTitle: "What Our Clients Say",
  testimonials: [
    {
      name: "James Mitchell",
      role: "CEO, TechFlow SaaS",
      text: "Loom and Logic transformed our customer onboarding process. What used to take 2 days now happens in 2 hours. The ROI was immediate and the support has been exceptional.",
      rating: 5,
    },
    {
      name: "Sarah Kim",
      role: "Head of Support, CloudCare",
      text: "The AI chatbot they built handles 80% of our support tickets automatically. Our team can finally focus on complex issues instead of answering the same questions repeatedly.",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      role: "Founder, GrowthLab Agency",
      text: "Working with Loom and Logic has been game-changing. Their virtual assistant service freed up 20 hours of my time monthly, and the automation they built increased our lead conversion by 35%.",
      rating: 5,
    },
  ],
  storyScriptText: "Our Story",
  storySubtitle: "THE JOURNEY SO FAR",
  storyTitle: "Building the Future of Work",
  storyParagraphs: [
    "Loom and Logic was founded with a simple mission: to help businesses work smarter, not harder. We believe that automation and AI should be accessible to every business, not just enterprise giants.",
    "Our team combines technical expertise with business acumen to deliver solutions that actually move the needle. We don't just implement tools—we transform how businesses operate.",
    "From workflow automation to AI-powered chatbots, we've helped dozens of B2B founders reclaim their time and scale their operations efficiently.",
  ],
  storyTimeline: [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "1000+", label: "Hours Saved" },
    { value: "95%", label: "Satisfaction Rate" },
  ],
  storyQuote: {
    prefix: "Our Mission",
    text: "To empower businesses with intelligent automation that drives real results.",
    attribution: "Loom and Logic",
  },
  storyImage: "/images/story-image.jpg",
  storyImageCaption: "The Loom and Logic team building the future of automation",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get in Touch",
  subtitle: "READY TO AUTOMATE?",
  mainTitle: "Let's Build Something Amazing",
  introText: "Have a project in mind? We'd love to hear from you. Let's discuss how we can help you automate your business and free up your time.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: "Mail",
      label: "Email Us",
      value: "loomandlogicagency@gmail.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: "Clock",
      label: "Business Hours",
      value: "Mon - Fri, 9AM - 6PM",
      subtext: "Weekend support available",
    },
    {
      icon: "MapPin",
      label: "Location",
      value: "Remote Worldwide",
      subtext: "Serving clients globally",
    },
    {
      icon: "Phone",
      label: "Schedule a Call",
      value: "Book a Discovery Session",
      subtext: "Free 30-minute consultation",
    },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "john@example.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+1 (555) 000-0000",
    visitDateLabel: "Preferred Call Date",
    visitorsLabel: "Company Size",
    visitorsOptions: ["Solo Founder", "2-10 employees", "11-50 employees", "51-200 employees", "200+ employees"],
    messageLabel: "Tell Us About Your Project",
    messagePlaceholder: "What challenges are you facing? What would you like to automate?",
    submitText: "Send Message",
    submittingText: "Sending...",
    successMessage: "Thank you! We'll be in touch within 24 hours.",
    errorMessage: "Something went wrong. Please try again or email us directly.",
  },
  privacyNotice: "By submitting this form, you agree to our privacy policy. We respect your data and will never share it with third parties.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "LOOM AND LOGIC",
  tagline: "Agency",
  description: "Empowering B2B founders through intelligent automation and dedicated virtual assistance. We help businesses scale efficiently.",
  socialLinks: [
    { icon: "Linkedin", label: "LinkedIn", href: "#" },
    { icon: "Twitter", label: "Twitter", href: "#" },
    { icon: "Instagram", label: "Instagram", href: "#" },
  ],
  linkGroups: [
    {
      title: "Services",
      links: [
        { name: "Workflow Automation", href: "#services" },
        { name: "AI Chatbots", href: "#services" },
        { name: "CRM Integration", href: "#services" },
        { name: "Virtual Assistance", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#testimonials" },
        { name: "Our Process", href: "#process" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ],
  contactItems: [
    { icon: "Mail", text: "loomandlogicagency@gmail.com" },
    { icon: "MapPin", text: "Remote - Serving Global Clients" },
  ],
  newsletterLabel: "Subscribe to our newsletter",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  newsletterErrorText: "Something went wrong. Please try again.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
  copyrightText: "© 2024 Loom and Logic Agency. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Service"],
  icpText: "",
  backToTopText: "Back to top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};
