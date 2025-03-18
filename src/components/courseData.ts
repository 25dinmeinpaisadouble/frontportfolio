// courseData.ts
export interface Course {
  code: string;
  description: string;
  summary: string;
}

export interface Term {
  termName: string;
  courses: Course[];
}

export interface YearData {
  year: string;
  terms: Term[];
}

const courseData: YearData[] = [
  {
    year: "2025",
    terms: [
      {
        termName: "Term 1",
        courses: [
          {
            code: "COMP3331",
            description: "Computer Networks and Applications",
            summary: "This introductory computer networks course is designed for students with a computer science or electrical engineering background. It covers key paradigms and protocols in data communication. Topics include medium access control, congestion control, routing, addressing, widely used protocols (Ethernet, IP, TCP, UDP, HTTP), special-purpose networks (content delivery, peer-to-peer, wireless), and network security."
          },
          {
            code: "COMP2041",
            description: "Software Construction: Techniques and Tools",
            summary: "This course is for students with basic programming skills, focusing on software construction techniques and tools. It covers Unix filters, shell scripting, Python, Git, Docker, and package managers. By the end, students will be able to build and deploy moderate-sized software systems."
          },
          {
            code: "COMP3411",
            description: "Artificial Intelligence",
            summary: "Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
          }
        ]
      }
    ]
  },
  {
    year: "2024",
    terms: [
      {
        termName: "Term 3",
        courses: [
          {
            code: "COMP4920",
            description: "Professional Issues and Ethics in Information Technology",
            summary: "This course explores ethical issues in computer science, covering the nature of ethical claims, moral judgments, and how they impact our understanding of the field. It includes discussions on utilitarian, deontological, and virtue ethics, with real-world computer science cases. Topics include research ethics, AI frameworks, \"ethics washing,\" trust, accountability, privacy, equity, bias, fairness in algorithms, transparency, and explainability, with a focus on ethical implications in the digital world."
          }
        ]
      },
      {
        termName: "Term 2",
        courses: [
          {
            code: "COMP3121",
            description: "Algorithm Design and Analysis",
            summary: "This course focuses on developing problem-solving software for various fields like finance, logistics, policy, and entertainment. It covers techniques such as divide-and-conquer, greedy selection, and dynamic programming to create accurate, efficient algorithms. Students will learn to assess algorithm correctness and efficiency, estimate program runtime, design test cases, and communicate about algorithms critically. The course aims to improve programming skills without requiring code writing."
          },
          {
            code: "COMP3311",
            description: "Database Systems",
            summary: "This course covers the practice and theory of developing database applications and relational database systems. It explores technologies used in database management systems and the evolution of databases. Students will learn how to manage large data resources, a key skill in the IT industry. The course provides a foundation for advanced database topics and related fields. By the end, students will be able to build efficient, high-quality database applications and understand how relational database management systems work internally."
          }
        ]
      },
      {
        termName: "Term 1",
        courses: [
          {
            code: "COMP2511",
            description: "Object-Oriented Design and Programming",
            summary: "COMP2511 builds on first-year CSE courses, focusing on creating flexible, reusable, and maintainable software. It introduces Object-Oriented Programming (OOP) and explores Design Patterns for software design, writing, and testing. The course emphasizes elegant code, problem-solving, and designing long-lasting software solutions, applying these concepts to both theoretical and real-world problems."
          }
        ]
      }
    ]
  }
];

export default courseData;