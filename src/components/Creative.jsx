import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Scissors, Sparkles } from 'lucide-react';
import tamilShoot from '../Tamil Shoot.png';
import casualWear from '../CAsual Wear.png';
import fashion from '../Fashion.png';
import bridel from '../bridel.jpg';
import hairDressing from '../Hair dressing.jpg';
import makeupImg from '../makeup.jpg';

export function Creative() {
  const [activeTab, setActiveTab] = useState('modeling');
  const items = {
    modeling: [{
      title: 'Tamil Shoot',
      desc: 'Outdoor casual shoot with a Tamil touch—simple, natural, and confident.',
      color: 'bg-blue-100',
      image: tamilShoot
    }, {
      title: 'Outdoor Shoot',
      desc: 'A natural outdoor shoot capturing confidence, style, and authentic expressions in an open environment.',
      color: 'bg-indigo-100',
      image: 'src/Outdoor shoot.png'
    }, {
      title: 'Formal Wear Shoot',
      desc: 'A modern full suit shoot focusing on clean cuts, strong posture, and professional style.',
      color: 'bg-violet-100',
      image: casualWear
    }, {
      title: 'Urban Commercial',
      desc: 'This series captures a smart-casual aesthetic, highlighting the confident and approachable energy essential for lifestyle brand advertising.',
      color: 'bg-violet-100',
      image: fashion
    }],
    
    makeup: [{
      title: 'Bridal Glam',
      desc: 'Traditional & Modern',
      color: 'bg-pink-100',
      image: bridel
    }, {
      title: 'Hair Setting',
      desc: 'Special effects Hair',
      color: 'bg-rose-100',
      image: hairDressing
    }, {
      title: 'Makeup',
      desc: 'High fashion concept',
      color: 'bg-fuchsia-100',
      image: makeupImg
    }]
  };
  return <section id="creative" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Creative Portfolio
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Exploring the artistic side through modeling and professional hair &
            makeup artistry.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <button onClick={() => setActiveTab('modeling')} className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'modeling' ? 'bg-purple-600 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-purple-50'}`}>
              <Camera size={18} className="mr-2" />
              Modeling
            </button>
            <button onClick={() => setActiveTab('makeup')} className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'makeup' ? 'bg-pink-600 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-pink-50'}`}>
              <Scissors size={18} className="mr-2" />
              Hair & Makeup
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.4
        }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items[activeTab].map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 30,
                scale: 0.9
              }} animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }} transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: 'easeOut'
              }} whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                {/* Image Area */}
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className={`h-64 w-full ${item.color} flex items-center justify-center overflow-hidden`}>
                  {item.image ? (
                    <motion.img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  ) : (
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <Sparkles className={`w-12 h-12 ${activeTab === 'modeling' ? 'text-purple-300' : 'text-pink-300'}`} />
                    </motion.div>
                  )}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6"
                >
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-white font-bold text-xl"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-gray-200 text-sm"
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              </motion.div>)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>;
}

