import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';
import { Star } from 'lucide-react';

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#F4A261" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: '#FFF9F5' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold font-[Poppins] tracking-widest uppercase" style={{ color: '#E63946' }}>
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-[Poppins] text-gray-900 mt-2">
            What Our Customers <span style={{ color: '#E63946' }}>Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`flex flex-col gap-4 p-6 rounded-3xl shadow-md transition-shadow duration-300 hover:shadow-xl ${
                t.featured ? 'text-white' : 'text-gray-800'
              }`}
              style={t.featured
                ? { background: 'linear-gradient(135deg, #E63946, #c1121f)' }
                : { background: 'white', border: '1px solid #f3e8ea' }
              }
            >
              <Stars count={t.stars} />
              <p className={`text-sm font-[Lato] leading-relaxed flex-1 ${t.featured ? 'text-white/90' : 'text-gray-600'}`}>
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black font-[Poppins] flex-shrink-0"
                  style={t.featured
                    ? { background: 'rgba(255,255,255,0.2)', color: 'white' }
                    : { background: '#FFF0F1', color: '#E63946' }
                  }>
                  {t.initials}
                </div>
                <div>
                  <div className={`font-bold font-[Poppins] text-sm ${t.featured ? 'text-white' : 'text-gray-900'}`}>
                    {t.name}
                  </div>
                  <div className={`text-xs font-[Lato] ${t.featured ? 'text-white/65' : 'text-gray-400'}`}>
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
