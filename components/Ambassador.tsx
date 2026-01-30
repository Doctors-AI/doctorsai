'use client'

import { motion } from 'framer-motion'
import { Award, Target, TrendingUp, Heart, MessageCircle, Mail } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: "Exclusive Recognition",
    description: "Get featured on our platform and social media as an official Doctors AI Ambassador."
  },
  {
    icon: Target,
    title: "Early Access",
    description: "Be the first to test new features and provide feedback that shapes the future of medical AI."
  },
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description: "Expand your network and influence within the global medical AI community."
  },
  {
    icon: Heart,
    title: "Impact Healthcare",
    description: "Help fellow healthcare professionals discover tools that improve patient care and efficiency."
  }
]

export default function Ambassador() {
  return (
    <section id="ambassador" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-surgical-blue/10 via-transparent to-surgical-teal/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-surgical-gradient opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="glass rounded-full px-6 py-2 border border-surgical-teal/30">
              <span className="surgical-gradient-text font-semibold">Join the Movement</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="surgical-gradient-text">Doctors AI</span>
            <br />
            <span className="text-white">Ambassador Program</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Become a champion of AI-powered healthcare. Help shape the future of medical practice 
            while earning exclusive benefits and recognition.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:glow-surgical border border-white/5 hover:border-surgical-teal/30 group"
            >
              <div className="w-14 h-14 rounded-xl bg-surgical-gradient/10 flex items-center justify-center mb-6 group-hover:bg-surgical-gradient/20 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-surgical-mint" />
              </div>
              <h3 className="text-lg font-display font-bold mb-3 text-white group-hover:text-surgical-mint transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Ambassador Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-strong rounded-3xl p-12 border border-surgical-teal/20 relative overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 animated-gradient opacity-5"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-display font-bold mb-6 text-white">
              Ready to Make an Impact?
            </h3>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Whether you're a practicing physician, medical student, or healthcare influencer, 
              we want you to be part of our mission to revolutionize medical practice with AI.
            </p>

            {/* Requirements */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold surgical-gradient-text mb-2">Active</div>
                <div className="text-sm text-gray-400">Healthcare Professional</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold surgical-gradient-text mb-2">Passionate</div>
                <div className="text-sm text-gray-400">About Medical AI</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold surgical-gradient-text mb-2">Engaged</div>
                <div className="text-sm text-gray-400">Community Member</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/BRv9ZfjaD2"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-xl bg-surgical-gradient font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-surgical-teal/50 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Join Our Discord
              </a>
              
              <a
                href="mailto:contact@doctorsai.com"
                className="group px-8 py-4 rounded-xl glass border border-surgical-teal/50 font-semibold hover:scale-105 transition-all duration-300 hover:border-surgical-teal hover:glow-surgical flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Apply via Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
