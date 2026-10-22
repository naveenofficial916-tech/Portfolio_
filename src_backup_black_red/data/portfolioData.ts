import type { Project, Experience, Certification, SkillCategory, Education } from '../types';

export const projects: Project[] = [
  {
    id: 'german-energy',
    number: '01',
    title: 'German Energy Flexibility Platform',
    date: '2026 · Analytics & Optimization',
    category: 'Energy Market Analysis · Cost Intelligence',
    description: 'A comprehensive energy flexibility and cost intelligence platform analyzing German day-ahead power markets, optimizing industrial load flexibility, and forecasting electricity spot price fluctuations.',
    fullDescription: 'Focuses on German electricity market dynamics, flexibility optimization, and industrial power cost intelligence. Evaluates spot price spikes, renewable generation volatility (wind and solar), and models peak load shifting scenarios to maximize economic savings while ensuring grid stability.',
    technologies: ['Python', 'SQL', 'Power BI', 'Pandas', 'PySpark', 'Market Analytics'],
    image: '/projects/german-energy-platform.jpg',
    featured: true,
    objective: 'To analyze German electricity market spot prices and develop predictive load-shifting scenarios that minimize energy expenditure for industrial consumers.',
    approach: 'Processed multi-gigabyte time-series spot market data with PySpark and Pandas. Modeled price curves, automated peak load alerts, and built executive Power BI dashboards with scenario simulation.',
    role: 'Data Analyst & Optimization Engineer — built data transformation pipelines, price volatility models, and interactive cost intelligence dashboards.',
    keyFeatures: [
      'Day-ahead spot market price volatility analytics',
      'Renewable energy generation tracking (wind & solar)',
      'Industrial load shift potential & flexibility performance curves',
      'EUR/MWh cost savings and ROI calculation models',
      'Predictive peak load alerts and congestion forecasting',
    ],
    results: [
      'Quantified up to 14.8% peak cost reduction across simulated industrial load schedules',
      'Consolidated multi-year market time-series into actionable decision dashboards',
      'Streamlined automated forecasting with sub-hourly interval precision',
    ],
    github: 'https://github.com/naveenofficial916-tech',
  },
  {
    id: 'fit-it-fix-it',
    number: '02',
    title: 'Fit It Fix It — AI Fashion Platform',
    date: '2026 · AI & UI/UX',
    category: 'AI Fashion Intelligence · Virtual Styling',
    description: 'An AI-powered fashion intelligence and styling visualization platform designed to enhance online apparel discovery, accurate fit recommendations, and intuitive wardrobe curation.',
    fullDescription: 'A cutting-edge concept bridging AI computer vision with modern ecommerce fashion curation. Explores virtual styling, category trend intelligence, and seamless user experiences that eliminate fit uncertainty and reduce return rates.',
    technologies: ['Figma', 'UI/UX Design', 'Computer Vision', 'AI Visualization', 'Frontend'],
    image: '/projects/outfit_club.jpg',
    featured: true,
    objective: 'To design and architect an intuitive AI fashion platform that provides personalized outfit recommendations, styling intelligence, and virtual fit visualization.',
    approach: 'Conducted user research into apparel return friction and shopping behavior. Designed full-fidelity design systems in Figma and prototyped interactive outfit builders with responsive web components.',
    role: 'UI/UX Designer & Product Architect — created end-to-end design system, product wireframes, and styling recommendation flows.',
    keyFeatures: [
      'Editorial lookbook & curated style recommendation interface',
      'Interactive wardrobe builder with visual item pairing',
      'Personalized fit and size guidance intelligence',
      'Category-based trend exploration and filtering system',
      'Responsive, high-aesthetic mobile and desktop layout',
    ],
    results: [
      'Created an ultra-modern, high-converting fashion commerce interface',
      'Streamlined user journey from discovery to checkout in under 3 steps',
      'Received strong accolades for aesthetic clarity and typographic hierarchy',
    ],
    github: 'https://github.com/naveenofficial916-tech',
  },
  {
    id: 'legacy-code',
    number: '03',
    title: 'AI Legacy Code Modernizer',
    date: 'September 2026 · Remote',
    category: 'Data Engineering · Cloud Modernization',
    description: 'An intelligent legacy-code restructuring and modernization solution using Databricks, PySpark, and PostgreSQL to parse, analyze, and migrate obsolete codebases to modern cloud standards.',
    fullDescription: 'A cloud data engineering project focused on legacy system transformation. The platform parses monolithic architectures, identifies technical debt and code smells, and orchestrates migration pipelines into cost-efficient, maintainable cloud infrastructure.',
    technologies: ['Databricks', 'PySpark', 'PostgreSQL', 'Python', 'Cloud Architecture'],
    image: '/projects/legacy-code-modernization.webp',
    featured: true,
    objective: 'To automate code understanding, risk identification, and structured migration of legacy software systems onto modern cloud data platforms.',
    approach: 'Leveraged Databricks and PySpark to engineer ETL pipelines that parse source code ASTs, categorize dependencies, and persist analysis results in PostgreSQL.',
    role: 'Data Engineer — engineered the PySpark code analysis pipeline, modeled the relational schema, and integrated Databricks workflows.',
    keyFeatures: [
      'PySpark-powered automated code parsing & transformation pipeline',
      'Databricks cloud integration for high-throughput repository processing',
      'PostgreSQL schema for structured vulnerability & dependency analysis',
      'Automated legacy pattern identification and replacement suggestions',
      'Cost-reduction and technical debt remediation dashboards',
    ],
    results: [
      'Successfully parsed and restructured complex legacy software modules',
      'Significantly reduced manual reverse-engineering and documentation time',
      'Enabled scalable cloud-native code transformation workflows',
    ],
    github: 'https://github.com/naveenofficial916-tech',
  },
  {
    id: 'cattle-disease',
    number: '04',
    title: 'Cattle Diseases Detection System',
    date: 'April 2026',
    category: 'AI · Computer Vision · IoT',
    description: 'Developed an AI-based cattle disease detection system using computer vision and IoT, focusing on early identification of Foot-and-Mouth Disease (FMD) and Lumpy Skin Disease (LSD).',
    fullDescription: 'An AI and IoT-powered system concept for early detection of cattle diseases. The system uses computer vision to analyze visual symptoms and IoT sensor data to monitor cattle health metrics in real-time.',
    technologies: ['Artificial Intelligence', 'Computer Vision', 'IoT', 'Machine Learning', 'KNN'],
    image: '/projects/cattle-disease-detection.webp',
    featured: false,
    objective: 'To develop an intelligent cattle disease detection system that uses AI and IoT for early identification of Foot-and-Mouth Disease (FMD) and Lumpy Skin Disease (LSD), helping farmers take timely action.',
    approach: 'Combined computer vision models for visual symptom detection with IoT sensor data (temperature, activity) for health monitoring. Applied KNN classification to categorize health risk levels. Designed a dashboard for farmer-friendly monitoring.',
    role: 'AI Developer — designed the detection model architecture, built the KNN classifier, and integrated IoT data streams.',
    keyFeatures: [
      'Computer vision-based visual symptom detection',
      'IoT sensor integration for real-time health monitoring',
      'KNN-based disease classification (FMD, LSD)',
      'Early warning alert system for farmers',
      'Visual health dashboard with risk indicators',
    ],
    results: [
      'Detection model demonstrated accurate classification in test scenarios',
      'IoT integration enabled continuous cattle health monitoring',
      'Early warning system showed potential to significantly reduce disease losses',
    ],
    github: 'https://github.com/naveenofficial916-tech',
  },
  {
    id: 'food-delivery',
    number: '05',
    title: 'UI/UX Food Delivery Website',
    date: 'March 2026 · Remote',
    category: 'UI/UX Design · Web Development',
    description: 'Designed and developed a user-friendly food delivery platform interface using Figma, focusing on usability, accessibility, and overall user experience.',
    fullDescription: 'A complete UI/UX design and frontend development project for a food delivery platform. The project followed a user-centered design process — from research and wireframing through to high-fidelity prototyping and implementation.',
    technologies: ['Figma', 'UI/UX Design', 'HTML', 'CSS', 'Website Development'],
    image: '/projects/food-delivery-realistic.webp',
    featured: false,
    objective: 'To design and develop a modern, user-friendly food delivery web application with a seamless ordering experience, intuitive navigation, and visually appealing UI that maximizes user satisfaction.',
    approach: 'Applied a user-centered design process: competitor analysis, user persona mapping, wireframing in Figma, high-fidelity prototyping, and frontend implementation with HTML and CSS. Iterated based on usability testing feedback.',
    role: 'UI/UX Designer and Frontend Developer — led the entire design lifecycle from discovery through implementation.',
    keyFeatures: [
      'Clean, modern UI with strong visual hierarchy',
      'Food category browsing with smart filters',
      'Restaurant listings with ratings and delivery time estimates',
      'Smooth cart and checkout flow',
      'Fully responsive across desktop, tablet, and mobile',
      'Consistent design system with reusable components',
    ],
    results: [
      'Prototype received positive usability feedback',
      'Responsive design adapts seamlessly across screen sizes',
      'Information architecture reduces decision friction for users',
    ],
    github: 'https://github.com/naveenofficial916-tech',
  },
];

export const experiences: Experience[] = [
  {
    id: 'mr-groups',
    role: 'AI & Analytics Industry Session',
    company: 'MR Groups and Company',
    location: 'Nandanam, Chennai',
    period: 'November 2025',
    description: 'Gained exposure to intelligent data applications and cloud-based workflows and explored practical use cases of data platforms in real-world scenarios.',
    type: 'Industry Exposure',
  },
];

export const leadership = {
  role: 'NSS Candidate',
  description: 'Developed discipline, teamwork, communication, and leadership skills through NSS activities and social service programs.',
};

export const certifications: Certification[] = [
  { id: 'goethe',      name: 'Goethe A1 Certificate',               issuer: 'Goethe Institut — German' },
  { id: 'tata',        name: 'Data Visualization',                   issuer: 'TATA Forage' },
  { id: 'hp-life',     name: 'Data Science & Analytics',             issuer: 'HP LIFE' },
  { id: 'google',      name: 'Google Cloud Data Transformation',      issuer: 'Google Cloud' },
  { id: 'aws',         name: 'AWS Generative AI Foundations',         issuer: 'Amazon Web Services' },
  { id: 'cognos',      name: 'Cognos Analytics',                     issuer: 'IBM' },
  { id: 'brandblitz',  name: 'Brand Blitz',                          issuer: 'St. Joseph' },
  { id: 'behindthebug',name: 'Behind the Bug',                       issuer: 'Chennai Institute of Technology' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    skills: ['Python', 'HTML', 'CSS', 'SQL', 'PySpark', 'Databricks'],
  },
  {
    id: 'data-ai',
    name: 'Data & AI',
    skills: ['Data Analysis', 'Data Visualization', 'Machine Learning', 'KNN Algorithm', 'Data Processing', 'Computer Vision'],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    skills: ['Microsoft Excel', 'Power BI', 'AWS', 'Google Cloud', 'Figma', 'Git & GitHub'],
  },
  {
    id: 'design',
    name: 'Design & Development',
    skills: ['UI/UX Design', 'Website Development', 'Prompt Engineering', 'Cloud Fundamentals', 'Wireframing', 'Prototyping'],
  },
];

export const education: Education[] = [
  {
    institution: 'SRM Valliammai Engineering College',
    degree: 'B.Tech — Artificial Intelligence and Data Science',
    detail: 'CGPA: 7.58 · Till 6th Semester',
    year: '2022 – Present',
  },
  {
    institution: 'MLM Mammallan Matric Higher Secondary School',
    degree: 'Class XII',
    detail: '86%',
    year: '2022',
  },
  {
    institution: 'MLM Mammallan Matric Higher Secondary School',
    degree: 'Class X',
    detail: '79%',
    year: '2020',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const workProcess: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understanding problem statements, user needs, data sources, and analytical scope.',
  },
  {
    number: '02',
    title: 'ANALYSE',
    description: 'Exploratory data analysis, statistical validation, anomaly detection, and insights.',
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Designing intuitive UI/UX wireframes, architecture blueprints, and schemas.',
  },
  {
    number: '04',
    title: 'DEVELOP',
    description: 'Engineering ETL pipelines, training AI models, and building responsive frontends.',
  },
  {
    number: '05',
    title: 'DELIVER',
    description: 'Performance testing, benchmarking, deployment, and comprehensive documentation.',
  },
];

