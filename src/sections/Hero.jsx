import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/content';

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numeric = parseInt(target.replace(/\D/g, ''));
    if (!numeric) return;
    const step = numeric / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= numeric) { setCount(numeric); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  const suffix = target.replace(/[0-9]/g, '');
  return count === 0 ? '0' : count + suffix;
}

function StatItem({ stat, animate }) {
  const display = useCounter(stat.value, 2000, animate);
  return (
    <div className="text-center text-white">
      <div className="text-3xl md:text-4xl font-black font-[Poppins] drop-shadow">{display}</div>
      <div className="text-sm text-white/80 mt-1 font-[Lato]">{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) setScrollY(window.scrollY * 0.18);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.5 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background with parallax */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Fresh glistening strawberries"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY}px) scale(1.1)` }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(26,10,14,0.75) 0%, rgba(230,57,70,0.4) 50%, rgba(26,10,14,0.8) 100%)'
        }} />
      </div>

      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{ background: '#E63946' }} />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full opacity-15 blur-3xl"
        style={{ background: '#2A9D8F' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          🌱 100% Farm Fresh
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl md:text-7xl font-black font-[Poppins] text-white leading-tight mb-6"
        >
          Freshly Picked <br />
          <span className="italic" style={{ color: '#ff6b7a' }}>Happiness</span>
          {' '}🍓
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 font-[Lato]"
        >
          Experience the sweetness of nature with handpicked, farm-fresh strawberries delivered straight to you — from our fields to your table.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="#order"
            className="px-8 py-4 rounded-full text-white font-bold font-[Poppins] text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #E63946, #c1121f)', boxShadow: '0 8px 32px rgba(230,57,70,0.4)' }}
          >
            Shop Now
          </a>
          <a href="#about"
            className="px-8 py-4 rounded-full text-white font-bold font-[Poppins] text-lg transition-all duration-200 hover:bg-white/20"
            style={{ border: '2px solid rgba(255,255,255,0.6)', backdropFilter: 'blur(4px)' }}
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-8 md:gap-12"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 md:gap-12">
              <StatItem stat={stat} animate={statsVisible} />
              {i < STATS.length - 1 && (
                <div className="w-px h-10 bg-white/30" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs font-[Poppins] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
