import { motion } from 'motion/react';
import React from 'react';

export const AboutSection = () => {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 glass shadow-2xl relative group">
            <img 
               src="/images/hero.jpg" 
               alt="Hetal Chauhan Inspiration" 
               className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 right-10">
               <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold/80 mb-2 block">The Portrait of Grace</span>
               <h3 className="text-3xl font-serif italic text-white">Hetal Chauhan</h3>
            </div>
          </div>
          
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 blur-[100px] rounded-full z-0" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="space-y-4">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-warm-pink">Luxury Editorial</span>
             <h2 className="text-4xl md:text-6xl font-serif italic leading-tight text-white mb-8">
                The Heart Behind <br />
                Every Victory
             </h2>
             <div className="h-px w-24 bg-gold/50" />
          </div>

          <div className="space-y-8">
             {[
               "Her love never asked for attention.",
               "Her sacrifices were silent, but endless.",
               "She built strength inside the walls of ordinary days."
             ].map((text, idx) => (
               <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.2 }}
                  className="flex gap-4 items-center"
               >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <p className="text-lg md:text-xl font-light text-white/70 italic font-serif leading-relaxed">
                     “{text}”
                  </p>
               </motion.div>
             ))}
          </div>

          <motion.p 
            className="text-white/40 text-sm leading-relaxed max-w-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
             Hetal Chauhan represents the timeless grace of motherhood—balancing immeasurable 
             patience with a willpower that moves mountains for those she loves.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
