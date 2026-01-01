import { motion } from 'framer-motion';
import { Trophy, Building2 } from 'lucide-react';
import nilipulA from '../nilipulA.jpeg';
import yogaAward from './Yoga Award.png';

export function Achievements() {
  const achievements = [
    {
      position: '2nd Runner-Up',
      event: 'DHack 2025',
      name: 'GAMPAHA WICKRAMARACHCHI',
      institution: 'UNIVERSITY OF INDIGENOUS MEDICINE',
      description:
        'Awarded 3rd Place at DHack 2025 for developing AidMate, a first-aid mobile application focused on rapid emergency response. The project was recognized for its strong technical implementation, intuitive emergency-centered user interface, and high potential impact in enhancing healthcare accessibility through biomedical technology–driven solutions.',
      category: 'Hackathon Winner – Mobile App Development',
      focusArea: 'Healthcare Innovation',
      image: nilipulA,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      position: 'Runner-up',
      event: '36th Amateur World Yoga Cup 2025',
      name: 'Dance with Yoga',
      institution: 'Colombo, Sri Lanka',
      description:
        'Awarded a Certificate of Merit in the Under 24 – Dance with Yoga category at the 36th Amateur World Yoga Cup 2025. Participated in a culturally rich fusion performance combining Sri Lankan Kandyan Dance and Yoga, recognized for creativity, coordination, and artistic expression.',
      category: 'Dance with Yoga (Under 24)',
      focusArea: 'Cultural Performance · Yoga · Dance · Youth Talent',
      image: yogaAward,
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-600">
              Achievements
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {achievements.map((a, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <div className={`relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${a.color}`}>
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
                  <img src={a.image} alt={`${a.event} Achievement`} className="w-full h-96 object-cover" />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-xl font-bold text-yellow-600 dark:text-yellow-400">{a.position}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{a.event}</h3>

                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">{a.name}</p>

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-6">
                    <Building2 size={18} className="dark:text-gray-200" />
                    <span className="text-gray-700 dark:text-gray-200">{a.institution}</span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-600">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{a.description}</p>

                  <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Category</p>
                      <p className="text-gray-800 dark:text-gray-200">{a.category}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Focus Area</p>
                      <p className="text-gray-800 dark:text-gray-200">{a.focusArea}</p>
                    </div>
                  </div>
                </div>

                {/* Highlight Tags */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-semibold">{a.category}</span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">{a.focusArea.split(' · ')[0]}</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">{a.focusArea.split(' · ').slice(1).join(' · ')}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
