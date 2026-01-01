import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import portrait from '../my4.png';

export function Hero() {
  const roles = ['Biomedical Technologist', 'Creative Artist', 'UI/UX Designer', 'Modeler'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center bg-white dark:bg-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF6B35] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B35] rounded-full mix-blend-screen filter blur-[128px] opacity-5" />

      <div className="z-10 max-w-5xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black dark:text-white leading-tight">
          NILUPUL
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            WICKRAMASINGHA
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 font-medium tracking-wide max-w-2xl mx-auto">
          I am a{' '}
          <span className="text-[#FF6B35] inline-block min-w-max font-bold">
            {roles[currentRole]}
          </span>
        </p>

        <nav className="pt-12">
          <ul className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Projects', 'Skills', 'Certificates'].map(item => <li key={item}>
                <button onClick={() => scrollToSection(item.toLowerCase())} className="group relative text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#FF6B35] transition-all duration-300 group-hover:w-full" />
                </button>
              </li>)}
          </ul>
        </nav>
      </div>

      {/* Portrait on the right for larger screens */}
      <div className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 z-0">
        <div className="w-64 h-64 md:w-96 md:h-96 overflow-hidden">
          <img src={portrait} alt="Portrait" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-600" />
      </div>
    </section>;
}
