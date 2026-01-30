'use client'

import { motion } from 'framer-motion'
import { Activity, Shield, Zap, Users, CheckCircle2, ArrowRight } from 'lucide-react'

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

const stats = [
  { label: "Active Users", value: "50K+", trend: "+12% this month" },
  { label: "User Rating", value: "4.8★", trend: "from 10k reviews" },
  { label: "AI Assessments", value: "1M+", trend: "since launch" },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-slate-900/50">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left content - 5 cols */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                About Doctors AI
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                Redefining <br />
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Medical Intelligence
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Doctors AI is not just another medical app—it's a comprehensive intelligent platform 
                  meticulously designed for healthcare professionals who demand <strong className="text-white">precision, speed, and 
                  evidence-based insights.</strong>
                </p>

                <p>
                  From differential diagnosis to clinical documentation, every feature is engineered with 
                  surgical precision to enhance your practice and improve patient outcomes.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4">
                 {['Trusted by 50,000+ doctors', 'HIPAA compliant security', 'Evidence-based algorithms'].map((item, i) => (
                   <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3 text-slate-300"
                   >
                     <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                     <span>{item}</span>
                   </motion.div>
                 ))}
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                className="mt-10 flex items-center gap-2 text-teal-400 font-semibold group"
              >
                Learn about our technology
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right content - 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-300">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-2">{stat.trend}</div>
                </div>
              ))}
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-teal-500/20">
                    <value.icon className="w-7 h-7 text-teal-300" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-8 md:p-10 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-90" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-white/20">
                    <Zap className="w-5 h-5 text-white" />
                  </span>
                  Our Mission
                </h3>
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  "To empower every healthcare professional with AI technology that enhances clinical 
                  decision-making, streamlines documentation, and ultimately improves patient care."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
