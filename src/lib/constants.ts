export const SITE_CONFIG = {
  name: 'Wako Kebir',
  title: 'Software Engineer',
  description:
    '4+ years of software development experience. Full-stack engineer specializing in React, Node.js, Python, and cloud systems. Building scalable web applications with focus on reliability and performance.',
  url: 'https://wakokwako.dev', // Update with actual domain
  author: {
    name: 'Wako Kebir',
    email: 'wakokebir@gmail.com',
    phone: '+1 (662) 359-3291',
    location: 'Los Angeles, CA',
  },
  social: {
    github: 'https://github.com/WaKeb7',
    linkedin: 'https://www.linkedin.com/in/wk-wako',
    instagram: '', // Add if available
  },
  resume: '/resume/Wako_Kebir_Resume Software.pdf',
};

export const NAVIGATION = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = {
  languages: [
    { name: 'Python', level: 92, icon: 'SiPython' },
    { name: 'JavaScript (ES6+)', level: 90, icon: 'SiJavascript' },
    { name: 'TypeScript', level: 88, icon: 'SiTypescript' },
    { name: 'Java', level: 85, icon: 'SiJava' },
    { name: 'SQL', level: 88, icon: 'SiMysql' },
  ],
  frontend: [
    { name: 'React', level: 92, icon: 'SiReact' },
    { name: 'HTML5/CSS3', level: 90, icon: 'SiHtml5' },
    { name: 'Responsive UI', level: 90, icon: 'SiCss3' },
    { name: 'Accessibility (WCAG)', level: 85, icon: 'SiW3C' },
  ],
  backend: [
    { name: 'Node.js', level: 90, icon: 'SiNodedotjs' },
    { name: 'REST APIs', level: 92, icon: 'SiPostman' },
    { name: 'GraphQL', level: 80, icon: 'SiGraphql' },
    { name: 'Microservices', level: 85, icon: 'SiDocker' },
  ],
  databases: [
    { name: 'PostgreSQL', level: 88, icon: 'SiPostgresql' },
    { name: 'MySQL', level: 85, icon: 'SiMysql' },
    { name: 'MongoDB', level: 82, icon: 'SiMongodb' },
  ],
  cloud: [
    { name: 'Azure', level: 85, icon: 'SiMicrosoftazure' },
    { name: 'Google Cloud', level: 80, icon: 'SiGooglecloud' },
    { name: 'Vercel', level: 90, icon: 'SiVercel' },
    { name: 'Docker', level: 85, icon: 'SiDocker' },
    { name: 'Git/GitHub', level: 92, icon: 'SiGit' },
    { name: 'CI/CD', level: 88, icon: 'SiGithubactions' },
  ],
  ai: [
    { name: 'OpenAI API', level: 90 },
    { name: 'Anthropic API', level: 88 },
    { name: 'Gemini API', level: 85 },
    { name: 'LangChain', level: 80 },
    { name: 'Vector Databases', level: 78 },
    { name: 'Prompt Engineering', level: 90 },
  ],
  other: [
    'BigQuery',
    'Looker Studio',
    'ETL/Data Pipelines',
    'Agile/Scrum',
    'Code Reviews',
    'Testing Best Practices',
    'macOS/Windows/Linux',
  ],
};

export const EDUCATION = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'California Lutheran University',
    location: 'Thousand Oaks, CA',
    year: '',
    honors: 'Honors Graduate',
    minor: 'Minor in Business Administration',
    gpa: '',
  },
];

export const COURSES = [
  'Advanced Computer Programming',
  'Data Communications and Networks',
  'Algorithms & Data Structures',
  'Operating Systems',
  'Software Engineering',
  'Image Processing',
  'Robotics',
  'Multimedia Technology',
  'Generative AI',
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Mentorship Platform',
    description:
      'Full-stack mentorship platform using React and Node.js with dynamic UI components, React Hooks for state management, and real-time user interaction handling to improve overall usability and engagement.',
    technologies: ['React', 'Node.js', 'JavaScript', 'REST API', 'Express'],
    github: 'https://github.com/WaKeb7',
    demo: '',
    image: '/images/project1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Client/Server Architecture System',
    description:
      'Designed comprehensive client/server system with secure user authentication, database access control, login policies, and intuitive GUIs for account management and data interaction.',
    technologies: ['Java', 'SQL', 'JDBC', 'Swing', 'Security'],
    github: 'https://github.com/WaKeb7',
    demo: '',
    image: '/images/project2.jpg',
    featured: true,
  },
  {
    id: 3,
    title: "Conway's Game of Life",
    description:
      "Java application implementing Conway's Game of Life using MVC pattern, multithreading for smooth animation, GUI rendering with Java Swing, and save/load functionality for game states.",
    technologies: ['Java', 'Swing', 'MVC', 'Multithreading', 'GUI'],
    github: 'https://github.com/WaKeb7',
    demo: '',
    image: '/images/project3.jpg',
    featured: false,
  },
];

export const EXPERIENCE = {
  years: '4+',
  organizations: '3+',
  projects: '10+',
};

export const WORK_EXPERIENCE = [
  {
    title: 'Founder & Software Engineer',
    company: 'Avangardai',
    location: 'Los Angeles, CA',
    period: 'March 2025 - Present',
    responsibilities: [
      'Develop and maintain full-stack web applications using React, Next.js, and Node.js with serverless API routes',
      'Designed and optimized backend services using PostgreSQL, achieving 35% improvement in response time through indexing and connection pooling',
      'Integrated third-party AI APIs (OpenAI, Anthropic, Google, Mistral) through modular service layers, reducing API costs by 20%',
      'Implemented real-time data streaming via WebSockets and edge functions for responsive analytics',
      'Built CI/CD pipelines with automated testing, maintaining >95% system uptime',
      'Engineered secure subscription and billing workflows using Stripe with webhook integration',
      'Implemented system monitoring and telemetry (GA4 + BigQuery) for performance tracking',
    ],
  },
  {
    title: 'ITS Department Intern / Student Supervisor',
    company: 'California Lutheran University',
    location: 'Thousand Oaks, CA',
    period: 'August 2023 - August 2024',
    responsibilities: [
      'Provided front-line technical support across phone, email, and in-person channels, resolving 80% of issues on first contact',
      'Led student technician training programs, improving troubleshooting efficiency by 30%',
      'Collaborated with faculty and staff to streamline device provisioning for 100+ employees',
    ],
  },
];

export const LEADERSHIP = [
  {
    title: 'President',
    organization: 'African Student Association',
    description: 'Led 25+ members to grow cultural engagement across campus',
  },
  {
    title: 'CTO',
    organization: 'European Innovation Academy Startup',
    description: 'Built MVP and pitched to investors in international accelerator program',
  },
];
