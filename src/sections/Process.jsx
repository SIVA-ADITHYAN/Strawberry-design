import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/content';
import { ChevronRight } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 px-6" style={{ background: '#0D1B2A' }}>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold font-[Poppins] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Our Promise
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-[Poppins] text-white mt-3">
            From Our Farm to Your Table
          </h2>
          <p className="max-w-xl mx-auto mt-3 font-[Lato]" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16 }}>
            We take extreme care at every step — from planting to delivery — so you get the freshest berry possible.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-col md:flex-row items-center gap-4 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center p-7 rounded-2xl flex-1 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-sm font-black font-[Poppins] mb-2" style={{ color: '#C0392B' }}>
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
