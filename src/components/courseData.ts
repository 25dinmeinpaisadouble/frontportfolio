import { Code } from "lucide-react";

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
      },
      {
        termName: "Summer Term",
        courses: [
          {
            code: "COMP2521",
            description: "Data Structures and Algorithms",
            summary: "This course aims to help students think like computer scientists by deepening their understanding of data structures and algorithms, and how they apply to software system design. It covers core topics such as recursion, algorithm analysis, abstract data types, binary search trees, balanced search trees, graphs, sorting algorithms, heaps, hashing, and tries."
          }
        ]
      }
    ]
  },
  {
    year: "2023",
    terms: [
      {
        termName: "Term 2",
        courses: [
          {
            code: "DESN2000",
            description: "Engineering Design and Professional Practice",
            summary: "developing engineering design skills, particularly in the early stages of creating innovative solutions to open-ended problems. The course covers research techniques for understanding design problems, technical skills for building concepts, and evaluation methods for assessing concepts. It also emphasizes project management, teamwork, and communication skills, preparing students for professional practice."
          },
          {
            code: "MATH2400",
            description: "Computer Systems Fundamentals",
            summary: "This course introduces students to computer systems, focusing on the C programming language and assembly language. It covers computer organization, memory management, and system programming. Students will learn to write programs in C and assembly, understand how computers execute programs, and use system calls and libraries."
          }
        ]
      },
      {
        termName: "Term 1",
        courses: [
          {
            code: "COMP1531",
            description: "Software Engineering Fundamentals",
            summary: "This course teaches software engineering principles through hands-on experience in building correct products within effective teams. It focuses on agile practices, team collaboration, and communication by requiring students to work on a group project to analyze, design, build, and deploy a web-based application. Typically taken after COMP1511, it provides essential skills for teamwork and project management needed in later courses."
          },
          {
            code: "MATH1081",
            description: "Discrete Mathematics",
            summary: "This course enhances students' research, inquiry, and analytical thinking skills through discrete mathematics, covering set theory, number theory, proofs and logic, combinatorics, and graph theory. It provides a foundation for solving problems in science, particularly in mathematics and computer science. Students develop problem-solving skills using logical arguments and mathematical language."
          }
        ]
      }
    ]
  },
  {
    year: "2022",
    terms: [
      {
        termName: "Term 3",
        courses: [
          {
            code: "ELEC1111",
            description: "Programming Fundamentals",
            summary: "introductory Electrical Engineering course that covers fundamental analogue electrical components (sources, resistors, capacitors, inductors, and diodes) and circuit analysis techniques (Ohm’s and Kirchhoff’s laws, nodal and mesh analysis, circuit theorems). It also introduces analogue circuits such as RC and RL circuits, operational amplifiers, and AC analysis concepts including phasors, impedances, and AC power. The course is designed to provide a basic understanding of electrical circuits, essential for various engineering disciplines."
          },
          {
            code: "MATH1231",
            description: "Mathematics 1B",
            summary: "This course covers key mathematical concepts, including vector spaces, linear transformations, eigenvalues, and eigenvectors. It introduces probability and statistics, integration techniques, and the solution of ordinary differential equations. Topics also include sequences, series, and applications of integration."
          },
          {
            code: "PHYS1231",
            description: "Higher Physics 1B",
            summary: "calculus-based course that covers advanced topics in electricity, magnetism, physical optics, and introductory quantum theory. Key topics include electrostatics, Gauss's law, electric potential, capacitance, magnetic fields, Ampere's and Biot-Savart laws, Faraday's law, and induction. It also explores light, interference, diffraction, polarization, and the wave nature of matter, along with an introduction to solid-state and semiconductor physics."
          }

        ]
      },
      {
        termName: "Term 2",
        courses: [
          {
            code: "COMP1521",
            description: "Computer Systems Fundamentals",
            summary: "This course introduces students to computer systems, focusing on the C programming language and assembly language. It covers computer organization, memory management, and system programming. Students will learn to write programs in C and assembly, understand how computers execute programs, and use system calls and libraries."
          },
          {
            code: "PHYS1121",
            description: "Physics 1A",
            summary: "Physics 1A is an introductory, calculus-based course covering mechanics (particle kinematics, dynamics, work, energy, momentum, collisions, and rotation), thermal physics (temperature, kinetic theory, ideal gas, heat, and the first law of thermodynamics), and waves (oscillations, wave motion, and sound waves). It is examined at a lower level compared to Physics 1B."
          }
        ]
      },
      {
        termName: "Term 1",
        courses: [
          {
            code: "COMP1511",
            description: "Programming Fundamentals",
            summary: "This course introduces students to the fundamental concepts of programming, focusing on the C programming language. It covers basic programming constructs, data structures, and algorithms. Students will learn to write programs in C, understand how computers execute programs, and use libraries and system calls."
          },
          {
            code: "DESN1000",
            description: "Introduction to Engineering Design and Innovation",
            summary: "This course immerses students in engineering design by having them work on practical problems in teams over ten weeks. It emphasizes creative problem-solving within constraints such as budget, time, resources, and environmental/social objectives. Students will develop essential engineering skills, including concept development, critical thinking, communication, research, and teamwork, all while learning to design solutions that are on-time, on-budget, and fit for purpose. Projects vary each year, providing hands-on experience in solving open-ended engineering problems. My stream was electrical."
          },
          {
            code: "MATH1131",
            description: "Mathematics 1A",
            summary: "This course covers complex numbers, vectors, vector geometry, linear equations, matrices, matrix algebra, and determinants. It also includes topics on functions, limits, continuity, differentiability, integration, polar coordinates, logarithms, exponentials, and hyperbolic functions. Additionally, it introduces computing and the use of the Maple symbolic algebra package."
          }
        ]
      }

    ]
  }
  
];

export default courseData;