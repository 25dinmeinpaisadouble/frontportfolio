import { FC } from 'react';
import courseData, { Course } from '../components/courseData';

const roundThing = "absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700";
const courseDesc = "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500";
const courseCode = "text-lg font-semibold text-gray-900";
const courseSummary = "text-base font-normal text-gray-500";

interface CourseItemProps {
  code: string;
  description: string;
  summary: string;
  isLast?: boolean;
}

const CourseItem: FC<CourseItemProps> = ({ code, description, summary, isLast = false }) => {
  return (
    <li className={`ms-4 ${!isLast ? "mb-10" : ""}`}>
      <div className={roundThing}></div>
      <h3 className={courseCode}>{code}</h3>
      <time className={courseDesc}>{description}</time>
      <p className={courseSummary}>{summary}</p>
    </li>
  );
};

interface TermSectionProps {
  termName: string;
  courses: Course[];
}

const TermSection: FC<TermSectionProps> = ({ termName, courses }) => {
  return (
    <div className="mb-8">
      <h5 className="ml-4 underline underline-offset-4 pb-1.5">{termName}</h5>
      <ol className="ml-6 relative border-s border-blue-100">
        {courses.map((course, index) => (
          <CourseItem
            key={course.code}
            code={course.code}
            description={course.description}
            summary={course.summary}
            isLast={index === courses.length - 1}
          />
        ))}
      </ol>
    </div>
  );
};

const YearSection: FC<{year: string, terms: {termName: string, courses: Course[]}[]}> = ({ year, terms }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-medium pb-4">{year}</h3>
      {terms.map((term) => (
        <TermSection
          key={`${year}-${term.termName}`}
          termName={term.termName}
          courses={term.courses}
        />
      ))}
    </div>
  );
};

const Courses: FC = () => {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          Coursework
        </h2>

        {courseData.map((yearData) => (
          <YearSection
            key={yearData.year}
            year={yearData.year}
            terms={yearData.terms}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;