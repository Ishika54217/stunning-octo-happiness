import { useState, useEffect } from 'react';

function ProductsPage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="products section">
      <div className="container">
        <h2 className="section__title">Products</h2>
        <span className="section__subtitle">All Hayday Products</span>
        
        <div className="products__content">
          <div className="products__image-container">
            <img 
              src="/assets/images/products.jpg"
              alt="Hayday Products"
              className={`products__image ${imageLoaded ? 'loaded' : ''}`}
              onClick={() => window.open('/assets/images/products.jpg', '_blank')}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;