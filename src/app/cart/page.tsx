'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the type for a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart) as CartItem[]);
    }
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
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
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <Image src={item.image} alt={item.name} width={300} height={200} />
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
    </div>
  );
};

export default Cart;
