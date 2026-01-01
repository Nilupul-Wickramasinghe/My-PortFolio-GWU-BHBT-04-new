import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Creative } from './components/Creative';
import { Achievements } from './components/Achievements';
import { Certificates } from './components/Certificates';
import { CVSection } from './components/CVSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Section } from './components/SectionWrapper';
import BackgroundAnimation from './components/BackgroundAnimation';
export function App() {
  return <div className="min-h-screen bg-white dark:bg-black font-sans text-gray-900 dark:text-gray-100 relative">
      <BackgroundAnimation />
      <div className="content-above-bg">
      <Navigation />
      <WhatsAppButton />

      <main className="pt-20">
        {' '}
        {/* Add padding top to account for fixed header */}
        <Section id="hero" className="">
          <Hero />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="education">
          <Education />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="creative">
          <Creative />
        </Section>
        <Section id="achievements">
          <Achievements />
        </Section>
        <Section id="certificates">
          <Certificates />
        </Section>
        <Section id="contact">
          <CVSection />
        </Section>
      </main>
      

      <footer className="bg-gray-900 dark:bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nilupul Wickramasingha. All rights
            reserved.
          </p>
          
        </div>
      </footer>
      </div>
    </div>;
}