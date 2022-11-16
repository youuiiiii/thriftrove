import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import aside context
import { SidebarContext } from '../contexts/SidebarContext';
// import cart context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { isOpen, handleOpen, handleClose } = useContext(SidebarContext);
  return (
    <aside
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } bg-blue-200 fixed top-0 w-[420px] h-full`}
    >
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div
              className='cursor-pointer text-2xl'
              onClick={() => removeFromCart(item.id)}
            >
              x
            </div>
          </div>
        );
      })}
      <Link to={`/cart`}>View cart</Link>
    </aside>
  );
};

export default Sidebar;
