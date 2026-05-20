import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowUpRight, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Standard Form Validation
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const phone = formData.get('user_phone') as string;
    const message = formData.get('message') as string;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all form inputs before submitting.');
      return;
    }

    // RegEx Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await emailjs.sendForm(
        'service_croz0o9',     // Service ID
        'template_4i5slr2',    // Template ID
        formRef.current,
        'Ysyf2m0t1MltUT2rP'    // Public Key (Public Key)
      );

      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error: any) {
      console.error('EmailJS transmission failure:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error?.text || 'Standard transit error occurred. Please try again directly.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#fcfcfc] border-b border-neutral-100 film-grain">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="mb-24 flex flex-col items-start">
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.45em] uppercase text-neutral-400 mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-black mb-6">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-[#ff4d4d] mb-8" />
          <p className="text-md md:text-lg text-neutral-500 max-w-2xl uppercase tracking-wider leading-relaxed">
            Reach out to our leadership to discuss future commissions, project management consultancy, or spatial masterplans.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Contact Information & Metrics */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Studio HQ Card */}
            <div className="flex gap-6 items-start">
              <a 
                href="https://maps.app.goo.gl/yqWRWzdkYyrGwZY96"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-neutral-100 rounded-lg text-black shrink-0 hover:text-[#ff4d4d] hover:border-neutral-200 transition-colors cursor-none"
              >
                <MapPin className="w-5 h-5 stroke-[1.5]" />
              </a>
              <div>
                <p className="text-[10px] font-bold tracking-[0.4em] text-[#bdbdbd] uppercase mb-2">STUDIO ADDRESS</p>
                <a 
                  href="https://maps.app.goo.gl/yqWRWzdkYyrGwZY96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md md:text-lg leading-relaxed uppercase tracking-wider text-black font-medium hover:text-[#ff4d4d] transition-colors cursor-none block"
                >
                  2nd Floor, 3-TA-57, Ratan Dugar Marg,<br />
                  Sector 3, Jawahar Nagar,<br />
                  Jaipur, Rajasthan 302004
                </a>
              </div>
            </div>

            {/* Inquiries / Email Card */}
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-white border border-neutral-100 rounded-lg text-black shrink-0">
                <Mail className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.4em] text-[#bdbdbd] uppercase mb-2">EMAIL INQUIRIES</p>
                <a 
                  href="mailto:architectsaxes@gmail.com" 
                  className="text-md md:text-lg lowercase tracking-widest text-[#000000] hover:text-[#ff4d4d] transition-colors font-bold cursor-none"
                >
                  architectsaxes@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Hotlines */}
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-white border border-neutral-100 rounded-lg text-black shrink-0">
                <Phone className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.4em] text-[#bdbdbd] uppercase mb-2">PHONE HOTLINE</p>
                <a 
                  href="tel:+919828115410" 
                  className="text-md md:text-lg tracking-widest text-black hover:text-[#ff4d4d] transition-colors font-bold cursor-none"
                >
                  +91 98281 15410
                </a>
              </div>
            </div>

            {/* Design Watermark Indicator */}
            <div className="border-t border-neutral-150 pt-8 mt-12">
              <span className="text-[9px] font-bold tracking-[0.45em] text-[#bdbdbd] leading-loose block uppercase">
                AXES GENERAL OFFICE hours: 10:00AM - 7:00PM IST
              </span>
            </div>

          </div>

          {/* Right Side: Premium Modern Contact Input Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-neutral-100 shadow-[0_30px_60px_rgba(0,0,0,0.02)] relative rounded-sm">
            
            <form ref={formRef} className="space-y-8" onSubmit={sendEmail}>
              
              {/* Name Field */}
              <div className="relative">
                <label className="block text-[9px] font-black tracking-[0.35em] text-neutral-400 mb-2 uppercase">
                  NAME
                </label>
                <input 
                  type="text" 
                  name="user_name"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 text-neutral-800 focus:border-[#ff4d4d] outline-none transition-colors cursor-none uppercase text-xs font-semibold tracking-wider placeholder-neutral-300" 
                  placeholder="John Doe" 
                />
              </div>

              {/* Email address */}
              <div className="relative">
                <label className="block text-[9px] font-black tracking-[0.35em] text-neutral-400 mb-2 uppercase">
                  EMAIL ADDRESS
                </label>
                <input 
                  type="email" 
                  name="user_email"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 text-neutral-800 focus:border-[#ff4d4d] outline-none transition-colors cursor-none text-xs font-semibold tracking-wider placeholder-neutral-300" 
                  placeholder="username@domain.com" 
                />
              </div>

              {/* Phone number */}
              <div className="relative">
                <label className="block text-[9px] font-black tracking-[0.35em] text-neutral-400 mb-2 uppercase">
                  PHONE NUMBER
                </label>
                <input 
                  type="tel" 
                  name="user_phone"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 text-neutral-800 focus:border-[#ff4d4d] outline-none transition-colors cursor-none text-xs font-semibold tracking-wider placeholder-neutral-300" 
                  placeholder="+91 XXXXX XXXXX" 
                />
              </div>

              {/* Large Message Area */}
              <div className="relative">
                <label className="block text-[9px] font-black tracking-[0.35em] text-neutral-400 mb-2 uppercase">
                  PROPOSAL BRIEF
                </label>
                <textarea 
                  name="message"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 text-neutral-800 focus:border-[#ff4d4d] outline-none transition-colors cursor-none min-h-[120px] resize-none text-xs font-semibold tracking-wider placeholder-neutral-300" 
                  placeholder="Outline your project scope, targets, and constraints..."
                />
              </div>

              {/* Status Notifications Panel */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 items-center bg-gray-900 text-white p-4 uppercase text-[10px] tracking-widest font-bold"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#ff4d4d]" />
                  <span>TRANSMISSION COMPLETED SUCCESSFULLY. WE WILL BE IN TOUCH.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 items-center bg-red-50 text-[#ff4d4d] p-4 uppercase text-[9px] tracking-wider font-bold border border-red-100"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
              
              {/* Submit Trigger with loading states */}
              <button 
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center gap-4 bg-black text-white px-10 py-5 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#ff4d4d] transition-all w-full group cursor-none disabled:opacity-50 disabled:hover:bg-black"
              >
                {isLoading ? (
                  <>
                    PROCESSING TRANSMISSION
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    TRANSMIT BRIEF 
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
