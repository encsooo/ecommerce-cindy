import React, { useState } from "react";
import Products from "./Product";

const Cart = (props) => {
//   //const ordersArray = Object.entries(data);
//   console.log(props.location.state);
//   const [products, setProducts] = useState(data);
//   console.log(products);
//   //Here we are using to array reduce method to check whether we have any orders or not.
//   const orderCheck = products.reduce((acc, num) => (acc += num[1]), 0);

//   //If there are any orders we need to display them within li tags. But only if the particular cocktail has been ordered. Else it will not show
//   //on the list.
//   const orderList = products.map(
//     (order, index) =>
//       order[1] > 0 && (
//         <li className="orders-li" key={index}>
//           {order[0]}
//           <span className="span">{order[1]}</span>
//         </li>
//       )
//   );

//   //   //If we find there are no orders we show this in our orders modal.
//   orderCheck === 0 &&
//     orderList.push(
//       <li className="orders-li" key={0}>
//         You have no orders!
//       </li>
//     );

  return <ul className="orders-ul"><h1>HELP</h1></ul>;
};

export default Cart;
