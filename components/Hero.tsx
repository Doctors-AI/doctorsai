'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Heart, Zap, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Badge */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="inline-flex items-center gap-2 px-5 py-2.5 mt-10 rounded-full backdrop-blur-xl border border-teal-400/30 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-teal-500/10 mb-6 md:mb-8"
  style={{
    boxShadow: '0 0 30px rgba(45,212,191,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
  }}
>
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  >
    <Sparkles className="w-4 h-4 text-teal-400" />
  </motion.div>

  <span className="text-sm font-semibold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
    AI-Powered Healthcare
  </span>

  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
    ))}
  </div>
</motion.div>



          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Doctors AI: Your Health,
            <span className="block bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligently Managed
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed"
          >
            Experience the future of healthcare with <strong>Doctors AI</strong>. Get instant health insights, professional symptom analysis, and expert medical recommendations powered by advanced artificial intelligence.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col gap-4 items-center lg:items-start"
          >
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg text-white overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(45,212,191,1) 0%, rgba(59,130,246,1) 100%)',
                boxShadow: '0 20px 60px rgba(45,212,191,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Download className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Download Now</span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.a>

               <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col items-center lg:items-start gap-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=faces"
                    alt="Doctor"
                    className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=faces"
                    alt="Surgeon"
                    className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=faces"
                    alt="Medical professional"
                    className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=faces"
                    alt="Medical student"
                    className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                    loading="lazy"
                  />
                  <img
                    src="https://github.com/RittikSoni/assets/blob/main/doctorsai/the-doctor-pradyuman.png?raw=true"
                    alt="Healthcare professional"
                    className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-400">
               {/* Option 1 — simple & global */}
Trusted and recommended by <span className="font-semibold text-slate-300">healthcare professionals and medical students worldwide</span>

              </p>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-4 text-sm text-slate-400"
          >
            Available now for Android devices
          </motion.p>
        </motion.div>

        {/* Right content - App mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative">
            {/* Glassmorphism card container */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              <img 
                src="https://horizons-cdn.hostinger.com/8c814c1a-b8e5-4271-9ab6-7355081d60fe/6d9edfec93710fd2bc3ba92cc218efa0.jpg" 
                alt="Doctors AI mobile application interface displaying AI symptom checker and health reports on a smartphone"
                className="w-full h-auto rounded-3xl"
              />
              
              {/* Decorative glow effects */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
            </motion.div>

            {/* Floating accent elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(45,212,191,0.2) 0%, rgba(59,130,246,0.2) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;