import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I'm <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Harish Kumar
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-600 dark:text-slate-300 mb-6">
            {/* Frontend Developer */}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            I am a final-year Information Technology student with a strong interest in building clean, modern web interfaces and developing practical full-stack applications that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/HARISHKUMAR%20-%20RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="HARISHKUMAR - RESUME.pdf"
              className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-600/25 dark:shadow-blue-600/10 active:scale-95"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer active:scale-95 shadow-sm"
            >
              <span>Contact Me</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-10 text-slate-500 dark:text-slate-400">
            <a href="https://github.com/harishkumar1294" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200 p-2">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/a-harishkumar/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 p-2">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 p-2">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Background Blob/Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
              {/* Replace src with actual image path or generate an image */}
              <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                <span className="text-xl">Profile Image</span>
              </div>
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Home;
