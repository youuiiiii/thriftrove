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
      <div className='flex flex-col gap-y-2 py-[30px] h-[600px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          const { id, title, image, price, amount } = item;
          return (
            <div
              className='flex gap-x-4 py-4 px-2 border-b border-gray-200 bg-purple-100 w-full'
              key={id}
            >
              <div className='w-full min-h-[160px] flex gap-x-3'>
                {/* image */}
                <div>
                  <img className='max-w-[80px]' src={image} alt='' />
                </div>

                <div className='bg-red-300 w-full flex flex-col'>
                  {/* title & remove item icon */}
                  <div className='flex justify-between'>
                    {/* title */}
                    <div className='mb-4 text-sm uppercase font-medium max-w-[240px]'>
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
                  <div className='flex gap-x-2 h-[40px]'>
                    {/* quantity */}
                    <div className='flex bg-red-500 flex-1 items-center h-full'>
                      {/* icon remove */}
                      <div className='flex-1 bg-yellow-300 h-full flex justify-center items-center'>
                        <IoMdRemove />
                      </div>
                      {/* amount */}
                      <div className='flex-1 bg-yellow-300 h-full flex justify-center items-center'>
                        {amount}
                      </div>
                      {/* icon add */}
                      <div className='flex-1 bg-yellow-300 h-full flex justify-center items-center'>
                        <IoMdAdd />
                      </div>
                    </div>
                    {/* item price */}
                    <div className='bg-yellow-300 flex-1'>price</div>
                    {/* final price */}
                    <div className='bg-green-300 flex-1'>final price</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col justify-center items-center h-[260px]'>
        <div onClick={clearCart} className='cursor-pointer text-red-500'>
          Clear cart
        </div>
        <Link className=' bg-black text-white p-4 w-full' to={`/cart`}>
          View cart
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
