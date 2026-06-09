import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Cybersecurity Enthusiast",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
  
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
   
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Nmap",
      icon: "/assets/tech/nmap.svg",
      link: "https://nmap.org/",
    },
    {
      name: "Metasploit",
      icon: "/assets/tech/metasploit.svg",
      link: "https://www.metasploit.com/",
    },
  
    {
      name: "Wireshark",
      icon: "/assets/tech/wireshark.svg",
      link: "https://www.wireshark.org/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
   
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Linux",
      icon: "/assets/tech/linux.svg",
      link: "https://www.kernel.org/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
};

const experiences = [
  {
    title: "Backend Developer Intern",
    company_name: "InternPro",
    icon: "/assets/company/intern.png",
    iconBg: "#E6DEDD",
    date: "6 Weeks (Internship)",
    points: [
      "Developed backend services for a Vulnerability Assessment Dashboard (Nmap UI) using Python.",
      "Automated Nmap scan execution and wrote parsers to structure scan output for the dashboard.",
      "Integrated scan automation with the dashboard UI to provide real-time vulnerability summaries.",
      "Collaborated with the frontend team to expose secure endpoints and ensure reliable data flow.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Temple Family Tree Management System",
    description:
      "Full-stack application to manage temple family records, relationships, and generational data with an interactive family tree view.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
      { name: "MVC", color: "yellow-text-gradient" },
    ],
    image: "/assets/projects/family-tree.png",
    source_code_link: "https://github.com/sandy-192004/survey-project",
    deployed_link: "",
  },
  {
    name: "Task Manager Application",
    description:
      "A secure task management app built with the MERN stack featuring JWT authentication and bcrypt password hashing.",
    tags: [
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "Express", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Node.js", color: "orange-text-gradient" },
      { name: "JWT", color: "yellow-text-gradient" },
    ],
    image: "/assets/projects/task-manager.jpg",
    source_code_link: "https://github.com/sandy-192004/Task-Manager",
    deployed_link: "",
  },
  //
  {
    name: "Vulnerability Assessment Dashboard",
    description:
      "Backend and dashboard for automated vulnerability assessments using Nmap. Parses scan output and presents structured vulnerability summaries for easy review.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Nmap", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
      { name: "Dashboard", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/vuln-dashboard.jpeg",
    source_code_link: "https://github.com/sandy-192004/vulnerability-assessment-dashboard-",
    deployed_link: "",
  },

];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/sandy-192004",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/sandhiya-palanivel-123091290",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/",
  },
];

const heroTexts = [
  "MERN Stack Developer",
  500,
  "Cybersecurity Enthusiast",
  500,
  "Full-Stack Developer",
  500,
  "Quick Learner",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
