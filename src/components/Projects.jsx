import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, CircuitBoard, HeartPulse } from 'lucide-react';
import p1 from '../p1.png';
import momsCare from "../Mom's Care.png";
import emgProject from '../EMG project.png';
export function Projects() {
  const projects = [{
    title: 'Aidmate App',
    category: 'UI/UX Design',
    description: 'A comprehensive healthcare companion app design focusing on accessibility and user-friendly navigation for patients.',
    image: p1,
    icon: HeartPulse,
    tags: ['Figma', 'Prototyping', 'User Research'],
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Mom’s Care App',
    category: 'Mobile Application',
    description: 'Pregnancy and childcare tracking application designed to assist new mothers with health monitoring and schedules.',
    image: momsCare,
    icon: Smartphone,
    tags: ['UI Design', 'Healthcare', 'Mobile'],
    color: 'from-pink-500 to-rose-500'
  }, {
    title: 'EMG Sensor Circuit',
    category: 'Biomedical Engineering',
    description: 'Design and implementation of an Electromyography (EMG) sensor circuit for muscle signal detection and analysis.',
    image: emgProject,
    icon: CircuitBoard,
    tags: ['Circuit Design', 'Biomedical', 'Sensors'],
    color: 'from-purple-500 to-indigo-500'
  }];
  const projectCards = projects.map((project, index) => {
    const IconComp = project.icon;
    return (
      <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} whileHover={{ y: -8, scale: 1.02 }} className="bg-white dark:bg-[#07111a] rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow flex flex-col smooth-transform ring-0 dark:ring-1 dark:ring-white/5">
        <div className={`h-48 bg-gradient-to-br ${project.color} p-0 flex items-center justify-center`}>
          {project.image ? (
            <motion.img src={project.image} alt={project.title} className="w-full h-48 object-cover smooth-transform" initial={{ scale: 1 }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} />
          ) : (
            <div className="p-6 flex items-center justify-center">
              {React.createElement(IconComp, { className: 'w-20 h-20 text-white opacity-90' })}
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="text-xs font-semibold tracking-wide text-purple-600 uppercase mb-2">
            {project.category}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full">{tag}</span>)}
          </div>

          <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <button className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
              <Github size={16} className="mr-2" />
              Code
            </button>
            <button className="flex items-center text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
              <ExternalLink size={16} className="mr-2" />
              Demo
            </button>
          </div>
        </div>
      </motion.div>
    );
  });
  return <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectCards}
        </div>
      </div>
    </section>;
}
