import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-24 px-6" style={{ background: '#f8f1f3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold font-[Poppins] tracking-widest uppercase" style={{ color: '#E63946' }}>
            Behind the Scenes
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-[Poppins] text-gray-900 mt-2">
            Berry <span style={{ color: '#E63946' }}>Beautiful</span> Moments
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 font-[Lato] text-lg">
            A glimpse of freshness and flavour, straight from our fields.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelected(item)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                item.big ? 'row-span-2 col-span-1' : ''
              }`}
              style={{ height: item.big ? 420 : 200 }}
            >
              <img src={item.src} alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(230,57,70,0.7)' }}>
                <ZoomIn className="text-white mb-2" size={28} />
                <span className="text-white font-bold font-[Poppins] text-sm">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img src={selected.src} alt={selected.alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <div className="text-center mt-3 text-white font-bold font-[Poppins]">{selected.label}</div>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: '#E63946' }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
