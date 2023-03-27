import React, { useEffect, useState } from 'react';
import './Load.css'
import Products from '../Product/Products';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Loaddata = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const [cart, setCart] = useState([])
    
     const cartShow = (product) => {
       
         const newCart = [...cart, product]
         setCart(newCart)
         
    }
    return (
        <div className='container'>
            <div className='all_product'>
                <div className='products'>
                 {
              products.map(product => <Products  product={product} key ={product.id} cartShow ={cartShow} />)
            }
                </div>
                {/* CardPoduct */}
                <div className='cart_product'>
                    <h4>Order Summary</h4>
                    <div className="inner_Product">
                        <h4>Selected Items:{cart.length}</h4>
                        <h3>Total Price:</h3>
                        <h4>Total Shipping:</h4>
                        <div className='cart_btn'>
                            <button>Clear Cart</button>
                        <button>Review Order <FontAwesomeIcon icon={faCartShopping} /></button>
                        </div>
                    </div>
                </div>     
           </div>
        </div>
    );
};

export default Loaddata;