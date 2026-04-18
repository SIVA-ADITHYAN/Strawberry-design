import { motion } from 'framer-motion';

const WA_NUMBER = '91XXXXXXXXXX';
const WA_MESSAGE = encodeURIComponent("Hi Berry Patch! 🍓 I'd like to order fresh strawberries. Please share the details.");
const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/theberrypatch',
    hoverBg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    Icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/theberrypatch',
    hoverBg: '#1877F2',
    Icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`,
    hoverBg: '#25D366',
    Icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Products', href: '#products' },
  { label: 'Health Benefits', href: '#benefits' },
  { label: 'Farm Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
];


export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0D1B2A', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand — logo with tagline */}
        <div className="flex flex-col gap-5">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="The Berry Patch" style={{ height: 64, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </a>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Lato' }}>
            Fresh, organically grown strawberries from the cool hills of Kodaikanal — delivered to your door.
          </p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ label, href, hoverBg, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 group"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-5" style={{ fontFamily: 'Poppins', color: '#E63946' }}>Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm transition-colors duration-200 hover:text-white"
                  style={{ fontFamily: 'Lato', color: 'rgba(255,255,255,0.6)' }}
                >
                  → {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-5" style={{ fontFamily: 'Poppins', color: '#E63946' }}>Contact Us</h4>
          <ul className="flex flex-col gap-3 text-sm" style={{ fontFamily: 'Lato', color: 'rgba(255,255,255,0.6)' }}>
            <li className="flex items-start gap-2"><span>📍</span> Berry Farm Road, Mahabaleshwar, MH</li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">+91 XXXXX XXXXX</a>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:info@berrypatch.com" className="hover:text-white transition-colors">info@berrypatch.com</a>
            </li>
          </ul>
          <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <h4 className="text-sm font-bold mb-2" style={{ fontFamily: 'Poppins', color: 'rgba(255,255,255,0.8)' }}>Order Hours</h4>
            <p className="text-sm" style={{ fontFamily: 'Lato', color: 'rgba(255,255,255,0.5)' }}>Mon – Sat: 7 AM – 7 PM</p>
            <p className="text-sm" style={{ fontFamily: 'Lato', color: 'rgba(255,255,255,0.5)' }}>Sunday: 8 AM – 2 PM</p>
          </div>
        </div>
      </div>

      <div className="py-6 px-6 text-center text-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Lato', color: 'rgba(255,255,255,0.4)' }}>
        © 2026 The Berry Patch. All rights reserved. Made with 🍓 and love.
      </div>
    </footer>
  );
}
