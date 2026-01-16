import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';


function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;