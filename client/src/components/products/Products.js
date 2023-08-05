import React from 'react'
import Product from '../product/Product';
import useFetch from '../hooks/useFetch.js';
import './products.css';

const Products = () => {
    const { data } = useFetch('/api/v1/hotel');
    // console.log(data);
    return (
        <div className='products-container'>
            {
                data.map((p) => (
                    <>
                        <Product p={p}  key={p._id}/>
                    </>
                ))
            }

        </div>
    )
}

export default Products