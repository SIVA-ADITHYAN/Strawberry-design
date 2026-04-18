import { motion } from 'framer-motion';
import { BENEFITS } from '../data/content';

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6" style={{ background: '#FAFDF8' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text + cards */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="text-sm font-bold font-[Poppins] tracking-widest uppercase" style={{ color: '#4A7C3F' }}>
            Good for You
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-[Poppins] text-gray-900 mt-2 mb-4">
            Why Choose{' '}
            <span style={{ color: '#C0392B' }}>Strawberries?</span>
          </h2>
          <p className="text-gray-500 font-[Lato] mb-8 text-lg">
            Strawberries are not just delicious — they're an incredible powerhouse of nutrition. Nature's candy with all the good stuff.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex gap-3 p-4 rounded-2xl transition-shadow duration-200 hover:shadow-md"
                style={{ background: 'white', border: '1px solid #f3e8ea' }}
              >
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <div>
                  <div className="font-bold font-[Poppins] text-gray-800 text-sm">{b.title}</div>
                  <div className="text-xs text-gray-500 font-[Lato] mt-1 leading-relaxed">{b.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src="/lifestyle.png" alt="Person happily eating fresh strawberries"
              className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(192,57,43,0.3), transparent)' }} />
          </div>
          {/* Float card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -left-4 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl"
            style={{ background: 'white', border: '2px solid #4A7C3F' }}
          >
            <span className="text-3xl">🍓</span>
            <div>
              <div className="font-black font-[Poppins] text-sm text-gray-900">Rich in Antioxidants</div>
              <div className="text-xs text-gray-500 font-[Lato]">Top-ranked superfood</div>
            </div>
          </motion.div>
          {/* decorative dots */}
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-25 blur-xl"
            style={{ background: '#D4A853' }} />
        </motion.div>
      </div>
    </section>
  );
}
