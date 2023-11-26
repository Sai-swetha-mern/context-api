import './App.css';
import { useCart } from './CartContext';

function ProductList({ addToCart }) {
  let { product } = useCart();

  return (
    <div className='flex'>
      {product.map((productItem, productIndex) => (
        <div key={productIndex} style={{ width: '28%' }}>
          <div className='product-item'>
            <img src={productItem.url} width="80%" alt={productItem.name} />
            <p>{productItem.name} | {productItem.category}</p>
            <p>Rs. {productItem.price} /-</p>
            <button onClick={() => addToCart(productItem)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
