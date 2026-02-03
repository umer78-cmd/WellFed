import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import logo from '../assets/wellfed-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1A4D2E] text-[#F9F7F2] pt-32 pb-12 rounded-t-[3rem] mt-12 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        {/* Rotating Rings */}
        <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
           className="absolute -right-[10%] -top-[10%] w-[40vw] h-[40vw] border-[1px] border-white/5 rounded-full pointer-events-none"
       />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
            
            <div className="md:col-span-12 md:pr-12 text-center md:text-left">
                <img src={logo} alt="WellFed" className="h-60 object-contain mb-8 mx-auto md:mx-0 rounded-2xl" />
                <h4 className="font-dm text-2xl mb-8">Join the table. Get weekly recipes and kitchen hacks.</h4>
                <form className="relative max-w-md mx-auto md:mx-0">
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        className="w-full bg-white/5 border-b border-white/20 px-0 py-4 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors text-lg"
                    />
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 text-accent hover:text-white transition-colors">
                        <ArrowUpRight size={28} />
                    </button>
                </form>
            </div>

            {/* Links */}
            <div className="md:col-span-2 md:col-start-7 text-center md:text-left">
                <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Product</h4>
                <ul className="space-y-4 text-white/70">
                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Chef Stories</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                </ul>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
                <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Company</h4>
                <ul className="space-y-4 text-white/70">
                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
                <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Social</h4>
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <a href="#" className="flex items-center gap-2 hover:text-white transition-colors text-white/70"><Instagram size={18} /> Instagram</a>
                    <a href="#" className="flex items-center gap-2 hover:text-white transition-colors text-white/70"><Twitter size={18} /> Twitter</a>
                    <a href="#" className="flex items-center gap-2 hover:text-white transition-colors text-white/70"><Facebook size={18} /> Facebook</a>
                </div>
            </div>
        </div>

        {/* Giant Footer Logo */}
        <div className="border-t border-white/10 pt-20">
             <h1 className="text-[25vw] leading-[0.8] font-anton text-center text-white/10 select-none pointer-events-none">
                WellFed
             </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40 mt-12">
            <p>&copy; 2024 WellFed Inc.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
