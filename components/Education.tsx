import React from 'react';
import { EDUCATION, ACHIEVEMENTS } from '../constants';
import { Section } from './Section';

export const Education: React.FC = () => {
  return (
    <Section id="education" className="pb-24">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
              <span className="text-primary-500 mr-2">04.</span> Education
            </h2>
            <div className="border-l-2 border-slate-800 pl-6 space-y-2">
               <h3 className="text-xl font-bold text-slate-200">{EDUCATION.institution}</h3>
               <p className="text-slate-400 font-medium">{EDUCATION.degree}</p>
               <p className="text-sm font-mono text-slate-500">{EDUCATION.period} | CGPA: {EDUCATION.cgpa}</p>
               <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                 <strong className="text-slate-300">Coursework:</strong> {EDUCATION.coursework}
               </p>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
              <span className="text-primary-500 mr-2">05.</span> Achievements
            </h2>
             <ul className="space-y-4">
               {ACHIEVEMENTS.map((ach, i) => (
                 <li key={i} className="bg-slate-900/40 border border-slate-800 p-4 rounded-md flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">🏆</span>
                    <span className="text-slate-300">{ach.title}</span>
                 </li>
               ))}
             </ul>
          </div>
       </div>
    </Section>
  );
};