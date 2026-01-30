
"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, FileText, Globe, FileEdit, Podcast, BookOpen, Sparkles, MessageSquare, X, Maximize2, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Advanced Symptom Assessment",
    description: "State-of-the-art AI symptom analysis providing medical-grade assessments comparable to industry leaders like Ada Health.",
    image: "https://github.com/RittikSoni/assets/blob/main/doctorsai/doctors-ai-symptom-assesment.jpg?raw=true"
  },
  {
    icon: MessageSquare,
    title: "Advanced Medical Chat",
    description: "Engage with sophisticated AI-powered medical conversations for clinical decision support, differential diagnosis, and evidence-based guidance.",
    image: "https://github.com/RittikSoni/assets/blob/main/doctorsai/doctors-ai-advance-medical-chat.jpg?raw=true"
  },
  {
    icon: FileText,
    title: "AI-Powered Medical Reports",
    description: "Effortlessly generate SOAP notes, discharge summaries, lab reports, surgery reports, and custom templates with advanced AI.",
    image: "https://github.com/RittikSoni/assets/blob/main/doctorsai/doctors-ai-medical-reports.jpg?raw=true"
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Medical Journals",
    description: "Access and analyze medical journals and research papers with AI-powered insights, summaries, and evidence-based recommendations.",
    image: "https://github.com/RittikSoni/assets/blob/main/doctorsai/doctors-ai-medical-journals.jpg?raw=true"
  },
  {
    icon: Podcast,
    title: "Medical Podcasts",
    description: "Stay updated with curated evidence-first medical podcasts covering the latest clinical insights, case studies, and healthcare innovations.",
    image: "https://github.com/RittikSoni/assets/blob/main/doctorsai/doctors-ai-medical-podcasts-evidence-first.jpg?raw=true"
  },
  {
    icon: Globe,
    title: "Global Doctor Community",
    description: "Connect globally with healthcare professionals through secure private messaging and public medical community channels worldwide.",
    image: "https://github.com/RittikSoni/assets/blob/main/doctorsai/doctors-ai-world-chat.jpg?raw=true"
  },
  {
    icon: FileEdit,
    title: "Smart Clinical Notes",
    description: "Streamline your workflow with automated clinical note-taking that captures and structures key medical details instantly.",
    image: "https://github.com/RittikSoni/assets/blob/main/doctorsai/doctors-ai-clinc-notes.jpg?raw=true"
  },
   {
    icon: GraduationCap,
    title: "AI-Powered Anki-Style Flashcards",
    description: "Auto-generate high-quality Q/A, MCQ, true/false, basic and cloze cards from AI, articles, notes, or cases. Supports text, audio, image & video flashcards, with spaced-repetition scheduling, customizable decks & templates, progress analytics, offline study, and easy sharing with friends.",
    image: "https://raw.githubusercontent.com/RittikSoni/assets/refs/heads/main/doctorsai/ai-powered-anki-style-flashcards.png"
  },
  {
    icon: Sparkles,
    title: "And Many More...",
    description: "Discover a constantly expanding suite of innovative tools designed for modern healthcare professionals.",
    image: null
  }
];

const Features = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  const openLightbox = (image: string, title: string) => {
    if (image) {
      setLightboxImage(image);
      setLightboxTitle(title);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle('');
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Cinematic Video Section */}
    <section className="relative py-20 px-4 overflow-hidden" id="features">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.span 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 text-teal-300 text-sm font-medium mb-4"
            >
              ✨ See Doctors AI in Action
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Trusted by Doctors, Medical Professionals
              <span className="block bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                & Medical Students Worldwide
              </span>
            </h2>
          </motion.div>

          {/* Theatre Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Ambient Glow Effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            <div className="absolute -inset-2 bg-gradient-to-br from-teal-400/10 to-blue-500/10 rounded-2xl blur-2xl animate-pulse" />
            
            {/* Glass Container */}
            <div className="relative rounded-2xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
              {/* Theatre Black Bars - Top */}
              <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
              
              {/* Theatre Black Bars - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
              
              {/* Video Wrapper */}
              <div className="relative aspect-video bg-black/50">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/UQQgPLd2NMg?autoplay=1&mute=1&loop=1&playlist=UQQgPLd2NMg&controls=1&modestbranding=1&rel=0&showinfo=0"
                  title="Doctors AI - Healthcare Technology Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Particles Effect */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-teal-400/40 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
            <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-teal-300/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-slate-400 mt-8 max-w-2xl mx-auto"
          >
            Watch how Doctors AI empowers healthcare professionals and medical students with intelligent automation, 
            evidence-based clinical insights, and seamless collaboration tools for superior patient care.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 text-teal-300 text-sm font-medium mb-4">
              Doctors AI Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Doctors AI Features:
              <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Everything for Better Healthcare
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Discover the powerful capabilities of Doctors AI, designed to revolutionize how you manage your health diagnosis, records, and consultations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                itemScope
                itemType="https://schema.org/SoftwareFeature"
              >
                {/* Image Section */}
                {feature.image && (
                  <button
                    onClick={() => openLightbox(feature.image, feature.title)}
                    className="relative h-48 overflow-hidden bg-slate-900/50 w-full block cursor-pointer group/image"
                    aria-label={`View ${feature.title} screenshot`}
                  >
                    <img 
                      src={feature.image} 
                      alt={`${feature.title} - Doctors AI feature screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    {/* Expand icon on hover */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4 text-teal-400" />
                    </div>
                    
                    {/* Icon overlay on image */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/80 to-blue-500/80 backdrop-blur-sm flex items-center justify-center border border-teal-400/30"
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </button>
                )}

                {/* Content Section */}
                <div className="relative p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                  
                  {!feature.image && (
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center mb-6 border border-teal-400/20"
                    >
                      <feature.icon className="w-7 h-7 text-teal-400" />
                    </motion.div>
                  )}

                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-3" itemProp="name">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm" itemProp="description">
                      {feature.description}
                    </p>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-slate-700/80 transition-colors"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Title */}
              <div className="absolute -top-12 left-0 text-white font-semibold text-lg">
                {lightboxTitle}
              </div>

              {/* Image */}
              <img
                src={lightboxImage}
                alt={`${lightboxTitle} - Full size view`}
                className="w-full h-full object-contain rounded-lg"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Features;