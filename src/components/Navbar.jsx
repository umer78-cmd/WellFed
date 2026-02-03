import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Instagram, Twitter, Download } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Chef', href: '#chef' },
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Stories', href: '#stories' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A4D2E]/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo and Socials */}
        <div className="flex items-center gap-6">
             <a href="#" className="flex items-center">
                <Logo className={`transition-all duration-500 ease-in-out ${scrolled ? 'h-16' : 'h-28'}`} />
             </a>
             <div className="hidden md:flex gap-2">
                <a href="#" className={`w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}>
                    <Instagram size={18} />
                </a>
                <a href="#" className={`w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}>
                    <Twitter size={18} /> {/* Using Twitter as placeholder for generic social if TikTok not available, or I could use a custom SVG for Tiktok */}
                </a>
            </div>
        </div>

        {/* Center Nav Pills */}
        <div className="hidden lg:flex items-center gap-1 bg-black/20 rounded-full p-1 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-bold text-white hover:bg-white hover:text-primary transition-all uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4">
             <button
                className="hidden md:flex items-center gap-2 bg-white text-primary px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-lg transition-all"
             >
                <Download size={18} />
                Download Our App
             </button>
             
             <button
                className={`md:hidden bg-white/20 p-2 rounded-full ${scrolled ? 'text-white' : 'text-primary'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#97A97C] absolute top-full left-0 right-0 p-6 shadow-xl overflow-hidden"
          >
             <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="text-primary font-anton text-2xl uppercase" onClick={() => setMobileMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}
                <button className="bg-primary text-white w-full py-4 rounded-xl font-bold uppercase mt-4">
                    Download App
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
