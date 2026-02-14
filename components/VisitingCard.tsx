"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  ExternalLink,
  Sparkles,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface QRCodeProps {
  value: string;
  size?: number;
}

const QRCode = ({ value, size = 200 }: QRCodeProps) => {
  const encodedValue = encodeURIComponent(value);
  return (
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedValue}&qr_format=svg`}
      alt="QR Code"
      className="w-full h-full"
    />
  );
};

export default function VisitingCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState("");
  const [showContactToast, setShowContactToast] = useState(false);

  // Auto-flip after 1 second to show contact details
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const contactInfo = {
    name: "Rittik Soni",
    title: "Doctors AI",
    designation: "Founder",
    phone1: "+91 8929980600",
    phone2: "+91 8383891067",
    email: "ceo@elpisverse.com",
    website: "https://doctorsai.elpisverse.com",
    location: "Delhi, India",
  };

  const socialLinks = [
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://x.com/Doctors__AI",
      color: "hover:text-sky-400",
      bg: "hover:bg-sky-400/10 hover:border-sky-400/20",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/doctorsaiofficial",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-500/10 hover:border-pink-500/20",
    },
    {
      icon: Youtube,
      label: "YouTube",
      url: "https://www.youtube.com/@DoctorsAIofficial",
      color: "hover:text-red-500",
      bg: "hover:bg-red-500/10 hover:border-red-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/doctors-ai",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/10 hover:border-blue-500/20",
    },
  ];

  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TEL:${contactInfo.phone1}
TEL:${contactInfo.phone2}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
ADR:;;${contactInfo.location}
END:VCARD`;
    return vcard;
  };

  const saveToContacts = () => {
    const vcard = generateVCard();
    const dataUrl =
      "data:text/vcard;charset=utf-8," + encodeURIComponent(vcard);

    const link = document.createElement("a");
    link.href = dataUrl;
    link.setAttribute(
      "download",
      `${contactInfo.name.replace(/\s/g, "_")}.vcf`,
    );
    link.click();

    setShowContactToast(true);
    setTimeout(() => setShowContactToast(false), 3000);
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      console.error("Failed to copy:", text);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-teal-500/20 via-blue-500/10 to-purple-500/20 blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-blue-600/20 via-cyan-400/10 to-teal-400/20 blur-[80px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-200 to-blue-200 bg-clip-text text-transparent">
              {isFlipped ? "Contact Details" : "Professional Card"}
            </span>
          </div>
        </motion.div>

        {/* 3D Flip Card Container */}
        <motion.div
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative w-full h-[500px] sm:h-[600px] cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1200,
            }}
            className="w-full h-full relative"
          >
            {/* FRONT SIDE */}
            <div
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-8 sm:p-10 group">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400" />

                {/* Animated background elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-10 right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
                />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  {/* Name & Title */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <h1 className="text-5xl sm:text-6xl font-bold text-white">
                      {contactInfo.name}
                    </h1>
                    <p className="text-2xl bg-gradient-to-r from-teal-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                      {contactInfo.title}
                    </p>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="h-1 w-24 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto"
                    />
                    <p className="text-sm font-semibold text-teal-300 uppercase tracking-widest">
                      {contactInfo.designation}
                    </p>
                  </motion.div>

                  {/* QR Code - Compact */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-28 h-28 sm:w-32 sm:h-32"
                  >
                    <div className="w-full h-full bg-white p-2 rounded-xl shadow-lg">
                      <QRCode value={contactInfo.website} size={120} />
                    </div>
                  </motion.div>

                  {/* Hint */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 text-sm"
                  >
                    Click to reveal contact details
                  </motion.p>
                </motion.div>
              </div>
            </div>

            {/* BACK SIDE */}
            <div
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-8 sm:p-10 group">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400" />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10 h-full flex flex-col justify-between"
                >
                  {/* Contact Items */}
                  <div className="space-y-4">
                    {/* Phone 1 */}
                    <motion.a
                      href={`tel:${contactInfo.phone1}`}
                      onClick={(e) => e.stopPropagation()}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all group/item"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white shrink-0">
                        <Phone size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400">Call</p>
                        <p className="text-sm font-semibold text-white truncate">
                          {contactInfo.phone1}
                        </p>
                      </div>
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.div
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          `https://wa.me/918383891067?text=Hi%20Rittik!`,
                          "_blank",
                        );
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all cursor-pointer group/item"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shrink-0">
                        <FaWhatsapp size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400">WhatsApp</p>
                        <p className="text-sm font-semibold text-white truncate">
                          {contactInfo.phone2}
                        </p>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.a
                      href={`mailto:${contactInfo.email}`}
                      onClick={(e) => e.stopPropagation()}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all group/item"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shrink-0">
                        <Mail size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="text-sm font-semibold text-white truncate">
                          {contactInfo.email}
                        </p>
                      </div>
                    </motion.a>

                    {/* Website */}
                    <motion.div
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(contactInfo.website, "website");
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all cursor-pointer group/item"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shrink-0">
                        <ExternalLink size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400">Website</p>
                        <p className="text-sm font-semibold text-white truncate">
                          doctors.elpisverse.com
                        </p>
                      </div>
                      {copied === "website" && (
                        <Check size={16} className="text-green-400" />
                      )}
                    </motion.div>

                    {/* Location */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400">Location</p>
                        <p className="text-sm font-semibold text-white truncate">
                          {contactInfo.location}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Save Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      saveToContacts();
                    }}
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Save Contact
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links - Below Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-3 justify-center mt-12"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white shadow-lg transition-all ${social.color} ${social.bg}`}
                title={social.label}
              >
                <IconComponent size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Toast Notification */}
        <AnimatePresence>
          {showContactToast && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              className="fixed top-6 right-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-4 rounded-xl shadow-2xl font-semibold flex items-center gap-2 z-50"
            >
              <Check size={20} />
              Contact saved!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
