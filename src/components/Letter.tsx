import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const FULL_LETTER = `Dearest Hetal Mom,

As I sit here thinking about all the years you've spent building our world, I'm overwhelmed with gratitude. Your name resonates with the very heartbeat of our home.

Thank you for the sacrifices I never saw, the prayers you whispered when I was sleeping, and the strength you showed even when you were tired. You've taught me that true love isn't just a feeling—it's an action, a choice you make every single day.

You are my hero, my first teacher, and my forever friend. No matter where life takes me, I will always be your child, carrying your wisdom and love as my shield.

I love you more than words could ever express.

Happy Mother's Day, Hetal Chauhan.`;

export const Letter = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(FULL_LETTER.slice(0, index));
        index++;
        if (index > FULL_LETTER.length) {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glass-premium rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden group"
        >
          {/* Decorative particles relative to letter */}
          <div className="absolute top-4 right-6 opacity-20 hidden md:block">
            <Music className="w-12 h-12 text-gold" />
          </div>
          
          <div className="flex justify-between items-center mb-12 relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gold">A Voice from the heart</h2>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isPlaying ? <Volume2 className="w-5 h-5 text-gold" /> : <VolumeX className="w-5 h-5 text-white/40" />}
            </button>
          </div>

          {!isTyping ? (
             <div className="flex flex-col items-start justify-center py-10 space-y-8">
                <p className="font-serif text-3xl md:text-4xl italic text-white/90 leading-relaxed">
                  "Dear Mom, thank you for being my North Star. Even when I was lost, your love was the light that brought me home..."
                </p>
                <button 
                  onClick={() => setIsTyping(true)}
                  className="px-10 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all"
                >
                  Read Full Message
                </button>
             </div>
          ) : (
            <div className="font-serif italic text-xl md:text-2xl leading-relaxed text-white/80 whitespace-pre-wrap min-h-[400px]">
              {displayText}
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-6 bg-gold ml-2 align-middle"
              />
              <div className="mt-8 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest opacity-40">Your child is sharing their soul...</span>
              </div>
            </div>
          )}
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-warm-pink/10 blur-3xl rounded-full" />
      </div>
    </section>
  );
};
