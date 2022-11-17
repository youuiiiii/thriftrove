import React, { useContext, useEffect, useState } from 'react';
// import icons
import { BsBag } from 'react-icons/bs';
// import logo
import Logo from '../img/logo.svg';
// import link
import { Link } from 'react-router-dom';
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {
  const [active, setActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
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
        <Link to='/'>
          <div>
            <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex'>
          <BsBag className='text-2xl' />
        </div>
      </div>
    </header>
  );
};

export default Header;
