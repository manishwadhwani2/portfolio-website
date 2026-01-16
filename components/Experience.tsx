import React from 'react';
import { EXPERIENCES } from '../constants';
import { Section } from './Section';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Past Experience">
      <div className="space-y-12 border-l border-slate-800 ml-3 md:ml-6 pl-8 md:pl-12 relative">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-primary-500 group-hover:bg-primary-500/20 transition-colors" />
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
                {exp.role} <span className="text-primary-500">@ {exp.company}</span>
              </h3>
              <span className="font-mono text-sm text-slate-500">{exp.period}</span>
            </div>
            
            <div className="text-sm text-slate-400 mb-4 font-mono">{exp.location}</div>
            
            <ul className="space-y-3">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start text-slate-400 text-sm md:text-base leading-relaxed">
                  <span className="text-primary-500 mr-2 mt-1.5 text-xs">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};