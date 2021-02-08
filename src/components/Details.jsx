import React, {useContext} from 'react'
import Header from './Header'
import {products} from '../context/MyContext'
import Product from './Product'


const Details = (props) => {
    // const { name, price, description, id, url } = product;
    // const context = useContext(MyContext);
    // const { setProducts, cartItems, setCartItems, products } = context;
    // console.log(product)
    

    return (
        <>
        <Header />

         <div className="detail-container">
            <div className="detail-card">
                <div className="add-cart">
                    <p className="detail-price">price€</p>
                    <button>Add to cart</button>
                </div>
                <img src="url" alt="name" />
                <p>name</p>
                <p>description</p>
                <button onClick={props.history.goBack}>Go back</button>
            </div>
        </div>
        </>
    )
}

export default Details
