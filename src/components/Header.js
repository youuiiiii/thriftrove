import React, { useContext } from 'react';
// import icons
import { BsBag } from 'react-icons/bs';
// import logo
import Logo from '../img/logo.svg';
// import link
import { Link } from 'react-router-dom';
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className='fixed w-full h-[80px] z-10'>
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
