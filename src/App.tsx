/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Timeline } from './components/Timeline';
import { Appreciation } from './components/Appreciation';
import { Letter } from './components/Letter';
import { Gallery } from './components/Gallery';
import { FinalTribute } from './components/FinalTribute';
import { Sun, Moon } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className={cn(
      "relative min-h-screen transition-colors duration-700",
      theme === 'dark' ? "bg-black text-white" : "bg-[#fdfcf8] text-[#1a1a1a]"
    )}>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
           className="relative z-10"
        >
          <BackgroundEffects />
          
          {/* Controls */}
          <div className="fixed top-6 right-6 z-[100] flex gap-3">
             <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-3 rounded-xl glass shadow-xl"
             >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-warm-pink" />}
             </motion.button>
          </div>

          <main>
            <Hero />
            <AboutSection />
            <Timeline />
            <Appreciation />
            <Letter />
            <Gallery />
            <FinalTribute />
          </main>
        </motion.div>
      )}
    </div>
  );
}
