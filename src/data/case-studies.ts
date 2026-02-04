export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  logo: string;
  logoImage?: string;
  image: string;
  category: string;
  title: string;
  description: string;
  productIntro: string;
  supportingText: string;
  metrics: CaseStudyMetric[];
  // Extended content for full case study page
  challenge?: string;
  solution?: string;
  results?: string;
  techStack?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nowgai",
    logo: "nowg ai",
    image: "/images/nowgai.png",
    category: "AI Platform",
    title: "Building the future of AI-assisted development",
    description:
      "Developers needed a faster way to prototype and build applications without getting bogged down in boilerplate. Traditional coding workflows were slow and fragmented across multiple tools.",
    productIntro: "Meet nowg.ai — the Lovable-style vibe coding platform that revolutionizes how developers build with AI.",
    supportingText:
      "Built with Next.js, real-time collaboration features, AI code generation, and seamless deployment pipelines.",
    metrics: [
      { value: "10K+", label: "Lines generated daily" },
      { value: "500+", label: "Active developers" },
      { value: "3x", label: "Faster prototyping" },
    ],
    challenge:
      "Modern developers spend too much time on repetitive boilerplate code. Existing tools were fragmented — code editors, deployment platforms, and AI assistants all lived in separate places. Teams needed a unified platform that could understand context, generate production-ready code, and deploy instantly.",
    solution:
      "We built nowg.ai as an all-in-one AI coding platform. Developers describe what they want in natural language, and the platform generates full applications with proper architecture. Real-time collaboration lets teams work together, while one-click deployment gets apps live in seconds.",
    results:
      "nowg.ai has transformed how developers work. Users report building MVPs in hours instead of weeks. The platform now processes over 10,000 lines of AI-generated code daily, with a growing community of 500+ active developers shipping production apps.",
    techStack: ["Next.js", "TypeScript", "OpenAI GPT-4", "Vercel", "PostgreSQL", "Redis"],
    testimonial: {
      quote: "Working with Prodone on nowg.ai was incredible. They brought cutting-edge AI capabilities that set us apart from competitors. True product partners!",
      author: "Alex Thompson",
      role: "CEO, nowg.ai",
    },
  },
  {
    slug: "cuttheq",
    logo: "CutTheQ",
    image: "/images/cuttheq.png",
    category: "Food Tech",
    title: "Eliminating wait times in food ordering",
    description:
      "Customers hated waiting in long queues at restaurants and cafes. Restaurants needed a solution to manage orders efficiently while improving customer experience.",
    productIntro: "Meet CutTheQ — order online, skip the line, enjoy your meal.",
    supportingText:
      "Mobile app for iOS & Android, restaurant dashboard, real-time order tracking, and integrated payment processing.",
    metrics: [
      { value: "50K+", label: "Orders processed" },
      { value: "200+", label: "Restaurant partners" },
      { value: "15min", label: "Avg. time saved" },
    ],
    challenge:
      "Busy restaurants and cafes were losing customers due to long wait times. Staff were overwhelmed during peak hours, and customers often left frustrated. Restaurant owners needed a way to streamline ordering without hiring more staff or sacrificing service quality.",
    solution:
      "CutTheQ lets customers browse menus, customize orders, and pay directly from their phones. Orders flow straight to the kitchen with preparation time estimates. The restaurant dashboard provides real-time order management, inventory tracking, and analytics.",
    results:
      "Partner restaurants have seen 30% higher throughput during peak hours. Customer satisfaction scores increased dramatically, and the average time saved per customer is 15 minutes. Over 200 restaurants now use CutTheQ, processing 50,000+ orders.",
    techStack: ["React Native", "Node.js", "Stripe", "Firebase", "MongoDB"],
    testimonial: {
      quote: "CutTheQ transformed our lunch rush from chaos to smooth operations. Our customers love the convenience, and we love the efficiency.",
      author: "Sarah Chen",
      role: "Owner, Café Metro",
    },
  },
  {
    slug: "talery",
    logo: "Talery",
    image: "/images/talery.png",
    category: "Travel Tech",
    title: "AI-powered travel planning made effortless",
    description:
      "Planning trips was time-consuming and overwhelming. Travelers needed a smart assistant to create personalized itineraries instantly based on their preferences and budget.",
    productIntro: "Meet Talery — your AI travel companion that creates perfect trips in seconds.",
    supportingText:
      "Personalized itineraries, hotel recommendations, local experiences, and real-time travel updates.",
    metrics: [
      { value: "25K+", label: "Trips planned" },
      { value: "4.9★", label: "User rating" },
      { value: "80%", label: "Time saved" },
    ],
    challenge:
      "Travel planning is overwhelming. People spend hours researching destinations, comparing hotels, and building itineraries. By the time they finish planning, they're too exhausted to be excited about the trip. They needed a smarter way to plan.",
    solution:
      "Talery uses AI to understand travel preferences, budget constraints, and interests. Users simply describe their ideal trip, and Talery generates complete itineraries with accommodations, activities, and local tips. Everything syncs to a mobile app for on-the-go access.",
    results:
      "Travelers now plan complete trips in minutes instead of hours. Talery has helped plan over 25,000 trips with a 4.9-star user rating. Users report saving 80% of their usual planning time while discovering better experiences.",
    techStack: ["React", "Python", "FastAPI", "OpenAI", "Google Maps API", "PostgreSQL"],
    testimonial: {
      quote: "Talery planned my 2-week Europe trip in 10 minutes. The suggestions were perfect — better than anything I would have found myself!",
      author: "Maria Rodriguez",
      role: "Travel Blogger",
    },
  },
  {
    slug: "klinic",
    logo: "Klinic",
    image: "/images/klinic.png",
    category: "Healthcare",
    title: "Transforming healthcare access for millions",
    description:
      "Patients struggled to find doctors, book appointments, and manage prescriptions across disconnected systems. Healthcare providers needed a unified platform to serve patients remotely.",
    productIntro: "Meet Klinic — the complete telemedicine platform connecting patients with healthcare.",
    supportingText:
      "Doctor booking, video consultations, lab test scheduling, medicine delivery, and health records — all in one app.",
    metrics: [
      { value: "100K+", label: "Consultations completed" },
      { value: "5K+", label: "Doctors onboarded" },
      { value: "4.8★", label: "App store rating" },
    ],
    challenge:
      "Healthcare access in India remains fragmented. Patients, especially in rural areas, struggle to find specialists and often travel hours for consultations. Doctors lacked tools to serve patients remotely. The healthcare system needed digital transformation.",
    solution:
      "Klinic brings the entire healthcare journey into one platform. Patients find and book doctors instantly, consult via video, order lab tests, and get medicines delivered. Doctors get a complete practice management suite with scheduling, prescriptions, and patient records.",
    results:
      "Klinic has facilitated over 100,000 consultations, connecting patients with 5,000+ verified doctors. The platform maintains a 4.8-star rating, with patients particularly praising the convenience of home medicine delivery and digital prescriptions.",
    techStack: ["React Native", "Node.js", "WebRTC", "AWS", "PostgreSQL", "Razorpay"],
    testimonial: {
      quote: "The Klinic platform revolutionized how we deliver healthcare. Prodone's team understood the healthcare domain and built something truly impactful.",
      author: "Dr. Priya Sharma",
      role: "Founder, Klinic",
    },
  },
  {
    slug: "elplusplus",
    logo: "El+Plus+",
    image: "/images/elplusplus.png",
    category: "Energy & Utilities",
    title: "Smart energy optimization for Swedish households",
    description:
      "A Swedish energy company needed to help customers reduce costs and consumption. Traditional monitoring tools lacked the intelligence to provide actionable savings recommendations.",
    productIntro: "Meet El+Plus+ — AI-driven energy analytics that cut costs by 30%.",
    supportingText:
      "Real-time consumption tracking, smart alerts, usage predictions, and automated cost optimization.",
    metrics: [
      { value: "30%", label: "Cost reduction" },
      { value: "10K+", label: "Households served" },
      { value: "2M kWh", label: "Energy saved" },
    ],
    challenge:
      "Swedish households faced rising energy costs with limited visibility into consumption patterns. Existing utility dashboards showed basic usage data but couldn't identify savings opportunities or predict future costs. Customers needed actionable intelligence.",
    solution:
      "El+Plus+ connects to smart meters and uses AI to analyze consumption patterns. The platform identifies wasteful usage, predicts monthly costs, and sends smart alerts when usage spikes. Automated recommendations help households optimize consumption without sacrificing comfort.",
    results:
      "Households using El+Plus+ have reduced energy costs by an average of 30%. The platform has saved over 2 million kWh collectively across 10,000+ households, contributing to Sweden's sustainability goals while putting money back in customers' pockets.",
    techStack: ["React", "Python", "TensorFlow", "AWS Lambda", "TimescaleDB", "Grafana"],
    testimonial: {
      quote: "The El+Plus+ platform helped us save 30% on energy costs. Prodone's AI solutions are not just innovative but also deliver real business value.",
      author: "Erik Lindgren",
      role: "CTO, El+Plus+ Sweden",
    },
  },
  {
    slug: "shidosha",
    logo: "Shidosha",
    image: "/images/shidosha.png",
    category: "EdTech",
    title: "Connecting mentors with ambitious learners",
    description:
      "Aspiring professionals struggled to find quality mentorship. Experienced mentors lacked a platform to share their knowledge effectively and build meaningful connections.",
    productIntro: "Meet Shidosha — the mentorship platform that accelerates careers.",
    supportingText:
      "1-on-1 sessions, group workshops, goal tracking, and personalized mentor matching.",
    metrics: [
      { value: "5K+", label: "Mentorship sessions" },
      { value: "500+", label: "Expert mentors" },
      { value: "92%", label: "Goal achievement" },
    ],
    challenge:
      "Quality mentorship is hard to find. Aspiring professionals rely on random LinkedIn connections or expensive coaching programs. Experienced professionals want to give back but lack efficient tools. The mentorship market needed a structured, scalable solution.",
    solution:
      "Shidosha matches mentees with mentors based on goals, industry, and learning style. The platform handles scheduling, video sessions, goal tracking, and progress reports. Mentors can offer 1-on-1 sessions or group workshops, with built-in payment processing.",
    results:
      "Over 5,000 mentorship sessions have been conducted on Shidosha. The platform boasts a 92% goal achievement rate among active mentees, with 500+ expert mentors across tech, business, and creative fields. Average mentee satisfaction exceeds 4.8 stars.",
    techStack: ["Next.js", "Node.js", "Stripe", "Twilio", "PostgreSQL", "Redis"],
    testimonial: {
      quote: "Prodone transformed our vision into reality. The Shidosha platform exceeded all expectations. Their attention to detail made the entire process seamless.",
      author: "Rajesh Kumar",
      role: "Founder, Shidosha",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
