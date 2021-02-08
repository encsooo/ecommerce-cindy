import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { name, price, description, id, url, quantity, total } = product;
  const context = useContext(MyContext);
  const { setProducts, cart, addToCart, products, inCart } = context;


  return (
    <div>
      <Link to="/productInfo">
      <div className="img-container">
        <img className="product-img" src={url} alt={name} />
        <h2>{name}</h2>
      </div>
      <p>{price}€</p>
      </Link>
      <button onClick={() => {
          return {quantity: 1 }   //FIX THIS
        }
      }>
        Add to cart
      </button>
    </div>
  )
};


export default Product;