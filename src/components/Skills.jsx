import React from 'react';
import { Code2, Cpu, PenTool, Layout, Database, Activity } from 'lucide-react';
const skills = [{
  name: 'UI/UX Design',
  proficiency: 95,
  icon: <PenTool />
}, {
  name: 'Figma',
  proficiency: 90,
  icon: <Layout />
}, {
  name: 'React & TypeScript',
  proficiency: 85,
  icon: <Code2 />
}, {
  name: 'Biomedical Engineering',
  proficiency: 92,
  icon: <Activity />
}, {
  name: 'Arduino & Circuit Design',
  proficiency: 88,
  icon: <Cpu />
}, {
  name: 'HTML',
  proficiency: 80,
  icon: <Database />
}];
export function Skills() {
  return <section id="skills" className="py-24 px-4 bg-white dark:bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B35] rounded-full mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center md:text-left">
          Tech <span className="text-[#FF6B35]">Stack</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => <div key={skill.name} className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#FF6B35]/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-100 dark:bg-black rounded-lg text-[#FF6B35]">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                  <span className="text-[#FF6B35]">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-black rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF6B35] rounded-full transition-all duration-1000 ease-out" style={{
                width: `${skill.proficiency}%`
              }} />
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}
