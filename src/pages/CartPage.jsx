import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartPage.module.css';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty</p>
      ) : (
        <>
          <ul className={styles.cartItemList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.itemPrice}>${item.price}</span>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className={styles.total}>Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default CartPage;
