import { useState } from 'react';
import { testimonials } from '../data';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" style={{
      padding: '100px 5%',
      background: 'linear-gradient(180deg, #251835 0%, #1a1225 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="section-blob" style={{
        width: '350px', height: '350px',
        background: '#f5c518', top: '10%', right: '-50px', opacity: 0.07,
      }} />
      <div className="section-blob" style={{
        width: '300px', height: '300px',
        background: '#e8603c', bottom: '10%', left: '5%',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(245,197,24,0.15)',
            border: '1px solid rgba(245,197,24,0.3)',
            borderRadius: '50px',
            padding: '6px 16px',
            color: '#f5c518',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            ⭐ CUSTOMER LOVE
          </div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '16px',
          }}>
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p style={{ color: '#a89bc2', maxWidth: '500px', margin: '0 auto' }}>
            Thousands of happy customers across the Philippines love shopping with us.
          </p>
        </div>

        {/* Featured testimonial (large) */}
        <div style={{
          background: 'rgba(45, 31, 61, 0.6)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          borderRadius: '28px',
          padding: 'clamp(32px, 5vw, 60px)',
          marginBottom: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Large quote mark */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '40px',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '10rem',
            color: 'rgba(232,96,60,0.1)',
            lineHeight: 1,
            fontWeight: 900,
            userSelect: 'none',
          }}>
            "
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '32px',
            alignItems: 'start',
          }}
            className="testimonial-layout"
          >
            {/* Avatar */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #e8603c',
                marginBottom: '12px',
              }}>
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                {testimonials[activeIndex].name}
              </div>
              <div style={{ color: '#a89bc2', fontSize: '0.75rem' }}>
                {testimonials[activeIndex].location}
              </div>
              <div style={{ color: '#a89bc2', fontSize: '0.7rem', marginTop: '2px' }}>
                {testimonials[activeIndex].date}
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Stars */}
              <div className="stars" style={{ fontSize: '1.2rem', marginBottom: '16px' }}>
                {'★'.repeat(testimonials[activeIndex].rating)}
              </div>
              <p style={{
                color: '#e8e0ff',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                lineHeight: 1.8,
                fontStyle: 'italic',
              }}>
                "{testimonials[activeIndex].comment}"
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial selector thumbnails */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}
          className="testimonials-grid"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              id={`testimonial-${testimonial.id}`}
              onClick={() => setActiveIndex(index)}
              style={{
                background: activeIndex === index ? 'rgba(232,96,60,0.15)' : 'rgba(45,31,61,0.5)',
                border: `1px solid ${activeIndex === index ? 'rgba(232,96,60,0.4)' : 'rgba(255,255,255,0.06)'}`,
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '16px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                if (activeIndex !== index) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)';
                }
              }}
              onMouseLeave={e => {
                if (activeIndex !== index) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(45,31,61,0.5)';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: activeIndex === index ? '2px solid #e8603c' : '2px solid transparent',
                  }}
                />
                <div>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '0.8rem' }}>{testimonial.name}</div>
                  <div className="stars" style={{ fontSize: '0.7rem' }}>{'★'.repeat(testimonial.rating)}</div>
                </div>
              </div>
              <p style={{
                color: '#a89bc2',
                fontSize: '0.75rem',
                lineHeight: 1.5,
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                textAlign: 'left',
              }}>
                {testimonial.comment}
              </p>
            </button>
          ))}
        </div>

        {/* Overall stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginTop: '48px',
        }}
          className="stats-bottom"
        >
          {[
            { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
            { value: '10,000+', label: 'Happy Customers', icon: '😊' },
            { value: '98%', label: 'Satisfaction Rate', icon: '💯' },
          ].map(stat => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '28px',
                background: 'rgba(45,31,61,0.4)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '2rem',
                fontWeight: 900,
                color: '#e8603c',
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{ color: '#a89bc2', fontSize: '0.85rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .testimonial-layout { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
