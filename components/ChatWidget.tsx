import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { streamChatResponse } from '../services/aiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am Manish\'s AI assistant. Ask me anything about his experience, skills, or projects.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = [...messages, userMessage];
      const stream = await streamChatResponse(userMessage.text, history);
      
      // Add a placeholder for the model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      let fullResponse = '';
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
           const newMsgs = [...prev];
           newMsgs[newMsgs.length - 1] = { role: 'model', text: fullResponse };
           return newMsgs;
        });
      }
      
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error connecting to the AI service. Please ensure the API Key is configured.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center space-x-2">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="font-semibold text-slate-100">AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-tr-none' 
                      : msg.isError 
                        ? 'bg-red-900/50 text-red-200 border border-red-800 rounded-tl-none'
                        : 'bg-slate-800 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
             {isLoading && messages[messages.length - 1].role === 'user' && (
                <div className="flex justify-start">
                    <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none text-slate-400 text-sm">
                        <span className="animate-pulse">Thinking...</span>
                    </div>
                </div>
             )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my experience..."
                className="flex-1 bg-slate-900 text-slate-200 border border-slate-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
};