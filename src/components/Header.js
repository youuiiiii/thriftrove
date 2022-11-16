import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className='fixed bg-pink-200 w-full h-[80px] z-10'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <div>logo</div>
        <div onClick={() => setIsOpen(!isOpen)}>open sidebar</div>
      </div>
    </header>
  );
};

export default Header;
