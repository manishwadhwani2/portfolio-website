import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 pt-24 pb-12 text-center border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-500 font-mono mb-4">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="inline-block px-8 py-4 border border-primary-500 text-primary-500 font-medium rounded hover:bg-primary-500/10 transition-colors"
        >
          Say Hello
        </a>

        <div className="mt-24 text-slate-500 text-sm">
           <p className="mb-2">Designed & Built by Manish Wadhwani</p>
        </div>
      </div>
    </footer>
  );
};