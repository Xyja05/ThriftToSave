const steps = [
  {
    number: '01',
    icon: '🔍',
    title: 'Browse & Discover',
    description: 'Explore thousands of authenticated pre-loved items across all categories. Filter by size, condition, brand, and price.',
    color: '#e8603c',
  },
  {
    number: '02',
    icon: '🛒',
    title: 'Add to Cart',
    description: 'Found something you love? Add it to your cart and continue shopping. We hold items for 24 hours after you add them.',
    color: '#7c3aed',
  },
  {
    number: '03',
    icon: '💳',
    title: 'Secure Checkout',
    description: 'Pay safely via GCash, Maya, bank transfer, or COD. All transactions are encrypted and protected.',
    color: '#f5c518',
  },
  {
    number: '04',
    icon: '📦',
    title: 'Fast Delivery',
    description: 'Get your thrift finds delivered same-day in Metro Manila, or nationwide in 2-5 days. Free shipping for ₱500+!',
    color: '#22c55e',
  },
];

const paymentMethods = ['GCash', 'Maya', 'BPI', 'BDO', 'COD', 'Metrobank'];

const HowItWorks = () => {
  return (
    <section id="how-it-works" style={{
      padding: '100px 5%',
      background: '#1a1225',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="section-blob" style={{
        width: '400px', height: '400px',
        background: '#22c55e', top: '20%', left: '-100px',
      }} />
      <div className="section-blob" style={{
        width: '300px', height: '300px',
        background: '#f5c518', bottom: '10%', right: '5%', opacity: 0.08,
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '50px',
            padding: '6px 16px',
            color: '#c084fc',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            🚀 SIMPLE PROCESS
          </div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '16px',
          }}>
            How <span className="gradient-text-purple">ThriftToSave</span> Works
          </h2>
          <p style={{ color: '#a89bc2', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Shop smart in just 4 easy steps. No fuss, no drama — just great deals delivered to your door.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          marginBottom: '80px',
        }}
          className="steps-grid"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className="card-hover"
              style={{
                background: 'rgba(45, 31, 61, 0.5)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                padding: '32px 24px',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '52px',
                  right: '-20px',
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)',
                  zIndex: 1,
                }}
                  className="connector-line"
                />
              )}

              {/* Step number */}
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '3rem',
                fontWeight: 900,
                color: step.color,
                opacity: 0.15,
                lineHeight: 1,
                marginBottom: '-16px',
              }}>
                {step.number}
              </div>

              {/* Icon */}
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '16px',
                display: 'inline-block',
                background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                lineHeight: '70px',
                border: `1px solid ${step.color}30`,
              }}>
                {step.icon}
              </div>

              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'white',
                marginBottom: '12px',
              }}>
                {step.title}
              </h3>
              <p style={{ color: '#a89bc2', fontSize: '0.85rem', lineHeight: 1.7 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div style={{
          textAlign: 'center',
          padding: '48px',
          background: 'rgba(45, 31, 61, 0.4)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '24px',
          backdropFilter: 'blur(20px)',
        }}>
          <h3 style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            fontSize: '1.3rem',
            color: 'white',
            marginBottom: '8px',
          }}>
            💳 Accepted Payment Methods
          </h3>
          <p style={{ color: '#a89bc2', fontSize: '0.85rem', marginBottom: '28px' }}>
            Multiple secure payment options available
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {paymentMethods.map(method => (
              <div
                key={method}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(232,96,60,0.15)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(232,96,60,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                {method}
              </div>
            ))}
          </div>

          {/* Guarantee badges */}
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
            {[
              { icon: '🔒', text: 'Secure Payments' },
              { icon: '✅', text: 'Authenticated Items' },
              { icon: '↩️', text: '3-Day Returns' },
              { icon: '💬', text: '24/7 Support' },
            ].map(badge => (
              <div key={badge.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a89bc2', fontSize: '0.85rem' }}>
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .connector-line { display: none !important; }
        }
        @media (max-width: 500px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
