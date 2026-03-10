import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SQL',
  'Git',
  'GitHub'
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build robust applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm text-slate-800 dark:text-slate-200 font-semibold text-xl sm:text-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
