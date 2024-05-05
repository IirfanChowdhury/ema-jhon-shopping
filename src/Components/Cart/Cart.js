import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let grandTotal = 0;
    let price = 0;
    let shippingPrice = 0;
    let quantity = 0;
    for (const product of cart){
        price = price + product.price * product.quantity ;
        shippingPrice = shippingPrice + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = (price * 20 / 100).toFixed(2) ;
    grandTotal = price + shippingPrice + parseInt(tax);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h5>Selected Items : {quantity}</h5>
            <h5>Price : {price}</h5>
            <h5>Shipping Price : {shippingPrice}</h5>
            <h5>Tax : {tax}</h5>
            <h5>Grand Total : {grandTotal}</h5>
        </div>
    );
};

export default Cart;