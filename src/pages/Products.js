import React, { useState, useEffect, useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import context
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-4 gap-[30px]'>
        {products.map((product) => {
          // destructure product
          const { id, image, category, title, price } = product;
          return (
            <Link to={`/product/${id}`} key={id} className='group'>
              <div className='border border-[#E4E4E4] h-[400px] rounded flex justify-center items-center mb-4 group-hover:border-gray-400 transition cursor-pointer'>
                <div className='w-[200px] mx-auto flex justify-center items-center'>
                  <img
                    className='max-h-[200px] group-hover:scale-110 transition duration-300'
                    src={image}
                    alt=''
                  />
                </div>
              </div>
              <div className='text-sm capitalize text-gray-500 mb-1'>
                {category}
              </div>
              <h2 className='font-semibold mb-1'>{title}</h2>
              <span className='font-semibold'>${price}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
