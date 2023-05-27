import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import '../csscomponents/Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search based on searchQuery
    console.log('Search Query:', searchQuery);
    // You can implement the search logic here, such as making an API request or updating search results in the component state.
    // Example: Call a search function passing searchQuery as an argument.
    // searchFunction(searchQuery);
  };

  return (
    <header className={`header ${isActive ? 'bg-white' : 'bg-transparent'}`}>
      <div className='container mx-auto'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='Logo' />
            <span>ThriftTrove</span>
          </Link>
        </div>
        <div className='nav'>
          <ul className='navbar-menu'>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
          <form className='search-form' onSubmit={handleSearchSubmit}>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <BsSearch className='search-icon' />
            </div>
          </form>
          <div onClick={() => setIsOpen(!isOpen)} className='cart-icon'>
            <BsBag className='text-2xl text-gray-800' />
            <div className='cart-badge'>{itemAmount}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
