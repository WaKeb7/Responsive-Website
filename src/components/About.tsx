import { EDUCATION, EXPERIENCE, WORK_EXPERIENCE, LEADERSHIP } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Who is Wako?</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            A passionate technologist dedicated to building innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="animate-on-scroll lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl opacity-10 blur-2xl"></div>
              <img
                src="/images/about.jpg"
                alt="Wako K. Wako - About"
                className="relative rounded-2xl shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-on-scroll">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Hello! I'm a Software Engineer and Founder of Avangardai, with 4+ years of software
                development experience. I specialize in full-stack development using React, Node.js,
                Python, and SQL to build scalable web applications that enhance reliability,
                performance, and user experience.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm experienced in designing and maintaining reliable backend services and cloud
                systems, committed to writing clean, efficient, well-tested code following best
                practices. As a flexible team player, I quickly adopt new tools, frameworks, and
                technologies to support evolving team needs.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-100 dark:border-primary-800">
                <h3 className="text-3xl font-bold gradient-text">{EXPERIENCE.projects}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Academic & Personal Projects
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary-50 to-accent-50 dark:from-secondary-900/20 dark:to-accent-900/20 border border-secondary-100 dark:border-secondary-800">
                <h3 className="text-3xl font-bold gradient-text">{EXPERIENCE.organizations}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Organizations Worked For
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 border border-accent-100 dark:border-accent-800 col-span-2 md:col-span-1">
                <h3 className="text-3xl font-bold gradient-text">{EXPERIENCE.years}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* Work Experience */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Work Experience</h3>
              <div className="space-y-6">
                {WORK_EXPERIENCE.map((job, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {job.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {job.company}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {job.location}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mt-3">
                      {job.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                        >
                          <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Leadership</h3>
              <div className="space-y-4">
                {LEADERSHIP.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  >
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {item.title} – {item.organization}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {edu.school}
                        </p>
                        {edu.location && (
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {edu.location}
                          </p>
                        )}
                        {edu.honors && (
                          <p className="text-sm text-accent-600 dark:text-accent-400 mt-1">
                            {edu.honors}
                            {edu.minor && ` • ${edu.minor}`}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
