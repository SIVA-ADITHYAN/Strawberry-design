import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

const WA_NUMBER = '919176540077';
const WA_MESSAGE = encodeURIComponent("Hi Berry Patch! I'd like to order fresh strawberries. Please share the details.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const IG_LINK = 'https://www.instagram.com/theberrypatch.organic?igsh=MTNocDgzdzF5ZWJnaA==';

function WaIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function IgIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        padding: scrolled ? '4px 0' : '10px 0',
        boxShadow: scrolled ? '0 1px 20px rgba(27,58,107,0.10)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="The Berry Patch — Organic Goodness, Berry By Berry"
            style={{
              height: scrolled ? 52 : 56,
              width: 'auto',
              objectFit: 'contain',
              transition: 'height 0.3s',
              /* drop shadow so logo is visible on hero image */
              filter: scrolled ? 'none' : 'drop-shadow(0 2px 6px rgba(0,0,0,0.45))',
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              style={{
                fontFamily: 'Poppins', fontSize: 13, fontWeight: 600,
                color: scrolled ? '#1B3A6B' : 'rgba(255,255,255,0.90)',
                background: 'none', border: 'none', cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#C0392B'; }}
              onMouseLeave={e => { e.currentTarget.style.color = scrolled ? '#1B3A6B' : 'rgba(255,255,255,0.90)'; }}
            >
              {link.label}
            </button>
          ))}

          <a href={IG_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', color: 'white' }}>
            <IgIcon size={15} />
          </a>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold transition-all duration-200 hover:scale-105"
            style={{ fontFamily: 'Poppins', fontSize: 13, background: '#25D366', boxShadow: '0 3px 12px rgba(37,211,102,0.35)' }}>
            <WaIcon size={16} /> Order on WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg"
          style={{ color: scrolled ? '#1B3A6B' : 'white' }} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white overflow-hidden"
            style={{ borderTop: '1px solid #e8f0e4', boxShadow: '0 8px 24px rgba(27,58,107,0.10)' }}
          >
            <div className="flex justify-center py-5 pb-3">
              <img src="/logo.png" alt="The Berry Patch" style={{ height: 64, objectFit: 'contain' }} />
            </div>
            <div className="px-6 pb-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button key={link.href} onClick={() => handleLink(link.href)}
                  className="text-left py-3 text-sm font-semibold"
                  style={{ fontFamily: 'Poppins', color: '#1B3A6B', borderBottom: '1px solid #f0f5ee', background: 'none', border: 'none', borderBottom: '1px solid #f0f5ee', cursor: 'pointer', width: '100%' }}>
                  {link.label}
                </button>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm mt-3"
                style={{ fontFamily: 'Poppins', background: '#25D366' }}>
                <WaIcon size={18} /> Order on WhatsApp
              </a>
              <a href={IG_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm"
                style={{ fontFamily: 'Poppins', background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
                <IgIcon size={18} /> Follow on Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
