import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react';
import { ChevronDown, Flower2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import confetti from 'canvas-confetti';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleFlowerClick = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      colors: ['#fbbf24', '#ec4899', '#a855f7'],
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center p-6 md:p-20 overflow-hidden">
      <motion.div 
        style={{ y, opacity }} 
        className="z-10 w-full max-w-5xl h-[75vh] glass-premium rounded-[60px] flex flex-col items-center justify-center text-center relative overflow-hidden px-8"
      >
        {/* Decorative particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full blur-[2px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-gold rounded-full blur-[3px] opacity-30" />
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-warm-pink rounded-full blur-[1px] opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div 
            className="relative cursor-pointer"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
            onClick={handleFlowerClick}
          >
            <Flower2 className="w-16 h-16 text-gold fill-gold/10" />
            <motion.div
              className="absolute inset-0 bg-gold/40 blur-2xl rounded-full"
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1.5, delay: 0.3 }}
           className="max-w-2xl"
        >
           <h2 className="text-sm md:text-base font-light tracking-[0.4em] uppercase text-white/50 mb-4 px-4 overflow-hidden italic font-serif">
              “Some heroes don’t wear crowns. <br className="hidden md:block" />
              They quietly carry entire worlds.”
           </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-5xl md:text-8xl font-serif italic leading-tight mb-6 text-gradient"
        >
          Hetal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-xl font-light tracking-[0.5em] uppercase text-gold/80"
        >
          Happy Mother’s Day ❤️
        </motion.p>
        
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-px bg-gradient-to-b from-gold to-transparent mt-12 mb-0" 
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/30">Explore the Journey</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};
