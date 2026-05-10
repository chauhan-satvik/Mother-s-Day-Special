import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export const BackgroundEffects = () => {
  const [dots, setDots] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-warm-pink/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-soft-purple/20 rounded-full blur-[120px]" />
      <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[100px]" />
      
      {/* Floating Particles */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white/20"
          initial={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            opacity: 0,
          }}
          animate={{
            top: [`${dot.y}%`, `${dot.y - 10}%`, `${dot.y}%`],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}
    </div>
  );
};
