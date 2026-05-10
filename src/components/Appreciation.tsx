import { motion, useSpring, useTransform, useInView } from 'motion/react';
import React, { useEffect, useRef } from 'react';
import { Heart, Stars, CloudMoon, ShieldCheck } from 'lucide-react';

const CountUp = ({ value, label, sublabel, icon: Icon }: { value: number | string; label: string; sublabel: string; icon: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 30, damping: 20 });
  const count = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView && typeof value === 'number') {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-[32px] p-8 flex flex-col items-start text-left group hover:border-gold/30 transition-all duration-500"
    >
      <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-gold" />
      </div>
      <div className="mb-4 text-4xl md:text-5xl font-serif text-white opacity-90">
        {typeof value === 'number' ? <motion.span>{count}</motion.span> : value}
        <span className="text-gold text-2xl ml-1">+</span>
      </div>
      <h4 className="text-lg font-semibold mb-1 text-white/90">{label}</h4>
      <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 group-hover:text-gold transition-colors">
        {sublabel}
      </p>
    </motion.div>
  );
};

export const Appreciation = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-warm-pink mb-4 block">Love & Sacrifice</span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-white">The Measure of a Hero</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CountUp
            icon={Heart}
            value="Infinite"
            label="Unlimited Love"
            sublabel="Patience & Care"
          />
          <CountUp
            icon={CloudMoon}
            value={5000}
            label="Countless Prayers"
            sublabel="Sleepless Nights"
          />
          <CountUp
            icon={Stars}
            value={2000}
            label="Sacrifices Made"
            sublabel="For My Future"
          />
          <CountUp
            icon={ShieldCheck}
            value="Eternal"
            label="Grace & Strength"
            sublabel="The Hetal Way"
          />
        </div>
      </div>
    </section>
  );
};
