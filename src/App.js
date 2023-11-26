
import './App.css';
import Header from './Header';

import ProductList from './ProductList.jsx';
import CartList from './CartList';
import { useState } from 'react';
import {CartProvider} from './CartContext';

function App() {

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <CartProvider>
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList addToCart={addToCart} ></ProductList>
      }


    </div>
    </CartProvider>
  );
}

export default App;