import { FiCode, FiBook, FiHeart, FiTool, FiCloud, FiDatabase, FiCpu } from 'react-icons/fi';
import { SKILLS, COURSES } from '@/lib/constants';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FiCode,
      skills: SKILLS.languages,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frontend',
      icon: FiCode,
      skills: SKILLS.frontend,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Backend',
      icon: FiTool,
      skills: SKILLS.backend,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Databases',
      icon: FiDatabase,
      skills: SKILLS.databases,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Cloud & DevOps',
      icon: FiCloud,
      skills: SKILLS.cloud,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'AI / LLM Development',
      icon: FiCpu,
      skills: SKILLS.ai.map(skill =>
        typeof skill === 'string' ? { name: skill, level: 85 } : skill
      ),
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mt-4">At a Glance</p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="card group animate-on-scroll"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${idx * 100 + skillIdx * 50}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Methodologies */}
        <div className="mb-12 animate-on-scroll">
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
                <FiTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Data & Methodologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.other.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Courses (if you want to keep them) */}
        {COURSES && COURSES.length > 0 && (
          <div className="grid md:grid-cols-1 gap-8">
            <div className="card animate-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                  <FiBook className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Relevant Courses
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {COURSES.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
