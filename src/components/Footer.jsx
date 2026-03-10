import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Harish Kumar
            </Link>
            <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm max-w-xs text-center md:text-left">
              Building responsive and highly performant web applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Harish Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with by Harish Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
