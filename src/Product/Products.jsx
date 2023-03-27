import React from 'react';
import "./Products.css"

const Products = (props) => {
    
    const { id, img, name, price, seller, stock } = props.product 
    // console.log(props.cartShow)
    const cartShow = props.cartShow;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card_info'>
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
                <h5>Manufacturer: {seller}</h5>
                <strong>Stock:{stock}</strong>
            </div>
            <button className='card_btn' onClick={() => cartShow(props.product)} >Add to Cart</button>
           
        </div>
    );
};

export default Products;