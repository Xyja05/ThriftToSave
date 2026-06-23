import { useEffect, useRef } from 'react';

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '50K+', label: 'Items Sold' },
  { value: '4.9★', label: 'Avg. Rating' },
  { value: '₱150', label: 'Starting Price' },
];

const marqueeItems = [
  '🌸 NEW ARRIVALS WEEKLY', '✨ FREE SHIPPING ₱500+', '💎 AUTHENTICATED ITEMS',
  '🎀 UP TO 80% OFF', '🌷 SAME DAY DISPATCH', '💫 FLASH SALE TODAY',
  '🌸 NEW ARRIVALS WEEKLY', '✨ FREE SHIPPING ₱500+', '💎 AUTHENTICATED ITEMS',
  '🎀 UP TO 80% OFF', '🌷 SAME DAY DISPATCH', '💫 FLASH SALE TODAY',
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 18;
      const y = (clientY / height - 0.5) * 18;
      const b1 = heroRef.current.querySelector('.hero-blob-1') as HTMLElement;
      const b2 = heroRef.current.querySelector('.hero-blob-2') as HTMLElement;
      if (b1) b1.style.transform = `translate(${x}px, ${y}px)`;
      if (b2) b2.style.transform = `translate(${-x * 0.7}px, ${-y * 0.7}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
        background: 'linear-gradient(145deg, #2A1525 0%, #361C30 45%, #2A1525 100%)',
      }}
    >
      {/* ── Background Blobs ── */}
      <div className="blob hero-blob-1" style={{
        width: '650px', height: '650px',
        background: 'radial-gradient(circle, #C8627A 0%, #8B3A52 60%, transparent 80%)',
        top: '-180px', left: '-180px', opacity: 0.18,
        transition: 'transform 0.12s ease',
      }} />
      <div className="blob hero-blob-2" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, #C9A96E 0%, #8B6A35 60%, transparent 80%)',
        bottom: '-120px', right: '-80px', opacity: 0.14,
        transition: 'transform 0.12s ease',
      }} />
      <div className="blob" style={{
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, #9B6E80 0%, transparent 70%)',
        top: '40%', left: '52%', opacity: 0.12,
      }} />

      {/* ── Subtle dot grid ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(200,98,122,0.12) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />

      {/* ── Marquee banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, #C8627A 0%, #A84D62 100%)',
        padding: '9px 0',
        overflow: 'hidden',
        position: 'absolute', top: '72px', left: 0, right: 0,
        zIndex: 2,
      }}>
        <div className="marquee-wrapper">
          <div className="animate-marquee" style={{ display: 'inline-block' }}>
            {marqueeItems.map((item, i) => (
              <span key={i} style={{
                margin: '0 32px',
                fontWeight: 500,
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.88)',
                fontFamily: 'DM Sans, sans-serif',
              }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content grid ── */}
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        padding: '90px 5% 60px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
        position: 'relative', zIndex: 1,
      }} className="hero-grid">

        {/* LEFT */}
        <div className="animate-slide-up">

          {/* Label pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(200,98,122,0.12)',
            border: '1px solid rgba(200,98,122,0.28)',
            borderRadius: '50px', padding: '6px 18px', marginBottom: '28px',
          }}>
            <span style={{
              width: '7px', height: '7px',
              background: '#E8899A', borderRadius: '50%',
              animation: 'rosePulse 2s ease-in-out infinite',
            }} />
            <span style={{ color: '#E8899A', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', fontFamily: 'DM Sans, sans-serif' }}>
              #1 Curated Ukay-Ukay in the Philippines
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            marginBottom: '24px',
            color: '#F5E8EC',
          }}>
            Shop{' '}
            <em style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #E8899A, #C9A96E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Pre-Loved</em>
            <br />
            Fashion &
            <span className="gradient-text-gold"> Save Big</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            color: '#B89AA6', fontSize: '1.05rem', lineHeight: 1.8,
            marginBottom: '38px', maxWidth: '460px',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
          }}>
            Discover thousands of authentic pre-loved pieces — from branded jackets to dainty accessories.
            Curated for the chic, budget-savvy fashionista. 🌷
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '52px' }}>
            <a href="#shop" className="btn-primary animate-rose-pulse" id="hero-shop-btn">
              🌸 Shop Now
            </a>
            <a href="#deals" className="btn-outline" id="hero-deals-btn">
              ✨ View Deals
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px',
          }} className="hero-stats">
            {stats.map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.55rem', fontWeight: 700,
                  color: '#C8627A', lineHeight: 1,
                }}>{s.value}</div>
                <div style={{ color: '#B89AA6', fontSize: '0.72rem', marginTop: '4px', fontFamily: 'DM Sans, sans-serif' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — floating product collage */}
        <div style={{ position: 'relative', height: '520px' }} className="hero-collage">

          {/* Main card */}
          <div className="animate-float glass" style={{
            position: 'absolute', top: '8%', left: '8%',
            width: '62%', borderRadius: '28px', overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(200,98,122,0.18)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&q=80"
              alt="Featured vintage jacket"
              style={{ width: '100%', height: '290px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '18px 20px' }}>
              <div style={{ fontSize: '0.7rem', color: '#B89AA6', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Featured Pick
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#F5E8EC', fontSize: '1rem', margin: '4px 0 10px' }}>
                Vintage Levi's Jacket
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ color: '#C8627A', fontWeight: 700, fontSize: '1.2rem', fontFamily: 'Playfair Display, serif' }}>₱350</span>
                  <span className="price-original" style={{ marginLeft: '8px', fontSize: '0.85rem' }}>₱1,200</span>
                </div>
                <span className="badge-sale">71% OFF</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass" style={{
            position: 'absolute', top: '4%', right: '0',
            width: '40%', borderRadius: '20px', overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80"
              alt="Nike sneakers"
              style={{ width: '100%', height: '120px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '12px 14px' }}>
              <div style={{ fontSize: '0.78rem', fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#F5E8EC' }}>
                Nike Air Force 1
              </div>
              <div style={{ color: '#C8627A', fontWeight: 700, marginTop: '2px', fontFamily: 'DM Sans, sans-serif' }}>₱450</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass" style={{
            position: 'absolute', bottom: '8%', right: '4%',
            width: '46%', borderRadius: '20px', overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=80"
              alt="Coach bag"
              style={{ width: '100%', height: '120px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '12px 14px' }}>
              <div style={{ fontSize: '0.78rem', fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#F5E8EC' }}>
                Coach Mini Bag
              </div>
              <div style={{ color: '#C8627A', fontWeight: 700, marginTop: '2px', fontFamily: 'DM Sans, sans-serif' }}>₱680</div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="animate-float-alt" style={{
            position: 'absolute', top: '0', left: '0',
            background: 'linear-gradient(135deg, #C9A96E, #A88548)',
            color: '#2A1525', padding: '8px 16px', borderRadius: '50px',
            fontWeight: 700, fontSize: '0.78rem',
            boxShadow: '0 8px 24px rgba(201,169,110,0.35)',
            fontFamily: 'DM Sans, sans-serif',
          }}>
            🎀 Up to 80% OFF
          </div>

          <div style={{
            position: 'absolute', bottom: '4%', left: '0',
            background: 'linear-gradient(135deg, #8B3A52, #C8627A)',
            color: 'white', padding: '8px 16px', borderRadius: '50px',
            fontWeight: 600, fontSize: '0.78rem',
            boxShadow: '0 8px 24px rgba(200,98,122,0.35)',
            fontFamily: 'DM Sans, sans-serif',
            animation: 'float 3.8s ease-in-out infinite 0.6s',
          }}>
            ✅ Auth. Items
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px',
        color: '#B89AA6', fontSize: '0.7rem', zIndex: 1,
        fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em',
      }}>
        <span>scroll to explore</span>
        <div style={{
          width: '22px', height: '38px',
          border: '1.5px solid rgba(200,98,122,0.35)', borderRadius: '11px',
          display: 'flex', justifyContent: 'center', paddingTop: '6px',
        }}>
          <div style={{
            width: '3px', height: '8px',
            background: '#C8627A', borderRadius: '2px',
            animation: 'float 1.6s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid    { grid-template-columns: 1fr !important; }
          .hero-collage { display: none !important; }
          .hero-stats   { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
