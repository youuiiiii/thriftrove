import React, { useContext } from 'react';
// import links
import { Link } from 'react-router-dom';
// import icons
import { GrClose } from 'react-icons/gr';
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
      <header className='bg-gray-100 py-8 px-10 flex justify-between'>
        <div className='uppercase font-medium'>Shopping Bag({itemAmount})</div>
        <div onClick={handleClose} className='cursor-pointer'>
          <GrClose className='text-[18px]' />
        </div>
      </header>
      <div className='flex flex-col gap-y-2 px-10 py-[30px] max-h-[800px] overflow-y-auto'>
        {/* cart items */}
        {cart.map((item) => {
          const { id, title, image, amount } = item;
          return (
            <div
              className='flex justify-between gap-x-5 py-5 bg-pink-200'
              key={id}
            >
              <div>
                <img className='max-w-[80px]' src={image} alt='' />
              </div>
              <div className='flex-1'>
                {/* title */}
                <div>{title}</div>

                {/* quantity */}
                <div className='bg-green-400 flex items-center'>
                  {/* decrease amount */}
                  <div
                    className='text-2xl cursor-pointer'
                    onClick={() => decreaseAmount(id)}
                  >
                    -
                  </div>
                  {/* amount */}
                  <div>{amount}</div>
                  {/* increase amount */}
                  <div
                    className='text-2xl cursor-pointer'
                    onClick={() => increaseAmount(id)}
                  >
                    +
                  </div>
                </div>
              </div>
              <div
                className='cursor-pointer text-2xl'
                onClick={() => removeFromCart(id)}
              >
                <div>
                  <GrClose className='text-sm' />
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
