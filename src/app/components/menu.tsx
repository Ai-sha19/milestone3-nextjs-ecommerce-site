"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ProductCard from "./product-api";
// app/components/ProductCard.tsx
// Correct import path if types.ts is in the 'app/types' folder
// import { Product } from "../app/type/type.ts";  
import { Product } from "../../type/type";




const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  const router = useRouter(); // Move this outside the function scope

  // Fetch products and load cart from localStorage
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Proceed to checkout
  const goToCheckout = () => {
    setIsCheckout(true);
    router.push("/checkout");
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/OIP.BIBwKWwe5ERAnsvTCUAxBAHaEo?rs=1&pid=ImgDetMain')",
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-red mb-4">OUR BEST PRODUCTS</h1>
          <p className="text-xl text-white">
            Explore our section of attractive items to order now!
          </p>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-[#2a254b]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-[#403872] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#2a254b] transition duration-300 ease-out transform"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>
          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-[#2a254b]">
                Your Cart Items Includes
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
                      >
                        <img
                          src={product.image}
                          alt={product.image}
                          className="w-20 h-40 sm:w-24 inline-block transform duration-300 ease-in-out transform text-black"
                        />
                        <span className="ml-4 text-lg font-medium text-slate-600">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>
                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-[#2a254b] py-3 px-8 rounded-lg text-lg shadow-md hover:bg-[#2a254b] transition duration-300 ease-in-out  transform hover:scale-110 text-white"
                      >
                        Proceed To Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="bg-[#403972] py-3 px-8 rounded-lg text-lg shadow-md hover:bg-[#2a254b] transition duration-300 ease-in-out  transform hover:scale-110 text-white "
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-600">Your cart is empty</p>
              )}
            </div>
          )}
        </div>
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-[#2a254b] mb-4">
                Checkout
              </h2>
              <p className="text-lg text-[#2a254b]">
                Please confirm your order before proceeding
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total: </span>
                  <span className="font-semibold">
                    $
                    {cart.reduce(
                      (total, product) => total + product.price,
                      0
                    )}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-600 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => alert("Thank you for confirming your order!")}
                  className="bg-[#3d366d] text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-[#2a254b] transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;