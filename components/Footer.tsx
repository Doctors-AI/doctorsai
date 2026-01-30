'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Twitter, Instagram, Youtube, Linkedin, MessageCircle, 
  Mail, MapPin, X, Sparkles, Smartphone, ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const [showIOSModal, setShowIOSModal] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      icon: Twitter, 
      url: 'https://x.com/Doctors__AI', 
      label: 'X (Twitter)',
      color: 'hover:text-sky-400',
      bg: 'hover:bg-sky-400/10 hover:border-sky-400/20'
    },
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/doctorsaiofficial/', 
      label: 'Instagram',
      color: 'hover:text-pink-500',
      bg: 'hover:bg-pink-500/10 hover:border-pink-500/20'
    },
    { 
      icon: Youtube, 
      url: 'https://www.youtube.com/@DoctorsAIofficial', 
      label: 'YouTube',
      color: 'hover:text-red-500',
      bg: 'hover:bg-red-500/10 hover:border-red-500/20'
    },
    { 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/company/doctors-ai/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
      bg: 'hover:bg-blue-500/10 hover:border-blue-500/20'
    },
    { 
      icon: MessageCircle, 
      url: 'https://discord.gg/BRv9ZfjaD2', 
      label: 'Discord',
      color: 'hover:text-indigo-400',
      bg: 'hover:bg-indigo-400/10 hover:border-indigo-400/20'
    }
  ];

  return (
    <>
      <footer className="relative pt-32 pb-12 overflow-hidden bg-slate-950" itemScope itemType="https://schema.org/WPFooter">
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] translate-y-1/2" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
             {/* Brand Column (4 cols) */}
             <div className="lg:col-span-4 space-y-8">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="flex items-center gap-2"
                 >
                   <div className="p-2 resize-none rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/20">
                     <Heart className="w-6 h-6 text-teal-400 fill-teal-400/50" />
                   </div>
                   <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                     Doctors AI
                   </span>
                 </motion.div>
                 
                 <p className="text-slate-400 leading-relaxed font-light">
                   Your intelligent healthcare companion. Empowering medical professionals with AI-driven insights, real-time analysis, and global collaboration.
                 </p>

                 <div className="flex flex-col sm:flex-row gap-4 pt-2">
                   {/* Play Store */}
                   <motion.a
                     href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors"
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="block opacity-90 hover:opacity-100 transition-opacity"
                   >
                     <img
                       src="https://raw.githubusercontent.com/RittikSoni/assets/429e892a2c4d2fc5f8ecd91faaf008e95226cfdf/GetItOnGooglePlay_Badge_Web_color_English.svg"
                       alt="Get it on Google Play"
                       className="h-[46px] w-auto"
                     />
                   </motion.a>

                   {/* App Store */}
                   <motion.button
                     onClick={() => setShowIOSModal(true)}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="block opacity-90 hover:opacity-100 transition-opacity"
                   >
                     <img
                       src="https://raw.githubusercontent.com/RittikSoni/assets/85ff5ccfae16150071a00584a4dcfccb4715bd9e/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                       alt="Download on the App Store"
                       className="h-[46px] w-auto"
                     />
                   </motion.button>
                 </div>
             </div>

             {/* Links Column (Mainly Socials & Contact) (4 cols) */}
             <div className="lg:col-span-4 lg:col-start-6 space-y-8">
                <h4 className="text-white font-semibold text-lg">Connect With Us</h4>
                
                <div className="flex flex-wrap gap-3">
                   {socialLinks.map((social, idx) => (
                     <motion.a
                       key={idx}
                       href={social.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ delay: idx * 0.1 }}
                       whileHover={{ y: -4 }}
                       className={`w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} ${social.bg}`}
                       aria-label={social.label}
                     >
                       <social.icon className="w-5 h-5" />
                     </motion.a>
                   ))}
                </div>

                <div className="space-y-4 pt-4">
                  <a href="mailto:contact.doctorsai@elpisverse.com" className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-teal-500/30 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>contact.doctorsai@elpisverse.com</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Global Headquarters</span>
                  </div>
                </div>
             </div>

             {/* Tagline Column (4 cols) */}
             <div className="lg:col-span-3 lg:col-start-10 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                    <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Live Well</span>
                  </h3>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Live Long</span>
                  </h3>
                </motion.div>
             </div>
          </div>

          <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-slate-500 text-sm text-center md:text-left">
               <p>© {currentYear} Doctors AI. All rights reserved.</p>
               <p className="mt-2 text-xs text-slate-600 max-w-xl">
                 Medical Disclaimer: Doctors AI is an assisting tool for healthcare professionals. 
                 It is not a substitute for professional medical judgment.
               </p>
             </div>

             <motion.button
               onClick={scrollToTop}
               whileHover={{ y: -4 }}
               className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-teal-500/30 text-slate-400 hover:text-teal-400 transition-colors"
               aria-label="Scroll to top"
             >
               <ArrowUp className="w-5 h-5" />
             </motion.button>
          </div>
          
           <div className="mt-8 text-center">
             <p className="text-xs text-slate-600 flex items-center justify-center gap-1.5">
               Made with <Heart className="w-3 h-3 text-red-500 fill-red-500/20 animate-pulse" /> for the future of healthcare
             </p>
           </div>
        </div>
      </footer>

      {/* iOS Modal */}
      <AnimatePresence>
        {showIOSModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/80 backdrop-blur-sm"
               onClick={() => setShowIOSModal(false)}
             />
             
             <motion.div
               initial={{ scale: 0.9, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.9, opacity: 0, y: 10 }}
               className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl"
             >
                {/* Modal Glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <button
                  onClick={() => setShowIOSModal(false)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center relative z-10">
                   <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                      <Smartphone className="w-8 h-8 text-slate-300" />
                      <div className="absolute top-[-4px] right-[-4px]">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                        </span>
                      </div>
                   </div>

                   <h3 className="text-2xl font-bold text-white mb-2">Coming to iOS</h3>
                   <p className="text-slate-400 mb-8">
                     We're adding the final surgical touches. <br/> 
                     Get notified when we launch on the App Store.
                   </p>

                   <button
                     onClick={() => setShowIOSModal(false)}
                     className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 font-semibold text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-shadow"
                   >
                     Notify me on Launch
                   </button>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;