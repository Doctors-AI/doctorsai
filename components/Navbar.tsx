'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '#home' },
  // { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Ambassador', href: '#ambassador' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle mobile navigation clicks
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Always prevent default to handle control manually
    setIsMobileMenuOpen(false);

    // If we are on the home page and it's a hash link, scroll manually
    if (isHomePage && href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Add a small delay to allow the menu to close and state to settle
        setTimeout(() => {
            const headerOffset = 80; // Approximate header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
        }, 100);
      }
    } else if (!isHomePage && href.startsWith('#')) {
       // If not on home page, navigate to home with hash
       window.location.href = `/${href}`;
    }
  };

  const getHref = (href: string) => {
    if (isHomePage) return href;
    return `/${href}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-3' 
          : 'py-6'
      }`}
    >
      {/* Liquid Glass Background Container - Dynamic width on scroll */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-in-out -z-10 ${
          isScrolled 
            ? 'bg-slate-900/70 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-teal-900/10' 
            : 'bg-transparent'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href={isHomePage ? "#home" : "/"}
            className="flex items-center gap-3 group"
          >
            <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
              isScrolled ? 'w-10 h-10 p-1.5' : 'w-12 h-12 glass p-2'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="https://github.com/RittikSoni/assets/blob/main/doctorsai/app_logo-doctors_ai.png?raw=true"
                alt="Doctors AI"
                width={48}
                height={48}
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <span className={`font-display font-bold surgical-gradient-text hidden sm:block transition-all duration-300 ${
              isScrolled ? 'text-lg' : 'text-xl'
            }`}>
              Doctors AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
              isScrolled ? 'bg-white/5 border border-white/5 backdrop-blur-md' : ''
            }`}>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={getHref(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white relative group transition-colors duration-300"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="navbar-hover"
                  />
                </motion.a>
              ))}
            </div>
            
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`ml-4 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] ${
                isScrolled 
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-sm' 
                  : 'bg-surgical-gradient'
              }`}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button - Enhanced Glass */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isMobileMenuOpen ? 'bg-white/10 text-white' : 'glass text-gray-300 hover:text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced Liquid Effect */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, height: 'auto', backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-b border-white/5 bg-slate-900/95 shadow-2xl relative z-40"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={getHref(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    {item.label}
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100" />
                  </div>
                </motion.a>
              ))}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="block w-full mt-6 px-6 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 font-semibold text-center text-white shadow-lg shadow-teal-500/20"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
