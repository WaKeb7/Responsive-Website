import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { SITE_CONFIG } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';

export default function Hero() {
  const handleResumeDownload = () => {
    trackEvent('resume_download', { location: 'hero_section' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-on-scroll">
            <div className="space-y-2">
              <p className="text-primary-600 dark:text-primary-400 font-medium tracking-wide uppercase text-sm">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                Hi, I'm <span className="gradient-text">{SITE_CONFIG.name.split(' ')[0]}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                {SITE_CONFIG.title}
              </h2>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Full-stack engineer with 4+ years of experience building scalable web applications
              using React, Node.js, Python, and cloud technologies. Founder of Avangardai, where I
              develop innovative AI-powered solutions. Passionate about creating reliable,
              high-performance software that delivers exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={SITE_CONFIG.resume}
                download="Wako_Kebrom_Wako_Resume.pdf"
                onClick={handleResumeDownload}
                className="btn-primary group"
              >
                <FiDownload className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Connect with me:
              </span>
              <div className="flex gap-3">
                {SITE_CONFIG.social.linkedin && (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                )}
                {SITE_CONFIG.social.github && (
                  <a
                    href={SITE_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                    aria-label="GitHub Profile"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-on-scroll lg:order-last order-first">
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient background blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

              {/* Profile image container */}
              <div className="relative z-10 aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src="/images/profile.png"
                  alt="Wako K. Wako - Software Engineer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
