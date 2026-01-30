'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Target, TrendingUp, Heart, MessageCircle, Mail, ArrowRight, ExternalLink } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: "Exclusive Recognition",
    description: "Get featured on our platform and social media as an official Doctors AI Ambassador.",
    color: "from-amber-400 to-orange-500"
  },
  {
    icon: Target,
    title: "Early Access",
    description: "Be the first to test new features and provide feedback that shapes the future of medical AI.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description: "Expand your network and influence within the global medical AI community.",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: Heart,
    title: "Impact Healthcare",
    description: "Help fellow healthcare professionals discover tools that improve patient care and efficiency.",
    color: "from-rose-400 to-pink-500"
  }
]

export default function Ambassador() {
  return (
    <section id="ambassador" className="relative py-32 overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md mb-8 group cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-200 to-teal-400 bg-clip-text text-transparent group-hover:text-teal-300 transition-colors">
              Join the Movement
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight text-white leading-[1.1]">
            Doctors AI <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Ambassador Program
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Become a champion of AI-powered healthcare. Help shape the future of medical practice 
            while earning exclusive benefits and recognition.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} bg-opacity-10 flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                {benefit.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Glowing Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-blue-500 to-violet-500 opacity-30 blur-lg" />
          
          <div className="relative bg-slate-900/90 backdrop-blur-2xl p-12 md:p-16 border border-white/10 rounded-[2.5rem]">
             {/* Background Mesh inside card */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
             </div>

             <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Make an Impact?
                </h3>
            
                <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Whether you're a practicing physician, medical student, or healthcare influencer, 
                  we want you to be part of our mission to revolutionize medical practice with AI.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                   <motion.a
                     href="https://forms.gle/WHnWJaaCtNbcRFgm7"
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 font-bold text-white shadow-lg shadow-teal-500/25 flex items-center gap-3 group min-w-[200px] justify-center"
                   >
                     <span>Apply Now</span>
                     <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </motion.a>
                   
                   <motion.a
                     href="mailto:contact.doctorsai@elpisverse.com"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm font-semibold text-white hover:bg-white/10 transition-colors flex items-center gap-3 min-w-[200px] justify-center"
                   >
                     <Mail className="w-5 h-5" />
                     <span>Contact Us</span>
                   </motion.a>
                </div>
                
                <p className="mt-8 text-sm text-slate-500">
                   Questions? Email us at <a href="mailto:contact.doctorsai@elpisverse.com" className="text-teal-400 hover:text-teal-300 transition-colors">contact.doctorsai@elpisverse.com</a>
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
