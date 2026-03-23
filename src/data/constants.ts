export enum SkillNames {
  CPP = "cpp",
  PYTHON = "python",
  C = "c",
  JAVA = "java",
  HTML = "html",
  CSS = "css",
  FLASK = "flask",
  TKINTER = "tkinter",
  MYSQL = "mysql",
  PYTORCH = "pytorch",
  SCIKIT_LEARN = "scikit-learn",
  PYGAME = "pygame",
  JS = "js",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  FRONTEND = "frontend",
  BACKEND = "backend"
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription?: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.CPP]: { id: 1, name: "cpp", label: "C++", color: "#00599C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  [SkillNames.PYTHON]: { id: 2, name: "python", label: "Python", color: "#3776AB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  [SkillNames.C]: { id: 3, name: "c", label: "C", color: "#A8B9CC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  [SkillNames.JAVA]: { id: 4, name: "java", label: "Java", color: "#007396", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  [SkillNames.HTML]: { id: 5, name: "html", label: "HTML", color: "#e34c26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  [SkillNames.CSS]: { id: 6, name: "css", label: "CSS", color: "#563d7c", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  [SkillNames.FLASK]: { id: 7, name: "flask", label: "Flask", color: "#000000", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  [SkillNames.TKINTER]: { id: 8, name: "tkinter", label: "Tkinter", color: "#3776AB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  [SkillNames.MYSQL]: { id: 9, name: "mysql", label: "MySQL", color: "#4479A1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  [SkillNames.PYTORCH]: { id: 10, name: "pytorch", label: "PyTorch", color: "#EE4C2C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  [SkillNames.SCIKIT_LEARN]: { id: 11, name: "scikit-learn", label: "Scikit-learn", color: "#F7931E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  [SkillNames.PYGAME]: { id: 12, name: "pygame", label: "Pygame", color: "#EE4C2C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  [SkillNames.JS]: { id: 13, name: "js", label: "JavaScript", color: "#f0db4f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  [SkillNames.TS]: { id: 14, name: "ts", label: "TypeScript", color: "#007acc", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  [SkillNames.REACT]: { id: 15, name: "react", label: "React", color: "#61dafb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  [SkillNames.NEXTJS]: { id: 16, name: "nextjs", label: "Next.js", color: "#fff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  [SkillNames.TAILWIND]: { id: 17, name: "tailwind", label: "Tailwind", color: "#38bdf8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  [SkillNames.NODEJS]: { id: 18, name: "nodejs", label: "Node.js", color: "#6cc24a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  [SkillNames.EXPRESS]: { id: 19, name: "express", label: "Express", color: "#fff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  [SkillNames.FRONTEND]: { id: 20, name: "frontend", label: "Frontend", color: "#fff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  [SkillNames.BACKEND]: { id: 21, name: "backend", label: "Backend", color: "#fff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
  link?: string;
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    title: "C++ Programming: OOPs and DSA",
    company: "Cse Pathshala",
    description: [
      "Completed 35+ hours of training in C++ (OOP & data structures and algorithms) with hands-on problem-solving and coding practice.",
      "Constructed a Library Management System in C++ using OOP concepts like classes and objects.",
      "Implemented file-handling features (add, display, search books) using ifstream, ofstream and a menu-driven interface."
    ],
    skills: [SkillNames.CPP, SkillNames.C],
    link: "https://drive.google.com/file/d/1erayt4twEwLyAkIewPazZJNCewqJFGzi/view",
  }
];

export type Education = {
  id: number;
  startDate: string;
  endDate: string;
  degree: string;
  institution: string;
  score: string;
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    startDate: "August 2023",
    endDate: "Present",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University (Punjab, India)",
    score: "CGPA: 6.8",
  },
  {
    id: 2,
    startDate: "June 2022",
    endDate: "March 2023",
    degree: "Intermediate",
    institution: "Tsnm Higher Secondary School (Palghat, Kerala)",
    score: "Percentage: 91",
  },
  {
    id: 3,
    startDate: "2021",
    endDate: "2021",
    degree: "Matriculation",
    institution: "Vpaup School (Palghat, Kerala)",
    score: "Percentage: 98",
  }
];

export type Certificate = {
  id: number;
  date: string;
  title: string;
  issuer: string;
  link: string;
};

export const CERTIFICATES: Certificate[] = [
  { id: 1, date: "Sep 2025", title: "Computational Theory: Language Principle & Finite Automata Theory", issuer: "Infosys Springboard", link: "https://drive.google.com/file/d/1-ZlmZfSVdZJ2ttYsThxYcAfBDmbmNLuH/view" },
  { id: 2, date: "July 2025", title: "C++ Programming OOPs and DSA", issuer: "Cse Pathshala", link: "https://drive.google.com/file/d/1erayt4twEwLyAkIewPazZJNCewqJFGzi/view" },
  { id: 3, date: "Jun 2025", title: "Networking Fundamentals", issuer: "Udemy", link: "https://drive.google.com/file/d/1XQ4j62h7b5z-_jN81k5tNn-6TCAv6VFU/view" },
  { id: 4, date: "Dec 2024", title: "Data Structures and Algorithm", issuer: "Neo Colab", link: "https://drive.google.com/file/d/1ZYp75X1p46i5ONV0Ea8mz9Wl5I6TgQKH/view" },
];

export type Achievement = {
  id: number;
  date: string;
  title: string;
  description: string[];
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    date: "Jun 2024",
    title: "Community Development Project - Blue Moon Charitable Trust",
    description: [
      "To understand and support rural development through waste management, healthcare (Ayush), tribal upliftment, and palliative care initiatives.",
      "Completed a 4-day field visit covering AYUSH Centre, tribal areas, waste-management unit, and palliative care clinic.",
      "Gained practical insight into rural challenges, sustainable waste practices, and community healthcare needs.",
    ],
  }
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
