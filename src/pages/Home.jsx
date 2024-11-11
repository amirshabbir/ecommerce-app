import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Home.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div>
      <h2 className='text-center'>Latest Product </h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
