import React, { createContext, useContext, useState } from 'react';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([
    
  
    {
      url:"https://th.bing.com/th/id/OIP.3U5kL-4QPX4aoCWY-OChFQHaFe?w=222&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      name:"One plus",
      price:35000,
      rating:"⭐⭐⭐⭐",
    }, {
      url:"https://th.bing.com/th?q=Redmi+Note+7+Pro+Caracteristicas&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      name:"Redmi note 12 pro",
      price:17000,
      rating:"⭐⭐⭐"
    },
   
    {
      url:"https://th.bing.com/th/id/OIP.AbU5vjKcjPQrptXFr5_d1AHaIg?w=169&h=194&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      name:"Sony Xperia 10",
      price:22000,
      rating:"⭐⭐⭐",
    },
   
  
    {
      url:"https://th.bing.com/th/id/OIP.a9qDEtC967v_9-JNkYs5rAHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      name:"Samsung Galaxy s23 ultra",
      price:"$200-$300",
      rating:"⭐⭐⭐⭐",
    },
  
    
 {
      url:"https://th.bing.com/th/id/OIP.yzu_DuNVskMsFbb98-3xSAHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      name:"Google pixel",
      price:50000,
      rating:"⭐⭐⭐⭐"
    
    },
    {
      url:"https://th.bing.com/th/id/OIP.4ZZcNFdO8UWAXH9hIyZcTAHaEU?w=274&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      name:"Samsung Galaxy s22",
      price:37000,
      rating:"⭐⭐⭐⭐⭐",
    },
    
    
  ])

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((cartItem, index) =>
        index === existingItemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{product,setProduct, cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};