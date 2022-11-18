import React, { useContext } from 'react';
// import links
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose } from 'react-icons/io';
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
      } bg-white shadow-2xl fixed top-0 w-[420px] h-full transition-all duration-300 z-20`}
    >
      {/* header */}
      <header className='bg-black text-white py-6 px-10 flex justify-between'>
        <div className='uppercase font-medium'>Shopping Bag({itemAmount})</div>
        <div onClick={handleClose} className='cursor-pointer'>
          <IoMdClose className='text-xl' />
        </div>
      </header>
      <div className='flex flex-col gap-y-2 px-10 py-[30px] max-h-[800px] overflow-y-auto'>
        {/* cart items */}
        {cart.map((item) => {
          const { id, title, image, amount } = item;
          return (
            <div
              className='flex justify-between gap-x-5 py-5 border-b border-gray-300'
              key={id}
            >
              <div>
                <img className='max-w-[80px]' src={image} alt='' />
              </div>
              <div className='flex-1'>
                {/* title */}
                <div className='mb-2 font-medium'>{title}</div>
                <div className='flex justify-between items-center'>
                  <div className='bg-pink-200 flex items-center gap-x-4'>
                    <div className='flex items-center w-[56px] justify-between text-sm text-gray-500'>
                      <div
                        className='text-xl cursor-pointer'
                        onClick={() => decreaseAmount(id)}
                      >
                        -
                      </div>
                      <div>{amount}</div>
                      <div
                        className='text-xl cursor-pointer'
                        onClick={() => increaseAmount(id)}
                      >
                        +
                      </div>
                    </div>
                    <div className='text-sm text-gray-500'>${item.price}</div>
                  </div>
                  <div className='text-base font-medium'>
                    {/* round number at 2 decimal places */}$
                    {parseFloat(item.price * amount).toFixed(2)}
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
        <div className='h-[30px] bg-black'>
          <Link to={`/cart`}>View cart</Link>
        </div>
        <div onClick={clearCart} className='cursor-pointer'>
          Clear cart
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
