'use client'

import { motion } from 'framer-motion'
import { Activity, Shield, Zap, Users } from 'lucide-react'

const values = [
  {
    icon: Activity,
    title: "Clinical Excellence",
    description: "Medical-grade AI powered by cutting-edge machine learning, validated against industry benchmarks."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "HIPAA-compliant security ensuring your patient data remains confidential and protected."
  },
  {
    icon: Zap,
    title: "Instant Intelligence",
    description: "Real-time AI processing delivering diagnostic insights and clinical support in seconds."
  },
  {
    icon: Users,
    title: "Global Community",
    description: "Join thousands of healthcare professionals advancing medicine through AI collaboration."
  }
]

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surgical-blue/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-white">Redefining</span>
              <br />
              <span className="surgical-gradient-text">Medical Intelligence</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Doctors AI is not just another medical app—it's a comprehensive AI-powered platform 
              meticulously designed for healthcare professionals who demand precision, speed, and 
              evidence-based insights.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From differential diagnosis to clinical documentation, from medical research to 
              global collaboration, every feature is engineered with surgical precision to enhance 
              your practice and improve patient outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="glass rounded-2xl px-6 py-3">
                <div className="text-2xl font-bold surgical-gradient-text">50K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="glass rounded-2xl px-6 py-3">
                <div className="text-2xl font-bold surgical-gradient-text">4.5★</div>
                <div className="text-sm text-gray-400">User Rating</div>
              </div>
              <div className="glass rounded-2xl px-6 py-3">
                <div className="text-2xl font-bold surgical-gradient-text">100K+</div>
                <div className="text-sm text-gray-400">AI Assessments</div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:glow-surgical border border-white/5 hover:border-surgical-teal/30 group"
              >
                <div className="w-12 h-12 rounded-xl bg-surgical-gradient/10 flex items-center justify-center mb-4 group-hover:bg-surgical-gradient/20 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-surgical-mint" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2 text-white group-hover:text-surgical-mint transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 glass-strong rounded-3xl p-12 border border-surgical-teal/20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 surgical-gradient-text">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To empower every healthcare professional with AI technology that enhances clinical 
              decision-making, streamlines documentation, and ultimately improves patient care. 
              We're building the future of medicine—one intelligent feature at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
