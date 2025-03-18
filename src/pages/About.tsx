import { FC } from 'react';

interface Experience {
  company: string;
  role: string;
  period: string;
}

interface Education {
  degree: string;
  period: string;
  status: string;
}

const timelineDot = "absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white";

const ExperienceItem: FC<Experience> = ({ company, role, period }) => (
  <li>
    <h4 className="font-semibold">{company}</h4>
    <p className="text-gray-600">{role}</p>
    <p className="text-gray-500">{period}</p>
  </li>
);

const EducationItem: FC<Education & { isLast?: boolean }> = ({ 
  degree, 
  period, 
  status, 
  isLast = false 
}) => (
  <li className={`ms-4 ${!isLast ? "mb-5" : ""}`}>
    <div className={timelineDot}></div>
    <h3 className="text-lg font-medium text-gray-900">{degree}</h3>
    <p className="text-sm font-normal text-gray-500">{period}</p>
    <text className="mb-1 text-sm font-normal leading-none text-gray-400"></text>
    <h5 className="mb-4 text-xs font-normal leading-none text-gray-400">{status}</h5>
  </li>
);

const About: FC = () => {
  const experiences: Experience[] = [
    {
      company: "HCL Technologies",
      role: "Support Engineer",
      period: "March-2022 to Nov-2022"
    }
  ];

  const educations: Education[] = [
    {
      degree: "Bachelor of Quantum Engineering/ Compsci",
      period: "2022 (Feb) - 2022 (Dec)",
      status: "Switched"
    },
    {
      degree: "Bachelor of Software Engineering",
      period: "2023 (Feb) - 2023 (Dec)",
      status: "Switched"
    },
    {
      degree: "Bachelor of Computer Science",
      period: "2024 (Feb) - 2025",
      status: "Completion end of 2025"
    }
  ];

  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">About Me</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8" data-aos="fade-up">
          <p className="text-lg text-gray-700 mb-6">
            Big foodie.
          </p>
          
          <p className="text-lg text-gray-700">
            Other than that.. I like 2000's Bollywood comedy movies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <ul className="space-y-4">
              {experiences.map((exp, index) => (
                <ExperienceItem 
                  key={`exp-${index}`}
                  company={exp.company}
                  role={exp.role}
                  period={exp.period}
                />
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-right">
            <h3 className="text-xl font-bold">Education </h3>
            <h4 className="mb-4 text-sm font-normal leading-none text-gray-400">University of New South Wales</h4>

            <ol className="ml-6 relative border-s border-blue-100"> 
              {educations.map((edu, index) => (
                <EducationItem
                  key={`edu-${index}`}
                  degree={edu.degree}
                  period={edu.period}
                  status={edu.status}
                  isLast={index === educations.length - 1}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;