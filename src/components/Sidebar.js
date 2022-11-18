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
      <div className='bg-white border-b py-6 flex justify-between'>
        <div className='uppercase text-sm font-semibold'>
          Shopping Bag({itemAmount})
        </div>
        <div onClick={handleClose} className='cursor-pointer'>
          <IoMdArrowForward className='text-xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 py-[30px] h-[600px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          const { id, title, image, price, amount } = item;
          return (
            <div
              className='flex gap-x-4 py-5 border-b border-gray-200'
              key={id}
            >
              <div>
                <img className='max-w-[80px]' src={image} alt='' />
              </div>
              <div className='max-w-[270px]'>
                {/* title */}
                <div className='mb-4 text-sm uppercase font-medium max-w-[240px]'>
                  {title}
                </div>
                <div className='flex items-center gap-x-12'>
                  <div className='text-base font-light text-gray-500 flex items-center gap-x-4'>
                    {/* quantity field */}
                    <div className='flex w-[100px] h-10 items-center border'>
                      {/* remove icon */}
                      <div
                        onClick={() => decreaseAmount(id)}
                        className='flex-1 w-6 h-6 flex justify-center items-center cursor-pointer'
                      >
                        <IoMdRemove />
                      </div>
                      {/* quantity amount */}
                      <div className='flex-1 flex justify-center items-center text-primary font-medium text-sm'>
                        {amount}
                      </div>
                      {/* add icon */}
                      <div
                        onClick={() => increaseAmount(id)}
                        className='flex-1 flex justify-center items-center cursor-pointer'
                      >
                        <IoMdAdd />
                      </div>
                    </div>
                    <div className='text-primary text-sm'>${price}</div>
                  </div>
                  <div className=' text-primary font-semibold text-sm'>
                    ${parseFloat(item.price * amount).toFixed(2)}
                  </div>
                </div>
              </div>
              <div
                className='cursor-pointer text-xl'
                onClick={() => removeFromCart(id)}
              >
                <div>
                  <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
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
