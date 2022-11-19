import React, { useContext } from 'react';
// import icons
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import cart context
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { increaseAmount, decreaseAmount, removeFromCart } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div
      className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'
      key={id}
    >
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
        </Link>

        <div className='w-full flex flex-col'>
          {/* title & remove item icon */}
          <div className='flex justify-between mb-2'>
            {/* title */}
            <Link
              to={`/product/${id}`}
              className='mb-4 text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
            >
              {title}
            </Link>
            {/* remove item icon */}
            <div
              className='cursor-pointer text-xl'
              onClick={() => removeFromCart(id)}
            >
              <div>
                <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
              </div>
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* quantity */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* icon remove */}
              <div
                onClick={() => decreaseAmount(id)}
                className='flex-1 h-full flex justify-center items-center cursor-pointer'
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className='h-full flex justify-center items-center px-2'>
                {amount}
              </div>
              {/* icon add */}
              <div
                onClick={() => increaseAmount(id)}
                className='flex-1 h-full flex justify-center items-center cursor-pointer'
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className='flex-1 flex items-center justify-around'>
              $ {price}
            </div>
            {/* final price */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>
              {/* make the price at 2 decimals */}
              {`$ ${parseFloat(item.price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
