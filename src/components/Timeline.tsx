import { motion } from 'motion/react';
import React from 'react';
import { MEMORIES } from '../constants';
import { cn } from '@/src/lib/utils';

export const Timeline = () => {
  return (
    <section className="relative py-32 px-6 max-w-5xl mx-auto overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-warm-pink/50 to-transparent hidden md:block" />
      
      <div className="space-y-24 md:space-y-32">
        {MEMORIES.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={cn(
              "flex flex-col md:flex-row gap-8 md:gap-16 items-center",
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            )}
          >
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className={cn(
                  "absolute -inset-4 bg-gradient-to-br from-gold/10 via-warm-pink/10 to-soft-purple/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                )} />
                <img
                  src={memory.imageUrl}
                  alt={memory.title}
                  className="relative w-full aspect-video md:aspect-[4/3] object-cover rounded-[32px] border border-white/10 glass shadow-2xl brightness-90 group-hover:brightness-105 transition-all duration-500"
                />
              </div>
            </div>

            <div className={cn(
              "w-full md:w-1/2 relative space-y-4",
              index % 2 === 1 ? "md:text-right" : "md:text-left"
            )}>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-widest text-gold opacity-70">
                  {memory.year}
                </span>
                <h3 className="text-2xl md:text-4xl font-serif italic text-white tracking-tight">{memory.title}</h3>
              </div>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                {memory.description}
              </p>
              
              {/* Connector dot for Desktop */}
              <div className={cn(
                "absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full hidden md:block ring-4",
                index === 0 ? "bg-gold ring-gold/20" : 
                index === 1 ? "bg-warm-pink ring-warm-pink/20" : "bg-soft-purple ring-soft-purple/20",
                index % 2 === 0 ? "right-[-47.5px]" : "left-[-47.5px]"
              )} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
