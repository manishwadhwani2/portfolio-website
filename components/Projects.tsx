import React from 'react';
import { PROJECTS, RESEARCH } from '../constants';
import { Section } from './Section';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Something I've Built">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-slate-900/50 p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-800 hover:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <div className="text-primary-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            {project.tech && (
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-500">
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
            )}
          </div>
        ))}
        
        {/* Research Paper Card */}
        <div className="bg-slate-900/50 p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-800 hover:border-slate-700 md:col-span-2">
           <div className="flex justify-between items-start mb-4">
              <div className="text-primary-500 mb-2">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <a href={RESEARCH.link} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-primary-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
           </div>
           <h3 className="text-xl font-bold text-slate-100 mb-1">{RESEARCH.title}</h3>
           <p className="text-sm font-mono text-primary-400 mb-4">{RESEARCH.year} • IEEE</p>
           <p className="text-slate-400 text-sm leading-relaxed">
             {RESEARCH.description}
           </p>
        </div>
      </div>
    </Section>
  );
};