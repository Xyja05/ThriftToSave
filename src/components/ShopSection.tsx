import { useState } from 'react';
import { categories } from '../data';
import { products } from '../data';
import ProductCard from './ProductCard';

const filters = ['All', "Women's", "Men's", "Kids'", 'Bags', 'Shoes', 'Accessories'];

const ShopSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((p) => {
    const matchesFilter = activeFilter === 'All' || p.category === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="shop" style={{
      padding: '100px 5%',
      background: 'linear-gradient(180deg, #1a1225 0%, #251835 50%, #1a1225 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div className="section-blob" style={{
        width: '400px', height: '400px',
        background: '#7c3aed', top: '10%', right: '-100px',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            marginBottom: '16px',
          }}>
            ✨ FRESH FINDS
          </div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '16px',
          }}>
            Shop Our{' '}
            <span className="gradient-text">Latest Collection</span>
          </h2>
          <p style={{ color: '#a89bc2', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Curated pre-loved pieces updated weekly. All items are authenticated and quality-checked.
          </p>
        </div>

        {/* Category Quick Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '16px',
          marginBottom: '48px',
        }}
          className="categories-grid"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-${cat.id}`}
              onClick={() => setActiveFilter(cat.name)}
              style={{
                background: activeFilter === cat.name
                  ? 'rgba(232,96,60,0.2)'
                  : 'rgba(255,255,255,0.04)',
                border: activeFilter === cat.name
                  ? '1px solid rgba(232,96,60,0.5)'
                  : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '16px 8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                color: 'white',
              }}
              onMouseEnter={e => {
                if (activeFilter !== cat.name) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)';
                }
              }}
              onMouseLeave={e => {
                if (activeFilter !== cat.name) {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                }
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>{cat.icon}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: activeFilter === cat.name ? '#e8603c' : '#a89bc2' }}>
                {cat.name}
              </div>
              <div style={{ fontSize: '0.65rem', color: '#a89bc2', marginTop: '2px' }}>
                {cat.count} items
              </div>
            </button>
          ))}
        </div>

        {/* Filter pills + Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {filters.map((filter) => (
              <button
                key={filter}
                id={`filter-${filter.toLowerCase().replace(/[^a-z]/g, '')}`}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '50px',
                  border: '1px solid',
                  borderColor: activeFilter === filter ? '#e8603c' : 'rgba(255,255,255,0.1)',
                  background: activeFilter === filter ? 'rgba(232,96,60,0.2)' : 'transparent',
                  color: activeFilter === filter ? '#e8603c' : '#a89bc2',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '14px',
            }}>🔍</span>
            <input
              id="product-search"
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="input-field"
              style={{
                paddingLeft: '38px',
                width: '240px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50px',
                padding: '10px 16px 10px 38px',
                color: 'white',
                fontSize: '0.85rem',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            />
          </div>
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            color: '#a89bc2',
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🔍</div>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', color: 'white', marginBottom: '8px' }}>
              No items found
            </h3>
            <p>Try a different search or filter</p>
          </div>
        )}

        {/* Load more */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button id="load-more-btn" className="btn-outline" style={{ padding: '14px 40px' }}>
            Load More Items ↓
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .categories-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .categories-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default ShopSection;
