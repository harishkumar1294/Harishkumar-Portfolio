import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const projectsData = [
  {
    title: 'Real-Time Secure Chat Application',
    description: 'The Real-Time Chat Application is a web-based messaging platform that allows users to communicate instantly. Messages are delivered in real time without refreshing the page using WebSocket technology (Socket.io).',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Cloud-Based Secure File Storing System',
    description: 'A robust cloud storage solution that allows users to securely upload, manage, and share files with seamless AWS S3 integration.',
    tech: ['React.js', 'FastAPI', 'PostgreSQL', 'AWS S3', 'Tailwind CSS'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Enterprise Workflow Automation Engine',
    description: 'The Enterprise Workflow Automation Engine is a system that automates business processes and task management within an organization. It automatically routes tasks between roles, tracks task progress, enforces deadlines (SLA), and maintains audit logs, reducing manual work and improving efficiency.',
    tech: ['React.js', 'CSS', 'Spring Boot'],
    github: 'https://github.com',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Some of my recent work that showcases my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Project Top Bar / Image Placeholder */}
              <div className="h-48 bg-slate-100 dark:bg-slate-700 relative overflow-hidden flex items-center justify-center">
                <Code size={48} className="text-slate-300 dark:text-slate-500 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
