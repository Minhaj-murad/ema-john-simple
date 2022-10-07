import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart,setCarts]=useState([])
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
       
         const storedcart =getStoredCart ()
         const savedCart =[]
         for (const id in storedcart){
            const addedproduct = products.find(product => product.id === id)
            if(addedproduct){
                const quantity = storedcart[id]
                addedproduct.quantity=quantity
                savedCart.push(addedproduct)
            }
         }
         setCarts(savedCart)
    } ,[products])
    
    const handleaddtoCart =(selectedProduct) => {
        let newCart =[];
        const exists = cart.find(product =>product.id === selectedProduct.id)
        if (!exists){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity= exists.quantity+1;
            newCart =[...rest, exists]
        }
        setCarts(newCart)
        addToDb(selectedProduct.id)

           
    }
    return (
        <div className='shop-container'>
           <div className="product-container">
              {
              products.map(product => <Product key={product.id}
              product={product}
              handleaddtoCart ={handleaddtoCart}
              ></Product>)

              }
           </div>
           <div className="cart-container">
             <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;