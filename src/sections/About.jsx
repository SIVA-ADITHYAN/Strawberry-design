import { motion } from 'framer-motion';
import { ABOUT_TAGS } from '../data/content';

const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: '#FAFDF8' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src="/farm.png" alt="Strawberry farm at golden hour" className="w-full h-[480px] object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.3), transparent)' }} />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-4 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl"
            style={{ background: 'white', border: '2px solid #C0392B' }}
          >
            <span className="text-3xl">🌱</span>
            <div>
              <div className="font-black font-[Poppins] text-gray-900 text-sm">Sustainable</div>
              <div className="text-xs text-gray-500 font-[Lato]">Farming since 2010</div>
            </div>
          </motion.div>
          {/* Decorative corner dot */}
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-30"
            style={{ background: '#4A7C3F' }} />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col gap-5"
        >
          <span className="text-sm font-bold font-[Poppins] tracking-widest uppercase" style={{ color: '#C0392B' }}>
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-[Poppins] text-gray-900 leading-tight">
            Welcome to{' '}
            <span style={{ color: '#C0392B' }}>The Berry Patch</span>
          </h2>
          <p className="text-lg font-semibold text-gray-700 font-[Lato] leading-relaxed">
            At The Berry Patch, we bring you the finest, juiciest strawberries grown with care and passion on our family-owned farms.
          </p>
          <p className="text-gray-600 font-[Lato] leading-relaxed">
            Our farms are dedicated to sustainable practices, ensuring every berry is fresh, flavorful, and naturally sweet. We work with nature — not against it — using eco-friendly techniques that protect the soil, the bees, and the planet.
          </p>
          <p className="text-gray-600 font-[Lato] leading-relaxed">
            From farm to your table, we ensure quality, freshness, and taste in every single bite. No shortcuts. No compromises.
          </p>

          <div className="flex flex-wrap gap-3 my-2">
            {ABOUT_TAGS.map((tag) => (
              <span key={tag.text}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold font-[Poppins]"
                style={{ background: '#FFF0F1', color: '#C0392B', border: '1px solid #fca5a5' }}>
                {tag.icon} {tag.text}
              </span>
            ))}
          </div>

          <a href="#process"
            className="self-start px-7 py-3 rounded-full text-white font-bold font-[Poppins] transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #C0392B, #922B21)' }}>
            See Our Process
          </a>
        </motion.div>
      </div>
    </section>
  );
}
