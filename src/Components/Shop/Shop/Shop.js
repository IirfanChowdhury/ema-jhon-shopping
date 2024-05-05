import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart , setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    const HandleAddToCartBtn = (product) => {
        const newCart = [...cart , product]
        setCart(newCart)
    } 
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                products.map(product => <Product
                key = {product.id}
                product = {product}
                HandleAddToCart ={HandleAddToCartBtn}
                ></Product>)
                }
            </div>

            <div className="cart-container">
                <h2>Order Summary</h2>
                <h5>{cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;