// cart/page.tsx
'use client';

import { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item: any) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert('Proceeding to Checkout');
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item: any) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      <button onClick={handleCheckout} className="checkout-button">Checkout</button>
      <style jsx>{`
        .cart-container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
          text-align: center;
        }
        .cart-items {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }
        .cart-item {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
        }
        .cart-item img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin-right: 20px;
        }
        .checkout-button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
        }
        .checkout-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default Cart;
