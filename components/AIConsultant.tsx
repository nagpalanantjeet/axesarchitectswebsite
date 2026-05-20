
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Welcome to AXES. I'm your Architectural Design & Engineering Consultant. How can I help you explore our design services today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      // Fix: Use process.env.API_KEY directly for initialization
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are an AI Design Consultant for AXES Architects (Architectural Design & Engineering Services Pvt. Ltd.), based in Jaipur, Rajasthan. Your tone is professional, technical, and visionary. You represent AXES. You excel at explaining complex engineering integrations with artistic architectural design. Refer to the firm as AXES. Keep responses concise, helpful, and inspiring.",
          temperature: 0.7,
        }
      });

      // Fix: Direct property access for text
      const aiResponseText = response.text || "I am currently analyzing your query. How else can AXES assist with your vision?";
      setMessages(prev => [...prev, { role: 'ai', text: aiResponseText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "My neural systems are momentarily disconnected. Please contact our Jaipur office directly at 098281 15410 for urgent inquiries." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-4 w-[calc(100vw-3rem)] md:w-[400px] h-[550px] bg-[#0d0d0d] border border-white/20 backdrop-blur-2xl flex flex-col shadow-2xl overflow-hidden rounded-2xl"
          >
            <div className="p-5 border-b border-white/10 flex justify-between items-center bg-blue-600 shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-black tracking-widest text-[10px] text-white uppercase leading-none">AXES CONSULTANT</h3>
                  <p className="text-[8px] text-blue-100 font-bold uppercase mt-1">Design & Engineering AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-black/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-5 space-y-4 scroll-smooth bg-gradient-to-b from-black to-neutral-900"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-lg ${
                      m.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none font-medium' 
                        : 'bg-white/5 border border-white/10 text-gray-200 rounded-2xl rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 border-t border-white/10 bg-black/80 shrink-0">
              <div className="relative flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about architecture..."
                  className="flex-grow bg-white/5 border border-white/10 rounded-xl py-3 pl-5 pr-4 focus:outline-none focus:border-blue-500 text-sm transition-all text-white placeholder:text-gray-500"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="shrink-0 p-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 mt-4 opacity-40">
                <div className="h-px bg-white/20 w-8"></div>
                <p className="text-[8px] text-gray-400 font-bold uppercase tracking-[0.2em]">Engineering AI by Gemini</p>
                <div className="h-px bg-white/20 w-8"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-5 rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center ${
          isOpen ? 'bg-white text-black' : 'bg-blue-600 text-white hover:bg-blue-500 ring-4 ring-blue-600/20'
        }`}
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </motion.button>
    </div>
  );
};

export default AIConsultant;
