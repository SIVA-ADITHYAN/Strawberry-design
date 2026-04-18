import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/content';

function useCounter(target, duration = 1800, start = false) {
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
  const display = useCounter(stat.value, 1800, animate);
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Poppins' }}>{display}</div>
      <div className="text-xs text-white/65 mt-1" style={{ fontFamily: 'Lato' }}>{stat.label}</div>
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
        if (rect.bottom > 0) setScrollY(window.scrollY * 0.15);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.4 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">

      {/* Background — single clean dark overlay, no colour noise */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Fresh glistening strawberries"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY}px) scale(1.08)` }}
        />
        {/* Single uniform dark overlay — far easier to read against */}
        <div className="absolute inset-0" style={{ background: 'rgba(8,18,32,0.58)' }} />
        {/* Subtle bottom fade so stats don't float on raw image */}
        <div className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, rgba(8,18,32,0.7), transparent)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24">

        {/* Eyebrow badge */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-widest"
          style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.18)' }}
        >
          🌱 Organic · Kodaikanal
        </motion.span>

        {/* Heading — plain white, no coloured italic clashing with overlay */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-4xl md:text-6xl font-black text-white leading-tight mb-5"
          style={{ fontFamily: 'Poppins', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
        >
          Freshly Picked<br />
          <span style={{ color: '#ffffff', fontStyle: 'italic', opacity: 0.92 }}>Happiness</span>
          {'  '}🍓
        </motion.h1>

        {/* Subtext — high contrast, not too long */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-9 leading-relaxed"
          style={{ fontFamily: 'Lato' }}
        >
          Handpicked organic strawberries from the cool hills of Kodaikanal —
          delivered fresh to your door.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-16"
        >
          <a
            href="#order"
            className="px-7 py-3.5 rounded-full text-white font-bold transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ fontFamily: 'Poppins', fontSize: 15, background: '#C0392B' }}
          >
            Order Now
          </a>
          <a
            href="#about"
            className="px-7 py-3.5 rounded-full text-white font-medium transition-all duration-200 hover:bg-white/15"
            style={{ fontFamily: 'Poppins', fontSize: 15, border: '1.5px solid rgba(255,255,255,0.45)' }}
          >
            Our Story
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-8 md:gap-12"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 md:gap-12">
              <StatItem stat={stat} animate={statsVisible} />
              {i < STATS.length - 1 && <div className="w-px h-8 bg-white/20" />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint — simple, no pulse */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: 'rgba(255,255,255,0.4)' }}>
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins', fontSize: 9 }}>Scroll</span>
        <div className="w-px h-8 bg-white/25" />
      </div>
    </section>
  );
}
