import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export const FinalTribute = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  const handleCelebrate = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FF69B4', '#9370DB'],
    });
  };

  return (
    <section className="relative h-[150vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Star Field */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: star.delay,
            }}
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 z-0">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px w-20 bg-gradient-to-r from-transparent via-white to-transparent blur-[1px]"
            initial={{ left: '-20%', top: `${20 * i}%`, rotate: -25, opacity: 0 }}
            animate={{ left: '120%', top: `${20 * i + 30}%`, opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 4,
              repeatDelay: 8,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl pt-[20vh]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-5xl font-serif italic mb-10 text-white/90 leading-tight"
        >
          “No matter where life takes me, <br className="hidden md:block" />
          your prayers will always arrive first.”
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
           <span className="text-xs font-bold uppercase tracking-[0.5em] text-gold mb-4">Thank You, Hetal Chauhan ❤️</span>
           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCelebrate}
              className="group relative px-12 py-5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
           >
              Send Eternal Love
           </motion.button>
        </motion.div>
      </div>

      <footer className="absolute bottom-10 left-0 right-0 px-10 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 z-10">
        <div className="text-[10px] font-medium tracking-[0.2em] opacity-40 uppercase">Made with love</div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest opacity-60">Piano instrumental playing</span>
          </div>
        </div>
      </footer>
    </section>
  );
};
