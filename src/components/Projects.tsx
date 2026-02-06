import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mt-4">A showcase of my work and technical capabilities</p>
        </div>

        {/* TODO: Replace with actual projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="card animate-on-scroll"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 -m-6 mb-6 rounded-t-xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    <FiGithub className="w-16 h-16" />
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 text-xs font-medium rounded bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder message */}
        <div className="mt-12 p-8 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 text-center animate-on-scroll">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Note:</strong> Please replace the placeholder projects in{' '}
            <code className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded">
              src/lib/constants.ts
            </code>{' '}
            with your actual projects. Include real GitHub links, project descriptions, and
            screenshots.
          </p>
        </div>
      </div>
    </section>
  );
}
