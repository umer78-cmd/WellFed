import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils } from 'lucide-react';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [exit, setExit] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const taglines = [
    "Sourcing Ingredients...",
    "Curating Recipes...",
    "Preparing Your Kitchen...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % taglines.length);
    }, 600);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    // 1. Counter Animation (0 -> 100)
    const duration = 2500; // slightly longer for more "banger" feel
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    // 2. Trigger Logo Reveal
    const logoTimer = setTimeout(() => {
        setShowLogo(true);
    }, duration + 200);

    // 3. Trigger Exit
    const exitTimer = setTimeout(() => {
        setExit(true);
        setTimeout(onComplete, 1500);
    }, duration + 1800);

    return () => {
        clearInterval(timer);
        clearTimeout(logoTimer);
        clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Curtain Variants
  const leftCurtain = {
    initial: { x: 0 },
    exit: { x: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }
  };

  const rightCurtain = {
    initial: { x: 0 },
    exit: { x: "100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }
  };

  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
            duration: 0.8,
            ease: "easeOut" 
        }
    },
    exit: {
        y: -100,
        opacity: 0,
        transition: { duration: 0.5 }
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
        {/* Left Curtain Panel */}
        <motion.div 
            variants={leftCurtain}
            initial="initial"
            animate={exit ? "exit" : "initial"}
            className="absolute left-0 top-0 w-1/2 h-full bg-[#1A4D2E] z-10 border-r border-white/5 overflow-hidden"
        >
             {/* Background Texture */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>
             
             {/* Subtle Ring Left */}
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -right-[20%] top-[30%] w-[40vw] h-[40vw] border border-white/5 rounded-full z-0"
             />
        </motion.div>

        {/* Right Curtain Panel */}
        <motion.div 
            variants={rightCurtain}
            initial="initial"
            animate={exit ? "exit" : "initial"}
            className="absolute right-0 top-0 w-1/2 h-full bg-[#1A4D2E] z-10 border-l border-white/5 overflow-hidden"
        >
             {/* Background Texture */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>

             {/* Subtle Ring Right */}
             <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -left-[20%] bottom-[20%] w-[50vw] h-[50vw] border border-white/5 rounded-full z-0"
             />
        </motion.div>

        {/* Content Container (Above Curtains) */}
        <div className="relative z-20 overflow-visible flex flex-col items-center">
             <AnimatePresence mode="wait">
                 {/* 1. Percentage Counter */}
                 {!showLogo && !exit && (
                     <div className="flex flex-col items-center">
                        <motion.div
                            key="counter"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            className="flex items-end mb-4"
                        >
                            <span className="text-[15vw] md:text-[10vw] font-anton text-[#CA673A] leading-none tracking-tighter">
                                {Math.round(count)}
                            </span>
                            <span className="text-2xl md:text-4xl font-anton text-[#F9F7F2] mb-4 md:mb-8 ml-2">
                                %
                            </span>
                        </motion.div>
                        
                        {/* Dynamic Tagline */}
                        <motion.p
                            key={textIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.7, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="font-dm text-[#F9F7F2] tracking-widest uppercase text-xs md:text-sm"
                        >
                            {taglines[textIndex]}
                        </motion.p>
                     </div>
                 )}

                 {/* 2. Brand Reveal */}
                 {showLogo && !exit && (
                     <motion.div
                        key="logo"
                        className="flex flex-col items-center"
                     >
                         {/* Logo Icon */}
                         <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-4 md:mb-8 p-4 rounded-full border border-[#CA673A]/30 bg-[#CA673A]/10 text-[#CA673A]"
                         >
                             <Utensils size={48} className="md:w-20 md:h-20" />
                         </motion.div>

                         {/* Text */}
                         <div className="flex overflow-hidden relative">
                             {"WellFed".split("").map((char, i) => (
                                 <motion.span
                                    key={i}
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    custom={i}
                                    transition={{ delay: i * 0.05 + 0.3 }} // Added slight delay for logo
                                    className="text-[12vw] md:text-[8vw] font-anton text-[#F9F7F2] leading-none tracking-tight"
                                 >
                                     {char}
                                 </motion.span>
                             ))}
                         </div>
                     </motion.div>
                 )}
             </AnimatePresence>
        </div>
    </div>
  );
};

export default Preloader;
