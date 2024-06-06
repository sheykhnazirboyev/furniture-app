
import React from 'react';

const products = [
  { name: 'Syltherine', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', discount: '30%',  tag: 'Stylish cafe chair' },
  { name: 'Leviosa', price: 'Rp 2.500.000', oldPrice: '', discount: '',  tag: 'Stylish cafe chair' },
  { name: 'Lolito', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%',  tag: 'Luxury big sofa' },
  { name: 'Respira', price: 'Rp 500.000', oldPrice: '', discount: '',  tag: 'Outdoor bar table and stool', isNew: true },
  
];

const Shop = () => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-image">
            <img src={product.img} alt={product.name} />
            {product.discount && <div className="discount">{product.discount}</div>}
            {product.isNew && <div className="new">New</div>}
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.tag}</p>
            <div className="price">
              <span>{product.price}</span>
              {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;