import { motion, AnimatePresence } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { Flower2 } from 'lucide-react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 360, opacity: 1 }}
        transition={{ 
          opacity: { duration: 0.5 },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { duration: 1 }
        }}
        className="relative mb-12"
      >
        <Flower2 className="w-20 h-20 text-gold" />
        <motion.div 
          className="absolute inset-0 bg-gold/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
      
      <div className="w-full max-w-[200px] h-[2px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-warm-pink to-soft-purple"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.p
        className="mt-6 font-serif italic text-white/40 text-xs tracking-[0.4em] uppercase"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Hetal Chauhan • Tribute
      </motion.p>
    </motion.div>
  );
};
