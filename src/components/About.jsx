import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Lightbulb, Palette } from 'lucide-react';
export function About() {
  return <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
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
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg" />
            <div className="relative bg-white dark:bg-[#07111a] p-8 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-900">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I am{' '}
                <span className="font-bold text-purple-700">
                  Nilupul Wickramasingha
                </span>
                , an undergraduate in Biomedical Technology at Gampaha
                Wickramarachchi University of Indigenous Medicine (GWUIM).
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I have a strong interest in{' '}
                <span className="font-semibold text-gray-900">
                  medical technology
                </span>
                ,{' '}
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  UI/UX design
                </span>{' '}
                for healthcare applications, and creative fields such as{' '}
                <span className="font-semibold text-gray-900 dark:text-gray-100">modeling</span>{' '}
                and{' '}
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  hair & makeup
                </span>
                .
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am passionate about learning, innovation, and combining
                technology with creativity to build meaningful solutions.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[{
            icon: User,
            label: 'Biomedical Tech',
            desc: 'Undergraduate at GWUIM'
          }, {
            icon: Palette,
            label: 'UI/UX Design',
            desc: 'Healthcare Applications'
          }, {
            icon: Lightbulb,
            label: 'Innovation',
            desc: 'Tech & Creativity'
          }, {
            icon: Heart,
            label: 'Creative Arts',
            desc: 'Modeling & Makeup'
          }].map((item, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-purple-50">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-300">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>)}
          </motion.div>
        </div>
      </div>
    </section>;
}