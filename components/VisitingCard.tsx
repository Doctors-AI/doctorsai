"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Heart,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

interface QRCodeProps {
  value: string;
  size?: number;
}

// Simple QR code using QR Server API
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
  const [copied, setCopied] = useState("");
  const [showContactToast, setShowContactToast] = useState(false);

  const contactInfo = {
    name: "Rittik Soni",
    title: "Doctors AI",
    designation: "Founder",
    phone1: "+91 8929980600",
    phone2: "+91 8383891067",
    website: "https://doctors.elpisverse.com",
    location: "Delhi, India",
    email: "contact@doctorsai.com",
    vcard_url: "https://doctors.elpisverse.com",
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

  // Generate vCard
  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TEL:${contactInfo.phone1}
TEL:${contactInfo.phone2}
URL:${contactInfo.website}
ADR:;;${contactInfo.location}
END:VCARD`;
    return vcard;
  };

  // Save to Contacts (opens native contacts app instead of downloading)
  const saveToContacts = () => {
    const vcard = generateVCard();
    const dataUrl =
      "data:text/vcard;charset=utf-8," + encodeURIComponent(vcard);

    // Try to open with the system's contact handler
    // On mobile, this will open the native contacts app
    // On desktop, it might open with the configured vCard application
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

  // Copy to clipboard
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
    <div className="min-h-screen bg-slate-900 p-4 sm:p-6 lg:p-8 flex items-center justify-center overflow-hidden relative">
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
        className="relative z-10 w-full max-w-3xl"
      >
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(20,184,166,0.15)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-200 to-blue-200 bg-clip-text text-transparent">
              Digital Professional Card
            </span>
          </div>
        </motion.div>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="group relative"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Card Content */}
          <div className="relative bg-slate-800/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              {/* Left Column - Main Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Name Section */}
                <div className="space-y-3">
                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl sm:text-5xl font-bold text-white"
                  >
                    Rittik Soni
                  </motion.h1>
                  <div className="space-y-2">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg sm:text-xl bg-gradient-to-r from-teal-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-semibold"
                    >
                      Doctors AI
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.55 }}
                      className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10"
                    >
                      <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">
                        {contactInfo.designation}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full origin-left"
                />

                {/* Contact Details */}
                <div className="space-y-4">
                  {/* Phone 1 - Call Button */}
                  <motion.a
                    href={`tel:${contactInfo.phone1}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 cursor-pointer group/item bg-white/5 hover:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Phone size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Primary Phone (Call)
                      </p>
                      <p className="text-lg font-semibold text-white group-hover/item:text-teal-300 transition-colors truncate">
                        {contactInfo.phone1}
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                    >
                      <ExternalLink
                        size={20}
                        className="text-gray-400 group-hover/item:text-teal-400 shrink-0"
                      />
                    </motion.div>
                  </motion.a>

                  {/* Phone 2 with WhatsApp */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 cursor-pointer group/item bg-white/5 hover:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300"
                    onClick={() =>
                      window.open(
                        `https://wa.me/918383891067?text=Hi%20Rittik!`,
                        "_blank",
                      )
                    }
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shrink-0 shadow-lg">
                      <FaWhatsapp size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Chat on WhatsApp
                      </p>
                      <p className="text-lg font-semibold text-white group-hover/item:text-green-300 transition-colors truncate">
                        {contactInfo.phone2}
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                    >
                      <ExternalLink
                        size={20}
                        className="text-gray-400 group-hover/item:text-green-400 shrink-0"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Website */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 cursor-pointer group/item bg-white/5 hover:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300"
                    onClick={() =>
                      copyToClipboard(contactInfo.website, "website")
                    }
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <ExternalLink size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Website
                      </p>
                      <p className="text-lg font-semibold text-white group-hover/item:text-teal-300 transition-colors truncate">
                        doctors.elpisverse.com
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: copied === "website" ? 1 : 0,
                        scale: copied === "website" ? 1 : 0,
                      }}
                    >
                      {copied === "website" ? (
                        <Check
                          size={20}
                          className="text-green-400 flex-shrink-0"
                        />
                      ) : (
                        <Copy
                          size={20}
                          className="text-gray-400 group-hover/item:text-teal-400 flex-shrink-0"
                        />
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex items-center gap-4 bg-white/5 px-5 py-4 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <MapPin size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Location
                      </p>
                      <p className="text-lg font-semibold text-white truncate">
                        {contactInfo.location}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - QR Code */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1 flex flex-col items-center justify-center space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="w-full aspect-square"
                >
                  <div className="w-full h-full bg-white p-4 rounded-2xl shadow-2xl border border-white/20 flex items-center justify-center hover:shadow-[0_20px_40px_rgba(20,184,166,0.2)] transition-shadow duration-300">
                    <QRCode value={contactInfo.website} size={220} />
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-sm text-gray-400 text-center font-medium"
                >
                  ✨ Scan to visit
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full glass border border-white/20 flex items-center justify-center text-white shadow-lg transition-all duration-300 ${social.color} ${social.bg}`}
                title={social.label}
              >
                <IconComponent size={24} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 print:hidden"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={saveToContacts}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-300"
          >
            <Download size={20} />
            Save Contact
          </motion.button>
        </motion.div>

        {/* Toast Notification */}
        <AnimatePresence>
          {showContactToast && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              className="fixed top-6 right-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-4 rounded-xl shadow-2xl font-semibold flex items-center gap-2"
            >
              <Check size={20} />
              Contact saved!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white;
          }
          body > * {
            background: white !important;
            color: black !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
