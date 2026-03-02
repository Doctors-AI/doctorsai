"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone } from "lucide-react";

export default function DownloadModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-download", handleOpen);
    return () => window.removeEventListener("open-download", handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                <Smartphone className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Download Doctors AI</h3>
              <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                Choose your platform to get the ultimate AI healthcare companion.
              </p>

              <div className="grid gap-4">
                <a
                  href="https://apps.apple.com/in/app/doctors-ai/id6758019612"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 384 512" fill="currentColor">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-slate-400 font-medium mb-0.5">Download on the</div>
                      <div className="text-lg font-bold text-white leading-tight">App Store</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-teal-400" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-slate-400 font-medium mb-0.5">GET IT ON</div>
                      <div className="text-lg font-bold text-white leading-tight">Google Play</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all relative z-10">
                    <svg className="w-4 h-4 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
