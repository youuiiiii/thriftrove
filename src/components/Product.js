import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsFillEyeFill, BsEyeFill } from 'react-icons/bs';
// import cart context
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // destructure product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div>
        <div className='border border-[#E4E4E4] h-[300px]  mb-4 transition cursor-pointer group relative overflow-hidden'>
          <div className='w-full h-full flex justify-center items-center'>
            {/* image */}
            <div className='w-[200px] mx-auto flex justify-center items-center'>
              <img
                className='max-h-[160px] group-hover:scale-110 transition duration-300'
                src={image}
                alt=''
              />
            </div>
          </div>
          {/* buttons */}
          <div className='p-2 bg-red-200 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-6 -right-11 group-hover:right-5 hover:scale-110'>
            <button onClick={() => addToCart(product, id)}>
              <div className='bg-red-500 w-[]'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className='w-[30px] h-[30px] bg-white text-primary flex justify-center items-center'
            >
              <BsEyeFill className='text-2xl' />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>${price}</div>
      </div>
    </div>
  );
};

export default Product;
