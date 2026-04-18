/**
 * LogoMark — mirrors the brand logo:
 *   "The Berry"  bold Poppins
 *   "Patch"      Dancing Script
 *   tagline      italic, optional
 *
 * Props:
 *   height      — controls overall size (default 56)
 *   showTagline — show "Organic Goodness, Berry By Berry." below
 *   onDark      — true when placed on a dark background (footer, etc.)
 */
export default function Logo({ height = 56, showTagline = false, onDark = false }) {
  const berryColor  = onDark ? '#E8365D'               : '#0a0a0a';   // "The Berry"
  const patchColor  = onDark ? '#7BA7E0'               : '#1B3A6B';   // "Patch"
  const tagColor    = onDark ? 'rgba(255,255,255,0.45)' : '#4A7C3F';  // tagline

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, lineHeight: 1 }}>

      {/* Emoji berry cluster */}
      <span style={{ fontSize: height * 0.54, lineHeight: 1, userSelect: 'none', flexShrink: 0 }}>
        🍓
      </span>

      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, flexShrink: 0 }}>

        {/* "The Berry" */}
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 900,
          fontSize: height * 0.33,
          color: berryColor,
          letterSpacing: '-0.01em',
          lineHeight: 1.15,
        }}>
          The Berry
        </span>

        {/* "Patch" */}
        <span style={{
          fontFamily: "'Dancing Script', cursive",
          fontWeight: 700,
          fontSize: height * 0.42,
          color: patchColor,
          lineHeight: 1.0,
          marginTop: -1,
        }}>
          Patch
        </span>

        {/* Tagline */}
        {showTagline && (
          <span style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: Math.max(height * 0.15, 10),
            color: tagColor,
            fontStyle: 'italic',
            marginTop: 4,
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
          }}>
            Organic Goodness, Berry By Berry.
          </span>
        )}
      </div>
    </div>
  );
}
