import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-32 pb-24 px-6 md:px-24 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-20">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-accent-green" />
            <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold text-white leading-tight tracking-tighter">
            Let's Start a <span className="text-accent-green italic">Conversation</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-accent-green group-hover:border-accent-green/30 transition-all">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Email Us</span>
                  <span className="text-white text-xl font-medium">hello@bamboogroves.com</span>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-accent-green group-hover:border-accent-green/30 transition-all">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Call Us</span>
                  <span className="text-white text-xl font-medium">+91 98765 43210</span>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-accent-green group-hover:border-accent-green/30 transition-all">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Our Studio</span>
                  <span className="text-white text-xl font-medium">Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-accent-green/5 border border-accent-green/10">
              <p className="text-accent-green text-sm leading-relaxed font-medium">
                Our team is available nationwide for consultations. Whether you're planning a corporate summit in Mumbai or a private soirée in Jaipur, we're ready to bring luxury to your doorstep.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px] backdrop-blur-sm">
            <form className="flex flex-col space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <label className="text-white/40 text-[10px] uppercase tracking-widest font-bold ml-1">Full Name</label>
                  <input 
                    type="text" 
                    className="bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-accent-green/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-white/40 text-[10px] uppercase tracking-widest font-bold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-accent-green/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-white/40 text-[10px] uppercase tracking-widest font-bold ml-1">Subject</label>
                <select className="bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-accent-green/50 transition-colors appearance-none">
                  <option className="bg-black">Corporate Event</option>
                  <option className="bg-black">Private Soirée</option>
                  <option className="bg-black">Partnership Inquiry</option>
                  <option className="bg-black">Career Opportunity</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-white/40 text-[10px] uppercase tracking-widest font-bold ml-1">Message</label>
                <textarea 
                  rows={6}
                  className="bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-accent-green/50 transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent-green text-black font-bold uppercase tracking-widest text-sm py-5 rounded-xl flex items-center justify-center space-x-3 hover:bg-white transition-colors"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
