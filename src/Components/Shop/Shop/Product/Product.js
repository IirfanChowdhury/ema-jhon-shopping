import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img ? img : ''} alt="" />
            <div className='product-details'>
            <h3>{name}</h3>
            <p className='price'>Price :$ {price}</p>
            <p><small> Manufacturer : {seller}</small></p>
            <p><small>Rating : {ratings} Star</small></p>
            </div>
            <button onClick={() => props.HandleAddToCart(props.product)}>Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
        </div>
    );
};

export default Product;