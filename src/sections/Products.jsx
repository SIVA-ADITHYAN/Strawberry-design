import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/content';

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.4 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative flex flex-col rounded-3xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl ${
        product.featured ? 'ring-2' : ''
      }`}
      style={{
        background: product.featured
          ? 'linear-gradient(145deg, #0D1B2A, #1B3A6B)'
          : 'white',
        ringColor: product.featured ? '#C0392B' : undefined,
      }}
    >
      {product.featured && (
        <div className="absolute top-0 left-0 right-0 text-center text-xs font-bold font-[Poppins] py-1.5 text-white"
          style={{ background: '#C0392B' }}>
          ✨ MOST POPULAR
        </div>
      )}

      <div className={`relative overflow-hidden ${product.featured ? 'mt-7' : ''}`} style={{ height: 220 }}>
        <img src={product.image} alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold font-[Poppins] text-white"
          style={{ background: product.featured ? '#C0392B' : '#4A7C3F' }}>
          {product.badge}
        </span>
      </div>

      <div className={`flex flex-col flex-1 p-6 gap-4 ${product.featured ? 'text-white' : 'text-gray-800'}`}>
        <h3 className="text-xl font-black font-[Poppins]">{product.name}</h3>
        <p className={`text-sm leading-relaxed font-[Lato] ${product.featured ? 'text-white/75' : 'text-gray-500'}`}>
          {product.desc}
        </p>
        <ul className="flex flex-col gap-2">
          {product.features.map((f) => (
            <li key={f} className={`text-sm font-[Lato] flex items-center gap-2 ${product.featured ? 'text-white/85' : 'text-gray-600'}`}>
              <span className="text-green-400">✅</span> {f}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between mt-auto pt-4"
          style={{ borderTop: `1px solid ${product.featured ? 'rgba(255,255,255,0.15)' : '#f3f4f6'}` }}>
          <div>
            <span className="text-2xl font-black font-[Poppins]" style={{ color: '#C0392B' }}>{product.price}</span>
            <span className={`text-sm ml-1 font-[Lato] ${product.featured ? 'text-white/60' : 'text-gray-400'}`}>/ {product.unit}</span>
          </div>
          <a href="#order"
            className="px-5 py-2.5 rounded-full text-sm font-bold font-[Poppins] transition-all duration-200 hover:scale-105"
            style={product.featured
              ? { background: '#C0392B', color: 'white' }
              : { background: '#FFF0F1', color: '#C0392B', border: '1.5px solid #C0392B' }}>
            Order Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 px-6" style={{ background: '#F2F7EF' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold font-[Poppins] tracking-widest uppercase" style={{ color: '#C0392B' }}>
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-[Poppins] text-gray-900 mt-2">
            Our <span style={{ color: '#C0392B' }}>Strawberries</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 font-[Lato] text-lg">
            Carefully cultivated to deliver the perfect balance of sweetness and freshness. Handpicked at peak ripeness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
