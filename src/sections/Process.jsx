import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/content';
import { ChevronRight } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0a0e 0%, #2d0f17 50%, #1a0a0e 100%)' }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: '#E63946' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: '#2A9D8F' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold font-[Poppins] tracking-widest uppercase" style={{ color: '#ff6b7a' }}>
            Our Promise
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-[Poppins] text-white mt-2">
            From Our Farm{' '}
            <span style={{ color: '#E63946' }}>to Your Table</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 font-[Lato] text-lg">
            We take extreme care at every step — from planting to delivery — so you get the freshest berry possible.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-col md:flex-row items-center gap-4 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl flex-1 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-sm font-black font-[Poppins] mb-2" style={{ color: '#E63946' }}>
                  {step.num}
                </div>
                <h3 className="text-lg font-bold font-[Poppins] text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/60 font-[Lato] leading-relaxed">{step.desc}</p>
              </motion.div>

              {i < PROCESS_STEPS.length - 1 && (
                <ChevronRight className="hidden md:block flex-shrink-0 text-white/30" size={32} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
