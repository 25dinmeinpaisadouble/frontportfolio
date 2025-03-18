// courseData.ts
export interface Course {
  code: string;
  description: string;
  summary: string;
}

export interface Term {
  year: string;
  term: string;
  courses: Course[];
}

const courseData: Term[] = [
  {
    year: "2025",
    term: "Term 1",
    courses: [
      {
        code: "COMP3331",
        description: "Networks",
        summary: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
      },
      {
        code: "COMP2041",
        description: "Software Construction design and tools",
        summary: "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
      },
      {
        code: "COMP3411",
        description: "Artificial Intelligence",
        summary: "Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
      }
    ]
  }
  // You can add more terms/years here following the same structure
];

export default courseData;