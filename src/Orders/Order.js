import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <h2>This is the page of order!!!  total products: {products.length}</h2>
            
        </div>
    );
};

export default Order;