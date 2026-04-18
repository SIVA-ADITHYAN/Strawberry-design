import { TRUST_ITEMS } from '../data/content';

export default function TrustBar() {
  return (
    <div className="py-3.5 overflow-hidden" style={{ background: '#1B3A6B', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 px-6 max-w-7xl mx-auto">
        {TRUST_ITEMS.map((item, i) => (
          <div key={item.text} className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
              style={{ fontFamily: 'Poppins', color: 'rgba(255,255,255,0.75)' }}>
              <span>{item.icon}</span>
              {item.text}
            </div>
            {i < TRUST_ITEMS.length - 1 && (
              <div className="w-px h-3 bg-white/20 hidden sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
