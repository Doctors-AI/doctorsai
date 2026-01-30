'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Download, Star, Shield, Activity, Brain } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-slate-900" id="home">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh Gradients */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3], 
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-teal-500/20 via-blue-500/10 to-purple-500/20 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-blue-600/20 via-cyan-400/10 to-teal-400/20 blur-[100px]"
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
            style={{ y, opacity }}
            className="text-center lg:text-left space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(20,184,166,0.2)]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-200 to-blue-200 bg-clip-text text-transparent">
              #1 AI Healthcare Companion
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Future of Health <br/>
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2">
                  Powered by AI
                </span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 w-full h-3 bg-teal-500/20 -z-10 -skew-x-12"
                />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Experience medical-grade intelligence in your pocket. 
              Doctors AI delivers comprehensive symptom analysis, 
              instant reports, and expert guidance with surgical precision.
            </motion.p>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
                href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(20,184,166,0.5)] overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <Download className="w-5 h-5 text-white relative z-10" />
                <span className="text-white font-bold text-lg relative z-10">Download Now</span>
            </motion.a>
            
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center gap-3 text-white font-semibold hover:bg-white/10 transition-colors"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <Activity className="w-5 h-5 text-teal-400" />
                <span>How it Works</span>
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
          >
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
                 "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
                 "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop",
                 "https://github.com/RittikSoni/assets/blob/main/doctorsai/the-doctor-pradyuman.png?raw=true"
              ].map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden relative z-0 hover:z-10 hover:scale-110 transition-all duration-300">
                  <img src={src} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-400">
                Trusted by <span className="text-white font-medium">10,000+</span> medical professionals
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Mockup Container */}
        <div className="relative perspective-1000">
          <motion.div
            initial={{ opacity: 0, rotateY: -30, x: 100 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
            className="relative z-10 transform-style-3d"
          >
            {/* Main Phone Card */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-[280px] sm:w-[320px] rounded-[3rem] border-8 border-slate-800 bg-slate-900 shadow-2xl overflow-hidden"
            >
              {/* Screen Content */}
              <div className="relative  bg-slate-800 rounded-[2.5rem] overflow-hidden">
                <img 
                    src="https://horizons-cdn.hostinger.com/8c814c1a-b8e5-4271-9ab6-7355081d60fe/6d9edfec93710fd2bc3ba92cc218efa0.jpg" 
                    alt="Doctors AI App Interface" 
                    className="w-full h-full object-cover"
                />
                
                {/* Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-20 -right-8 p-4 rounded-2xl glass-strong border border-white/10 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-500/20">
                  <Brain className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Analysis Speed</p>
                  <p className="text-sm font-bold text-white">0.02s</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-32 -left-8 p-4 rounded-2xl glass-strong border border-white/10 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Verified By</p>
                  <p className="text-sm font-bold text-white">Top Doctors</p>
                  <p className="text-sm font-bold text-white">Medical Students</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Back Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] max-h-[600px] bg-gradient-to-tr from-teal-500/30 to-blue-600/30 blur-[60px] -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;