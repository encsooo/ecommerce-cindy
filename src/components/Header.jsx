import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";

const Header = (props) => {
  const name = process.env.REACT_APP_NAME;
  const [redirect, setRedirect] = useState("");


  return (
    <header>
      <img className="logo" src={Logo} alt={Logo} />
      <h1 className="headline">Shoe-a-Porter</h1>
      <p>cart: </p>
      <button><Link to="/cart">
        <p className="cart-icon">
          <i class="fas fa-shopping-cart"></i>
        </p>
      </Link></button>

      <p>hi, {name}</p>
      <button>
        <Link to="/">
        Log out
        </Link>
        </button>
    </header>
  );
};

export default Header
