
import quill from '../assets/quill.png'
import task from '../assets/task.png'

const projects = [
 
  {
    title: 'QuillMark',
    description: 'A seamless Markdown editing experience designed for developers, writers, and content creators, combining functionality, accessibility, and aesthetic appeal.',
    image: quill,
    technologies: ['React', 'TypeScript', 'Marked','React-Split','Tailwind CSS'],
    demoUrl: 'https://quillmark.vercel.app',
    githubUrl: 'https://github.com/becodewala-youtube/QuillMark',
  },
  {
    title: 'TaskTrek',
    description: 'A modern, feature-rich application designed to help users plan, organize, and visualize project milestones effectively, combining accessibility, intuitive design, and exportable roadmaps.',
    image: task,
    technologies: ['React', 'TypeScript', 'Zustand','html2pdf','Tailwind CSS'],
    demoUrl: 'https://tasktrek-becodewala.vercel.app',
    githubUrl: 'https://github.com/becodewala-youtube/TaskTrek',
  },
];

const Projects: FC = () => {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          Coursework
        </h2>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/* becodewala */