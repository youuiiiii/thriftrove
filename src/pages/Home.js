import React, { useState, useEffect, useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import context
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
// import components
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get only women's and men's category items
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <HeroSlider />
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredProducts.map((product) => {
            // destructure product
            const { id, image, category, title, price } = product;
            return (
              <div key={id}>
                <div className='border border-[#E4E4E4] h-[300px] rounded flex justify-center items-center mb-4 group-hover:border-gray-400 transition cursor-pointer group'>
                  <Link to={`/product/${id}`}>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                      <img
                        className='max-h-[160px] group-hover:scale-110 transition duration-300'
                        src={image}
                        alt=''
                      />
                    </div>
                  </Link>
                </div>
                <div className='text-sm capitalize text-gray-500 mb-1'>
                  {category}
                </div>
                <h2 className='font-semibold mb-1'>{title}</h2>
                <div className='font-semibold'>${price}</div>
                <button
                  onClick={() => addToCart(product, id)}
                  className='bg-gray-200 p-2'
                >
                  add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
