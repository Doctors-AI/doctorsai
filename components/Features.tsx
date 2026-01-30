"use client"
import React, { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Brain, FileText, Globe, FileEdit, Podcast, BookOpen, Sparkles, MessageSquare, X, Maximize2, GraduationCap, Play } from 'lucide-react';

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
    title: "AI-Powered Flashcards",
    description: "Auto-generate high-quality Q/A, MCQ, and cloze cards from AI or notes. Supports spaced-repetition scheduling and offline study.",
    image: "https://raw.githubusercontent.com/RittikSoni/assets/refs/heads/main/doctorsai/ai-powered-anki-style-flashcards.png"
  },
  {
    icon: Sparkles,
    title: "And Many More...",
    description: "Discover a constantly expanding suite of innovative tools designed for modern healthcare professionals.",
    image: null
  }
];

function FeatureCard({ feature, index, openLightbox }: { feature: any, index: number, openLightbox: (img: string, title: string) => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl border border-white/10 bg-slate-900/50 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 191, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col">
          {feature.image && (
            <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => openLightbox(feature.image, feature.title)}>
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          <div className="p-8 flex-1 flex flex-col relative z-20">
             {!feature.image && (
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 border border-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-teal-400" />
                </div>
             )}
             {feature.image && (
                 <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-slate-900 border border-teal-500/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <feature.icon className="w-6 h-6 text-teal-400" />
                 </div>
             )}

             <h3 className={`text-xl font-bold text-white mb-3 ${feature.image ? 'mt-4' : ''} group-hover:text-teal-400 transition-colors`}>
               {feature.title}
             </h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               {feature.description}
             </p>
          </div>
      </div>
    </motion.div>
  );
}

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
      <section className="relative py-24 px-4 overflow-hidden bg-slate-950" id="features">
         {/* Background Mesh */}
         <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
         </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md mb-6"
             >
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-semibold text-teal-300">Features</span>
             </motion.div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
               Everything you need for <br/>
               <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                 Better Healthcare
               </span>
             </h2>
             <p className="text-lg text-slate-400 max-w-2xl mx-auto">
               Discover the powerful capabilities of Doctors AI, designed to revolutionize how you manage your health diagnosis, records, and consultations.
             </p>
          </div>

          {/* Video Section with 3D Float */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-32 group"
          >
             <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <div className="aspect-video relative">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/UQQgPLd2NMg?autoplay=1&mute=1&loop=1&playlist=UQQgPLd2NMg&controls=1&modestbranding=1&rel=0&showinfo=0"
                        title="Doctors AI Demo"
                        allowFullScreen
                        loading="lazy"
                    />
                    {/* Overlay for inactive state if needed, simplified here */}
                </div>
                
                {/* Glass Bar at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
             </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature} 
                index={index} 
                openLightbox={openLightbox} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-14 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={lightboxImage}
                alt={lightboxTitle}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-bold">{lightboxTitle}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Features;