import { Experience, Project, SkillCategory, Education, ResearchPaper, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Manish Wadhwani",
  title: "Software Engineer",
  email: "manishwadhwani1998@gmail.com",
  phone: "9870652629",
  location: "Bangalore, India",
  linkedin: "https://www.linkedin.com/in/manish-wadhwani-607bb6160/",
  github: "https://github.com/manishwadhwani2",
  about: "Experienced Software Engineer with a strong background in distributed systems, C++, and network programming. Proven track record at Amazon and Fujitsu Research, delivering scalable solutions and optimizing system performance. Passionate about solving complex engineering challenges."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "AMAZON",
    role: "Software Developer Engineer-II (Contract)",
    location: "Bangalore",
    period: "2025",
    points: [
      "Architected and led the global expansion of the Seller Referral Service, evolving it from a single-market implementation into a scalable, distributed system for worldwide use.",
      "Designed a configuration-driven framework to handle diverse international requirements, enabling rapid future rollouts.",
      "Enhanced a seller-facing automation script on the GST portal, resulting in a 50% increase in service adoption and a 70% reduction in processing time.",
      "Integrated new deal recommendation capabilities for major sales events, providing sellers with data-driven insights to improve their promotions.",
      "Provided technical guidance and mentorship to junior developers, including code reviews and design discussions."
    ]
  },
  {
    company: "FUJITSU RESEARCH",
    role: "Senior Software Engineer",
    location: "Bangalore",
    period: "2023 - 2024",
    points: [
      "Engineered a robust network re-establishment module in C++ to automatically recover from connection failures, enhancing overall network reliability and contributing to a 30% reduction in dropped calls.",
      "Developed a key feature ensuring uninterrupted network connectivity for users during travel and transitions between access points.",
      "Authored comprehensive technical design documents and user manuals for new network components, ensuring clear communication and future maintainability."
    ]
  },
  {
    company: "RADISYS",
    role: "Software Engineer",
    location: "Gurgaon",
    period: "2021 - 2023",
    points: [
      "Implemented a network solution in C++ to enhance resource allocation and reduce latency for telecom users.",
      "Resolved over 100 issues, including critical memory leaks, by leveraging debugging tools such as Klockwork and Valgrind."
    ]
  }
];

export const EDUCATION: Education = {
  institution: "DELHI TECHNOLOGICAL UNIVERSITY",
  degree: "Bachelor of Technology (Mathematics and Computing)",
  cgpa: "7.53/10",
  period: "2017 - 2021",
  coursework: "Object-Oriented Programming, Databases, Discrete Math, Data Structures and Algorithms, Operating Systems, Computer Networks, Machine Learning, Data Mining"
};

export const PROJECTS: Project[] = [
  {
    title: "Multithreaded TCP/IP Server",
    description: "Developed a multi-threaded TCP/IP server in C++ implementing a producer-consumer pattern. Utilized threads, mutexes, and condition variables to efficiently manage and process concurrent client connections in a queued architecture.",
    tech: ["C++", "Multithreading", "Networking"]
  },
  {
    title: "Packet Sniffer",
    description: "Created a command-line packet sniffing tool in C using the libpcap library. The application captures and parses TCP, UDP, and ICMP packet headers to display real-time network traffic information.",
    tech: ["C", "libpcap", "Network Protocols"]
  }
];

export const RESEARCH: ResearchPaper = {
  title: "EXPERT BASED RECOMMENDATION SYSTEM USING COMMUNITY DETECTION IN ONLINE MUSIC STREAMING SERVICE",
  year: "2021",
  link: "https://ieeexplore.ieee.org/document/9418374",
  description: "Researched and developed a system to detect communities of music listeners and to find experts within those communities to provide accurate and personal recommendations to other users on a music streaming service."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "Java", "Python", "SQL"]
  },
  {
    category: "Technologies",
    skills: ["Docker", "Kubernetes", "AWS", "Selenium", "Git", "GDB", "Linux", "Spring Boot"]
  },
  {
    category: "Concepts",
    skills: ["System Design", "OOD/OOP", "Data Structures", "Algorithms", "Multithreading", "Agile"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Secured 6027 rank in JEE Main examination." },
  { title: "Secured 8672 Rank in JEE Advanced examination." }
];

