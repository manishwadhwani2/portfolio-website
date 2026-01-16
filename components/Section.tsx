import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-100 border-l-4 border-primary-500 pl-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};