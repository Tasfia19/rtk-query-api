// src/components/Products.js
import React, { useEffect } from 'react';





  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          <p>${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
