import React, { useContext, useEffect, useState } from 'react';
// import icons
import { BsBag } from 'react-icons/bs';
// import logo
import Logo from '../img/logo.svg';
// import link
import { Link } from 'react-router-dom';
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// import cart context
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const [active, setActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setActive(true) : setActive(false);
    });
  });
  return (
    <header
      className={`${
        active ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* logo */}
        <Link to='/'>
          <div>
            <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>

        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
          <BsBag className='text-2xl' />
          <div className='absolute -right-2 -bottom-2 text-[12px] bg-red-500 text-white w-[18px] h-[18px] rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
