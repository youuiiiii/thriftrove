import React, { useContext } from 'react';
// import links
import { Link } from 'react-router-dom';
// import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// import components
import CartItem from './CartItem';
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// import cart context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { cart, clearCart, itemAmount } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } bg-white shadow-2xl fixed top-0 w-full lg:w-[35vw] h-full transition-all duration-300 z-20 px-4  lg:px-[35px]`}
    >
      <div className='bg-white border-b py-6 flex justify-between items-center'>
        <div className='uppercase text-sm font-semibold'>
          Shopping Bag({itemAmount})
        </div>
        <div onClick={handleClose} className='cursor-pointer'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
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
