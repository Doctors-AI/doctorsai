'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Twitter, Instagram, Youtube, Linkedin, MessageCircle, 
  Mail, MapPin, X, Sparkles, Smartphone 
} from 'lucide-react';

const Footer = () => {
  const [showIOSModal, setShowIOSModal] = useState(false);
  
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Twitter, 
      url: 'https://x.com/Doctors__AI', 
      label: 'X (Twitter)',
      color: 'hover:text-slate-200'
    },
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/doctorsaiofficial/', 
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
    { 
      icon: Youtube, 
      url: 'https://www.youtube.com/@DoctorsAIofficial', 
      label: 'YouTube',
      color: 'hover:text-red-400'
    },
    { 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/company/doctors-ai/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: MessageCircle, 
      url: 'https://discord.gg/BRv9ZfjaD2', 
      label: 'Discord',
      color: 'hover:text-indigo-400'
    }
  ];

  return (
    <>
      <footer className="relative py-16 px-4 mt-20" itemScope itemType="https://schema.org/WPFooter">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Heart className="w-6 h-6 text-teal-400 fill-teal-400" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                    Doctors AI
                  </span>
                </div>
                <p className="text-slate-400 mb-6 max-w-xs mx-auto md:mx-0">
                  Your intelligent healthcare companion. Empowering medical professionals with AI-driven insights.
                </p>
                
                {/* App Badges Container */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  
                  {/* Google Play Badge */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-105 focus:opacity-80"
                    aria-label="Get Doctors AI on Google Play"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RittikSoni/assets/429e892a2c4d2fc5f8ecd91faaf008e95226cfdf/GetItOnGooglePlay_Badge_Web_color_English.svg"
                      alt="Get it on Google Play"
                      // Using fixed pixel height to ensure exact visual match with App Store badge
                      className="h-[42px] w-auto object-contain"
                      loading="lazy"
                    />
                  </a>

                  {/* App Store Badge (Trigger Modal) */}
                  <button
                    onClick={() => setShowIOSModal(true)}
                    className="inline-block transition-transform duration-300 hover:scale-105 focus:outline-none"
                    aria-label="Download on the App Store (Coming Soon)"
                  >
                    <img
                      src="https://raw.githubusercontent.com/RittikSoni/assets/85ff5ccfae16150071a00584a4dcfccb4715bd9e/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                      alt="Download on the App Store"
                      // Using fixed pixel height to ensure exact visual match with Google Play badge
                      className="h-[42px] w-auto object-contain"
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>

              {/* Center Tagline */}
               <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
               >
                  <h3 className="text-2xl md:text-4xl font-extrabold text-center leading-tight tracking-tight drop-shadow-lg">
                    <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Live Well
                    </span>
                    <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      Live Long
                    </span>
                  </h3>
              </motion.div>

              {/* Connect Section */}
              <div className="text-center md:text-left">
                <h3 className="text-white font-semibold mb-4 text-lg">Connect With Us</h3>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4 flex-wrap">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className={`w-10 h-10 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
                <div className="space-y-2 text-sm text-slate-400">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-4 h-4 text-teal-400" />
                    <a href="mailto:contact.doctorsai@elpisverse.com" className="hover:text-teal-400 transition-colors">
                      contact.doctorsai@elpisverse.com
                    </a>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span>Worldwide</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-8"></div>

            {/* Bottom Section */}
            <div className="text-center space-y-4">
              <p className="text-sm text-slate-500">
                {/* Dynamic year implemented here */}
                © {currentYear} Doctors AI. All rights reserved. Empowering healthier lives through technology.
              </p>

              <div className="max-w-3xl mx-auto">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong className="text-slate-400">Medical Disclaimer:</strong> Doctors AI is designed to provide health information and support medical professionals. 
                  It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider 
                  with any questions you may have regarding a medical condition.
                </p>
              </div>

              {/* Made with love */}
              <p className="text-xs text-slate-600 flex items-center justify-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> for healthcare professionals worldwide
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      </footer>

      {/* iOS Coming Soon Modal */}
      <AnimatePresence>
        {showIOSModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setShowIOSModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md p-8 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)',
              }}
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              {/* Close Button */}
              <button
                onClick={() => setShowIOSModal(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 shadow-inner group">
                  <Smartphone className="w-8 h-8 text-slate-300 group-hover:text-teal-400 transition-colors duration-500" />
                  <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-pulse" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Coming to iOS Soon
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  We are crafting the perfect experience for Apple devices. 
                  The Doctors AI iOS app is currently in the final stages of development.
                </p>

                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 mb-6">
                  <p className="text-sm text-teal-300 font-medium">
                    🚀 Launching Soon!
                  </p>
                </div>

                <button
                  onClick={() => setShowIOSModal(false)}
                  className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Notify me when it's ready
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;