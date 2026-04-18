import { motion } from 'framer-motion';

const WA_NUMBER = '91XXXXXXXXXX'; // replace with real number
const WA_MESSAGE = encodeURIComponent("Hi Berry Patch! 🍓 I'd like to order fresh strawberries. Please share the details.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const IG_LINK = 'https://instagram.com/theberrypatch'; // replace with real handle

export default function CTA() {
  return (
    <section id="order" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/splash.png" alt="Strawberry splash" className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(193,18,31,0.88), rgba(26,10,14,0.9))' }} />
      </div>

      {/* Decorative blur circles */}
      <div className="absolute top-10 left-20 w-40 h-40 rounded-full blur-3xl opacity-30"
        style={{ background: '#F4A261' }} />
      <div className="absolute bottom-10 right-20 w-56 h-56 rounded-full blur-3xl opacity-20"
        style={{ background: '#2A9D8F' }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-bold font-[Poppins] tracking-widest uppercase mb-4"
          style={{ color: '#ff6b7a' }}
        >
          Limited Season
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black font-[Poppins] text-white leading-tight mb-6"
        >
          Taste the <em>Freshness</em> Today!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="text-white/80 text-lg font-[Lato] mb-10 max-w-xl mx-auto"
        >
          Don't miss out on the season's best strawberries. Order now and get them delivered fresh within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          {/* WhatsApp Order */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-bold font-[Poppins] transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            style={{ background: '#25D366', color: 'white', boxShadow: '0 8px 32px rgba(37,211,102,0.4)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>

          {/* Instagram */}
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-bold font-[Poppins] text-white transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', boxShadow: '0 8px 32px rgba(253,29,29,0.35)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Follow on Instagram
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-white/60 text-sm font-[Lato]"
        >
          🌱 Free delivery on orders above ₹500 · No minimum quantity
        </motion.p>
      </div>
    </section>
  );
}
