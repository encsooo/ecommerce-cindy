import React, {useContext} from "react";
import MyContext from '../context/MyContext'

import Product from "./Product";

const PorductList = () => {
const context = useContext(MyContext)
const {products} = context
console.log(products)

  const itemList = products.map((product) => (
    <div className="card">
      <Product key={product.id} product={product} />
    </div>
  ));

  return (
    <main>
        <div className="detail-container">{itemList}</div>
    </main>
  );
};

export default PorductList;
