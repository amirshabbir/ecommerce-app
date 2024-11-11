import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './ProductPage.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false); 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true); 
    setTimeout(() => {
      setShowMessage(false); 
    }, 2000);
  };

  return (

    <>

    <div className={styles.productContainer}>
      {product && (
        <>

         <img
            className={styles.productImage}
            src={product.image}
            alt={product.title}
          />
          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>${product.price}</p>
            <button
              className={styles.addToCartButton}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
         
        </>
      )}
      
    </div>
    
      
      {showMessage && (
        <div className={styles.popupMessage}>
          Item added to cart!
        </div>
      )}
    </>
    
  );
};

export default ProductPage;
