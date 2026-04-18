import { motion } from 'framer-motion';
import { TRUST_ITEMS } from '../data/content';

export default function TrustBar() {
  return (
    <div className="py-4 overflow-hidden" style={{ background: 'linear-gradient(90deg, #C0392B, #922B21)' }}>
      <div className="flex items-center justify-center flex-wrap gap-4 px-6 max-w-7xl mx-auto">
        {TRUST_ITEMS.map((item, i) => (
          <div key={item.text} className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-white font-semibold font-[Poppins] text-sm whitespace-nowrap"
            >
              <span className="text-base">{item.icon}</span>
              {item.text}
            </motion.div>
            {i < TRUST_ITEMS.length - 1 && (
              <div className="w-px h-4 bg-white/40 hidden sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
