import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

  let total=0;
  let shipping = 0;
  let quantity = 0; 
  for (const product of cart){
    quantity = quantity + product.quantity;
    total= total + product.price * product.quantity;
    shipping =shipping+product.shipping;
  }

  const tax = (total *0.1).toFixed(2);
  const newtax=JSON.parse(tax)
  const grand = total+shipping+newtax;

    return (
        <div className='carts'>
            <h1>This is Cart Container</h1>
            <p>Selected items: {quantity}</p>
            <p>Total price : {total}</p>
            <p>Shiiping Cost : {shipping}</p>
            <p>Tax : {tax}</p>
            <p>Grand total ={grand}</p>
        </div>
    );
};

export default Cart;