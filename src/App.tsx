import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopSection from './components/ShopSection';
import FlashDeals from './components/FlashDeals';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <ShopSection />
        <FlashDeals />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />

      {/* Floating WhatsApp / Chat button */}
      <a
        id="chat-btn"
        href="https://wa.me/639171234567"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '56px',
          height: '56px',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '26px',
          boxShadow: '0 8px 30px rgba(37,211,102,0.4)',
          zIndex: 999,
          textDecoration: 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          animation: 'float 3s ease-in-out infinite',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.15)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px rgba(37,211,102,0.6)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 30px rgba(37,211,102,0.4)';
        }}
        title="Chat with us on WhatsApp"
      >
        💬
      </a>

      {/* Back to top button */}
      <button
        id="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '32px',
          width: '44px',
          height: '44px',
          background: 'rgba(232,96,60,0.2)',
          border: '1px solid rgba(232,96,60,0.4)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          cursor: 'pointer',
          zIndex: 999,
          color: '#e8603c',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(232,96,60,0.4)';
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(232,96,60,0.2)';
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
        }}
        title="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
