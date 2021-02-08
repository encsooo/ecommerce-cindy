import React, { useState } from "react";
import MyContext from "./MyContext";
import data from "../components/Data";

const MyProvider = (props) => {
  const [products, setProducts] = useState(data);
  const [cart, addToCart] = useState(data);

  return (
    <MyContext.Provider
      value={{
        products,
        cart,
        addToCart,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
