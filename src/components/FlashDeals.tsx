import { useState, useEffect } from 'react';
import { flashDeals } from '../data';

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="deals" style={{
      padding: '100px 5%',
      background: 'linear-gradient(135deg, #1a0f2e 0%, #2d1f3d 50%, #1a0f2e 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorations */}
      <div className="section-blob" style={{
        width: '500px', height: '500px',
        background: '#e8603c', top: '-150px', left: '-100px',
      }} />
      <div className="section-blob" style={{
        width: '400px', height: '400px',
        background: '#7c3aed', bottom: '-100px', right: '10%',
      }} />

      {/* Spinning ring decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '5%',
        width: '300px',
        height: '300px',
        border: '2px dashed rgba(232,96,60,0.2)',
        borderRadius: '50%',
        transform: 'translateY(-50%)',
        animation: 'spin-slow 20s linear infinite',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header with timer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '48px',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(232,96,60,0.15)',
              border: '1px solid rgba(232,96,60,0.3)',
              borderRadius: '50px',
              padding: '6px 16px',
              color: '#e8603c',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              marginBottom: '12px',
            }}>
              ⚡ FLASH DEALS
            </div>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: 'white',
            }}>
              Today's Best <span className="gradient-text">Bundle Deals</span>
            </h2>
          </div>

          {/* Countdown timer */}
          <div style={{
            background: 'rgba(232,96,60,0.1)',
            border: '1px solid rgba(232,96,60,0.2)',
            borderRadius: '20px',
            padding: '20px 24px',
          }}>
            <div style={{ color: '#a89bc2', fontSize: '0.75rem', marginBottom: '10px', textAlign: 'center', letterSpacing: '0.1em' }}>
              ENDS IN
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {[
                { value: timeLeft.hours, label: 'HRS' },
                { value: timeLeft.minutes, label: 'MIN' },
                { value: timeLeft.seconds, label: 'SEC' },
              ].map((unit, i) => (
                <div key={unit.label} style={{ display: 'flex', alignItems: 'center', gap: i < 2 ? '12px' : '0' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      color: '#e8603c',
                      lineHeight: 1,
                      minWidth: '60px',
                      textAlign: 'center',
                      background: 'rgba(232,96,60,0.15)',
                      borderRadius: '12px',
                      padding: '8px',
                    }}>
                      {pad(unit.value)}
                    </div>
                    <div style={{ fontSize: '0.6rem', color: '#a89bc2', marginTop: '4px', letterSpacing: '0.1em' }}>
                      {unit.label}
                    </div>
                  </div>
                  {i < 2 && (
                    <span style={{ color: '#e8603c', fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>:</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deals grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '24px',
        }}
          className="deals-grid"
        >
          {flashDeals.map((deal, index) => {
            const discount = deal.originalPrice
              ? Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100)
              : 0;
            const isActive = activeIndex === index;

            return (
              <div
                key={deal.id}
                id={`deal-${deal.id}`}
                onClick={() => setActiveIndex(index)}
                className="card-hover"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: isActive ? '2px solid #e8603c' : '2px solid transparent',
                  background: 'rgba(45, 31, 61, 0.6)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={deal.image}
                    alt={deal.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Discount badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'linear-gradient(135deg, #e8603c, #c44e2c)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '50px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                  }}>
                    -{discount}%
                  </div>
                  {/* Hot tag */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}>
                    🔥 {deal.reviews} sold
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '20px' }}>
                  <span style={{ color: '#a89bc2', fontSize: '0.75rem' }}>{deal.category}</span>
                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'white',
                    margin: '6px 0 12px',
                  }}>
                    {deal.name}
                  </h3>

                  {/* Rating */}
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="stars">{'★'.repeat(Math.floor(deal.rating))}</span>
                    <span style={{ color: '#a89bc2', fontSize: '0.8rem' }}>{deal.rating}</span>
                  </div>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ color: '#e8603c', fontWeight: 900, fontSize: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
                        ₱{deal.price.toLocaleString()}
                      </span>
                      {deal.originalPrice && (
                        <span className="price-original" style={{ marginLeft: '8px', fontSize: '0.9rem' }}>
                          ₱{deal.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button style={{
                      background: 'linear-gradient(135deg, #e8603c, #c44e2c)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '18px',
                      transition: 'transform 0.2s ease',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1) rotate(0)')}
                    >
                      🛒
                    </button>
                  </div>

                  {/* Stock bar */}
                  <div style={{ marginTop: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ color: '#a89bc2', fontSize: '0.75rem' }}>Stock remaining</span>
                      <span style={{ color: '#e8603c', fontSize: '0.75rem', fontWeight: 700 }}>
                        {Math.floor(Math.random() * 20 + 5)} left
                      </span>
                    </div>
                    <div style={{
                      height: '6px',
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '3px',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${Math.floor(Math.random() * 40 + 30)}%`,
                        background: 'linear-gradient(90deg, #e8603c, #f5c518)',
                        borderRadius: '3px',
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all deals CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#shop" className="btn-primary" id="view-all-deals-btn" style={{ padding: '14px 40px', fontSize: '1rem' }}>
            ⚡ View All Deals
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .deals-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .deals-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default FlashDeals;
