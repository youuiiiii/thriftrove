import React, { useContext } from 'react';
// import links
import { Link } from 'react-router-dom';
// import icons
import {
  IoMdClose,
  IoMdAdd,
  IoMdRemove,
  IoMdArrowForward,
} from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// import aside context
import { SidebarContext } from '../contexts/SidebarContext';
// import cart context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
  } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } bg-white shadow-2xl fixed top-0 w-[480px] h-full transition-all duration-300 z-20 px-[35px]`}
    >
      <div className='bg-white border-b py-6 flex justify-between items-center'>
        <div className='uppercase text-sm font-semibold'>
          Shopping Bag({itemAmount})
        </div>
        <div onClick={handleClose} className='cursor-pointer'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          const { id, title, image, price, amount } = item;
          return (
            <div
              className='flex gap-x-4 py-2 px-6 border-b border-gray-200 w-full font-light text-gray-500'
              key={id}
            >
              <div className='w-full min-h-[150px] flex items-center  gap-x-4'>
                {/* image */}
                <div>
                  <img className='max-w-[80px]' src={image} alt='' />
                </div>

                <div className='w-full flex flex-col'>
                  {/* title & remove item icon */}
                  <div className='flex justify-between mb-2'>
                    {/* title */}
                    <div className='mb-4 text-sm uppercase font-medium max-w-[240px] text-primary'>
                      {title}
                    </div>
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
                    <div className='flex flex-1 items-center h-full border text-primary font-medium'>
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
        })}
      </div>
      <div className='flex flex-col gap-y-2 py-4'>
        <div className='w-full flex justify-end'>
          <div
            onClick={clearCart}
            className='cursor-pointer py-4 bg-red-500 text-white flex justify-center items-center w-12 h-12 text-xl'
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          className='bg-gray-200 flex justify-center items-center text-primary p-4 w-full font-medium'
          to={`/cart`}
        >
          View cart
        </Link>
        <Link
          className='bg-black flex justify-center items-center text-white p-4 w-full'
          to={`/cart`}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
