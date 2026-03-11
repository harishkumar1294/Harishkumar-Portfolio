import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificatesData = [
  {
    title: 'CyberHavoc CTF',
    issuer: 'Participation',
    date: '2023',
    link: '/Certificates/CyberHavoc_CTF.jpg',
  },
  {
    title: 'Fundamentals Of Database',
    issuer: 'Certification',
    date: '2024',
    link: '/Certificates/Fundamentals_Of_Database_Certificate.pdf',
  },
  {
    title: 'YUGAM 2024',
    issuer: 'Participation',
    date: '2024',
    link: '/Certificates/YUGAM_2024.pdf',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Certificates</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500 rounded-full flex items-center justify-center">
                <Award size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white leading-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  {cert.issuer}
                </p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 dark:text-slate-500 font-medium">{cert.date}</span>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    View Certificate
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

export default Certificates;
