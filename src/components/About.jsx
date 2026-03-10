import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Laptop, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-slate-600 dark:text-slate-400"
          >
            <p leading-relaxed>
              Hello! I'm <strong className="text-slate-900 dark:text-white font-semibold">Harish Kumar</strong>, currently pursuing my Bachelor's degree in Information Technology.
            </p>
            <p leading-relaxed>
              Passionate software developer with a strong interest in Java and frontend development, continuously improving my skills in Data Structures and Algorithms (DSA) and modern web technologies. I enjoy building real-world projects to strengthen my technical knowledge and problem-solving abilities.
            </p>
            <p leading-relaxed>
              I am a quick learner and team player, eager to explore new technologies and create responsive, user-friendly web applications while continuously growing as a developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {/* Feature Cards */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Student</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Final Year IT</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Developer</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Full Stack Focus</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-4">
                <Laptop size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Creator</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Real-World Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
