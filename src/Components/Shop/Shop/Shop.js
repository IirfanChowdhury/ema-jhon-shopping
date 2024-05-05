import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product/Product';
import Cart from '../../Cart/Cart';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart , setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    useEffect(() => {
        const getStoredCart = getShoppingCart();
        const savedCart = [];
        for (const id in getStoredCart){
            const addedToCart = products.find(product => product.id === id)
           if(addedToCart){
            const quantity = getStoredCart[id]
            addedToCart.quantity = quantity;
            savedCart.push(addedToCart);
           }
        }
        console.log(savedCart);
        setCart(savedCart);
    },[products])

    const HandleAddToCartBtn = (selectedProduct) => {
        let newCart =[];
        const exist = cart.find(product=> product.id === selectedProduct.id)
        if(!exist){
            selectedProduct.quantity = 1
            newCart = [...cart , selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1
            newCart =[...rest , exist]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
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
                <Cart 
                cart = {cart}>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;