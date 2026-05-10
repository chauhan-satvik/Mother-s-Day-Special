import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { X, Maximize2 } from 'lucide-react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto glass-premium rounded-[40px] p-8 md:p-12 overflow-hidden">
        <div className="flex justify-between items-end mb-16 px-4">
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">Moments in Time</h3>
            <h2 className="text-3xl md:text-5xl font-serif italic text-white">Captured Souls</h2>
          </div>
          <p className="text-white/40 uppercase tracking-widest text-[10px] hidden md:block">A glimpse into our forever</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {GALLERY.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
              style={{ rotate: img.rotation }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(img.url)}
            >
              <div className="bg-white p-2 pb-8 md:p-3 md:pb-10 rounded-sm shadow-2xl transition-all duration-500 hover:shadow-pink-500/20">
                <div className="relative aspect-square overflow-hidden bg-neutral-200 mb-3">
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="h-4 bg-neutral-100 rounded-sm w-3/4 mx-auto" />
                <p className="font-handwriting text-xl md:text-2xl text-black text-center mt-2 absolute inset-x-0 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white/60 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              layoutId={selectedImage}
              src={selectedImage}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl shadow-gold/10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
