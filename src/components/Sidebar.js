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
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } bg-blue-200 fixed top-0 w-[420px] h-full transition-all duration-300 z-20 px-2`}
    >
      <div onClick={handleClose} className='cursor-pointer'>
        <GrClose className='text-2xl' />
      </div>
      {cart.map((item) => {
        return (
          <div className='flex items-center gap-x-3' key={item.id}>
            <div>{item.title}</div>
            <div
              className='cursor-pointer text-2xl'
              onClick={() => removeFromCart(item.id)}
            >
              <GrClose className='text-sm' />
            </div>
          </div>
        );
      })}
      <Link to={`/cart`}>View cart</Link>
      <div onClick={clearCart} className='cursor-pointer'>
        Clear cart
      </div>
    </div>
  );
};

export default Sidebar;
