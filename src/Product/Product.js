import React from 'react';
import './Product.css'
const Product = ({handleaddtoCart, product}) => {
    const{name, img, seller, price, ratings} = product;
    return (
       <div>
         <div className='product'>
            <img src={img} alt="" />
            <h3> {name}</h3>
            <p>Price:{price}</p>
            <p>Seller: {seller}</p>
            <p>Rating: {ratings} star</p>
            <button className='btn' onClick={()=>handleaddtoCart(product)}>Add to Cart</button>
        </div>
        
       </div>
    );
};

export default Product;