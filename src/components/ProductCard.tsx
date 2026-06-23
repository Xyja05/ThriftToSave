import { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const conditionColor = {
    Excellent: '#22c55e',
    'Very Good': '#3b82f6',
    Good: '#f59e0b',
  }[product.condition];

  return (
    <div
      className="product-card card-hover glass"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      {/* Image container */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {/* Overlay on hover */}
        <div
          className="product-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '16px',
          }}
        >
          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              padding: '10px',
              background: addedToCart
                ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                : 'linear-gradient(135deg, #e8603c, #c44e2c)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '0.85rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            {addedToCart ? '✅ Added to Cart!' : '🛒 Add to Cart'}
          </button>
        </div>

        {/* Top badges row */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
          <div style={{ display: 'flex', gap: '6px', flexDirection: 'column' }}>
            {product.badge === 'sale' && discount && (
              <span className="badge-sale">-{discount}%</span>
            )}
            {product.badge === 'new' && (
              <span className="badge-new">NEW</span>
            )}
            {product.badge === 'hot' && (
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: 'white',
                fontSize: '0.65rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>🔥 HOT</span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            style={{
              background: 'rgba(26,18,37,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div style={{ padding: '16px' }}>
        {/* Category & Condition */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ color: '#a89bc2', fontSize: '0.75rem' }}>{product.category}</span>
          <span style={{
            fontSize: '0.7rem',
            color: conditionColor,
            border: `1px solid ${conditionColor}`,
            borderRadius: '20px',
            padding: '2px 8px',
            fontWeight: 600,
          }}>
            {product.condition}
          </span>
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 700,
          fontSize: '0.95rem',
          color: 'white',
          marginBottom: '8px',
          lineHeight: 1.3,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {product.name}
        </h3>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
          <div className="stars" style={{ fontSize: '0.8rem' }}>
            {'★'.repeat(Math.floor(product.rating))}
          </div>
          <span style={{ color: '#a89bc2', fontSize: '0.75rem' }}>
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{
              color: '#e8603c',
              fontWeight: 800,
              fontSize: '1.2rem',
              fontFamily: 'Outfit, sans-serif',
            }}>
              ₱{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="price-original" style={{ marginLeft: '8px' }}>
                ₱{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.size && (
            <span style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#a89bc2',
              padding: '3px 10px',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}>
              {product.size}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
