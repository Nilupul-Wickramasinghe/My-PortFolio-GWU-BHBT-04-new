import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const EDUCATION = [
  {
    id: 'btech',
    title: 'Biomedical Technology',
    subtitle: 'Undergraduate Degree',
    when: 'Present',
    place: 'Gampaha Wickramarachchi University of Indigenous Medicine (GWUIM)',
    description:
      'Focusing on the intersection of modern technology and medical science. Developing skills in medical instrumentation, healthcare IT, and biomedical engineering principles.'
  },
  {
    id: 'dhrm',
    title: 'Diploma in Human Resource Management',
    subtitle: 'Reading',
    when: 'Present',
    place: 'LPEC Campus',
    description:
      'A professional qualification focused on people management, recruitment, training, performance evaluation, and workplace relations.'
  },
  {
    id: 'dict',
    title: 'Diploma in Information and Communication Technology (ICT)',
    subtitle: '2019',
    when: '2019',
    place: 'Nenasala Education Center',
    description:
      'A foundational qualification covering computer applications, basic programming, networking concepts, and digital technologies, developing practical IT skills for academic and professional use.'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800 space-y-12"
          >
            {EDUCATION.map((item) => (
              <div key={item.id} className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-md" />
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <p className="text-purple-600 font-medium">{item.subtitle}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center text-gray-500 dark:text-gray-300 text-sm bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">
                      <Calendar size={14} className="mr-2" />
                      <span>{item.when}</span>
                    </div>
                  </div>

                  <div className="flex items-start mb-4 text-gray-600 dark:text-gray-300">
                    <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-purple-500" />
                    <span>{item.place}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}