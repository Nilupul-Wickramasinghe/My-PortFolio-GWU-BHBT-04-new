import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of nav
      // Preferred calculation using pageYOffset for reliability
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      // If scrollTo with top works use it; fall back to scrollIntoView
      try {
        window.scrollTo({ top, behavior: 'smooth' });
      } catch (err) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -offset);
      }
      setIsOpen(false);
    }
  };
  const navLinks = [{
    name: 'About',
    href: 'about'
  }, {
    name: 'Education',
    href: 'education'
  }, {
    name: 'Projects',
    href: 'projects'
  }, {
    name: 'Creative',
    href: 'creative'
  }, {
    name: 'Achievements',
    href: 'achievements'
  }, {
    name: 'Skills',
    href: 'skills'
  }, {
    name: 'Contact',
    href: 'contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-white py-6 dark:bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={e => scrollToSection(e, 'hero')} className="text-2xl font-bold text-black dark:text-white tracking-tight">
              Nilupul<span className="text-teal-600">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => <a key={link.name} href={`#${link.href}`} onClick={e => scrollToSection(e, link.href)} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">
                {link.name}
              </a>)}
            <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#cv" onClick={e => scrollToSection(e, 'cv')} className="bg-teal-700 hover:bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none mr-3" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button onClick={toggle} aria-label="Toggle theme" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <a key={link.name} href={`#${link.href}`} onClick={e => scrollToSection(e, link.href)} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md">
                {link.name}
              </a>)}
            <a href="#cv" onClick={e => scrollToSection(e, 'cv')} className="block w-full text-center mt-4 bg-teal-700 hover:bg-teal-600 text-white px-5 py-3 rounded-md text-base font-medium transition-colors">
              Resume
            </a>
          </div>
        </div>}
    </nav>;
}
