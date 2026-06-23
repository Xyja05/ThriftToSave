import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="footer" style={{
      background: 'linear-gradient(180deg, #1a1225 0%, #0d0a18 100%)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Newsletter banner */}
      <div style={{
        background: 'linear-gradient(135deg, #e8603c15, #7c3aed15)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '60px 5%',
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📧</div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '12px',
          }}>
            Get Early Access to <span className="gradient-text">New Arrivals!</span>
          </h2>
          <p style={{ color: '#a89bc2', marginBottom: '32px', lineHeight: 1.6 }}>
            Subscribe to our newsletter and be the first to know about new ukay-ukay hauls, flash sales, and exclusive deals!
          </p>

          {subscribed ? (
            <div style={{
              padding: '16px 32px',
              background: 'rgba(34,197,94,0.2)',
              border: '1px solid rgba(34,197,94,0.4)',
              borderRadius: '50px',
              color: '#22c55e',
              fontWeight: 700,
              fontSize: '1rem',
            }}>
              ✅ Subscribed! You'll be the first to know!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '12px', maxWidth: '480px', margin: '0 auto' }}>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '50px',
                  color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.9rem',
                }}
              />
              <button
                type="submit"
                id="newsletter-submit"
                className="btn-primary"
                style={{ whiteSpace: 'nowrap' }}
              >
                Subscribe 🎉
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '64px 5% 40px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '48px',
      }}
        className="footer-grid"
      >
        {/* Brand col */}
        <div>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #e8603c, #f5c518)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
            }}>
              🛍️
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: 'white' }}>
                ThriftTo<span style={{ color: '#e8603c' }}>Save</span>
              </div>
              <div style={{ fontSize: '0.6rem', color: '#a89bc2', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Ukay-Ukay Online
              </div>
            </div>
          </a>
          <p style={{ color: '#a89bc2', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '24px', maxWidth: '280px' }}>
            Your trusted online ukay-ukay store in the Philippines. Authentic pre-loved fashion at prices that won't break the bank.
          </p>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { icon: '📘', label: 'Facebook', id: 'footer-facebook' },
              { icon: '📸', label: 'Instagram', id: 'footer-instagram' },
              { icon: '🎵', label: 'TikTok', id: 'footer-tiktok' },
              { icon: '🐦', label: 'Twitter', id: 'footer-twitter' },
            ].map(social => (
              <button
                key={social.label}
                id={social.id}
                title={social.label}
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(232,96,60,0.2)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(232,96,60,0.4)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'white', marginBottom: '20px', fontSize: '1rem' }}>
            Quick Links
          </h4>
          {['Home', 'Shop All', 'New Arrivals', 'Flash Deals', 'Bundle Deals', 'Sold Out'].map(link => (
            <a
              key={link}
              href="#"
              style={{
                display: 'block',
                color: '#a89bc2',
                textDecoration: 'none',
                marginBottom: '10px',
                fontSize: '0.9rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e8603c')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a89bc2')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Categories */}
        <div>
          <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'white', marginBottom: '20px', fontSize: '1rem' }}>
            Categories
          </h4>
          {["Women's Wear", "Men's Wear", "Kids' Fashion", 'Bags & Purses', 'Shoes', 'Accessories', 'Bundle Packs'].map(cat => (
            <a
              key={cat}
              href="#"
              style={{
                display: 'block',
                color: '#a89bc2',
                textDecoration: 'none',
                marginBottom: '10px',
                fontSize: '0.9rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e8603c')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a89bc2')}
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'white', marginBottom: '20px', fontSize: '1rem' }}>
            Contact Us
          </h4>
          {[
            { icon: '📍', text: 'Divisoria, Manila, Philippines' },
            { icon: '📞', text: '+63 917 123 4567' },
            { icon: '📧', text: 'hello@thrifttosave.ph' },
            { icon: '🕐', text: 'Mon-Sat: 8AM - 8PM' },
          ].map(item => (
            <div
              key={item.text}
              style={{
                display: 'flex',
                gap: '10px',
                color: '#a89bc2',
                marginBottom: '14px',
                fontSize: '0.85rem',
                alignItems: 'flex-start',
              }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '20px 5%',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <p style={{ color: '#a89bc2', fontSize: '0.8rem' }}>
          © 2026 ThriftToSave. All rights reserved. Made with ❤️ in the Philippines.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Returns'].map(link => (
            <a
              key={link}
              href="#"
              style={{
                color: '#a89bc2',
                textDecoration: 'none',
                fontSize: '0.8rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e8603c')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a89bc2')}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
