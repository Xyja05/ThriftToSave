import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Categories', href: '#categories' },
  { label: 'Deals', href: '#deals' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(42, 21, 37, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,98,122,0.12)' : 'none',
        padding: '0 5%',
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px', maxWidth: '1400px', margin: '0 auto',
      }}>

        {/* ── Logo ── */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px', height: '40px',
            background: 'linear-gradient(135deg, #C8627A, #C9A96E)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px',
            boxShadow: '0 4px 16px rgba(200,98,122,0.35)',
          }}>🌸</div>
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: '#F5E8EC',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              Thrift<span style={{ color: '#C8627A', fontStyle: 'italic' }}>To</span>Save
            </div>
            <div style={{
              fontSize: '0.55rem', color: '#B89AA6',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Curated Preloved Fashion
            </div>
          </div>
        </a>

        {/* ── Desktop Links ── */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="nav-links">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#B89AA6',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#E8899A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#B89AA6')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Right Actions ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

          {/* Search */}
          <button
            id="search-btn"
            style={{
              background: 'rgba(200,98,122,0.08)',
              border: '1px solid rgba(200,98,122,0.18)',
              borderRadius: '50%', width: '40px', height: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#B89AA6', fontSize: '15px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(200,98,122,0.2)';
              (e.currentTarget as HTMLButtonElement).style.color = '#E8899A';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(200,98,122,0.08)';
              (e.currentTarget as HTMLButtonElement).style.color = '#B89AA6';
            }}
          >🔍</button>

          {/* Cart */}
          <button
            id="cart-btn"
            style={{
              background: 'rgba(200,98,122,0.08)',
              border: '1px solid rgba(200,98,122,0.18)',
              borderRadius: '50%', width: '40px', height: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#B89AA6', fontSize: '15px',
              transition: 'all 0.25s ease', position: 'relative',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(200,98,122,0.2)';
              (e.currentTarget as HTMLButtonElement).style.color = '#E8899A';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(200,98,122,0.08)';
              (e.currentTarget as HTMLButtonElement).style.color = '#B89AA6';
            }}
          >
            🛒
            <span style={{
              position: 'absolute', top: '-4px', right: '-4px',
              background: 'linear-gradient(135deg, #C8627A, #A84D62)',
              color: 'white', width: '18px', height: '18px',
              borderRadius: '50%', fontSize: '0.58rem', fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{cartCount}</span>
          </button>

          {/* CTA */}
          <a href="#shop" className="btn-primary nav-cta" style={{ padding: '10px 22px', fontSize: '0.82rem' }}>
            Shop Now
          </a>

          {/* Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="hamburger"
            style={{
              background: 'transparent', border: 'none',
              color: '#F5E8EC', fontSize: '1.4rem', cursor: 'pointer', display: 'none',
            }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(42,21,37,0.98)',
          padding: '20px 5%',
          borderTop: '1px solid rgba(200,98,122,0.12)',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', color: '#B89AA6',
                textDecoration: 'none', padding: '13px 0',
                borderBottom: '1px solid rgba(200,98,122,0.08)',
                fontSize: '1rem', fontWeight: 500,
                fontFamily: 'DM Sans, sans-serif',
              }}
            >{link.label}</a>
          ))}
          <a href="#shop" className="btn-primary" style={{ marginTop: '18px', display: 'inline-flex' }}>
            Shop Now 🌸
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-links { display: none !important; }
          .nav-cta   { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
