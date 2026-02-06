import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{SITE_CONFIG.title}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SITE_CONFIG.social.linkedin && (
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
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
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {SITE_CONFIG.social.instagram && (
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="Instagram Profile"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-right">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
