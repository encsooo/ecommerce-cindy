import React from "react";
import Header from "./Header";
import ProductList from "./PorductList";
import MyProvider from "../context/MyProvider";

const App = () => {
  return (
    <MyProvider>
      <main>
        <Header />
        <ProductList />
      </main>
    </MyProvider>
  );
};

export default App;