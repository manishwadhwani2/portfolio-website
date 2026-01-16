import React from 'react';
import { SKILLS } from '../constants';
import { Section } from './Section';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-slate-200 mb-6 border-b border-slate-800 pb-2">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};