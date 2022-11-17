import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsPlus } from 'react-icons/bs';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import cart context
import { CartContext } from '../contexts/CartContext';
// import components
import Hero from '../components/Hero';

const Home = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get women and men category items
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredProducts.map((product) => {
            // destructure product
            const { id, image, category, title, price } = product;
            return (
              <div key={id}>
                <div>
                  <div className='border border-[#E4E4E4] h-[300px]  mb-4 transition cursor-pointer group relative overflow-hidden'>
                    <Link to={`/product/${id}`}>
                      <div className='w-full h-full flex justify-center items-center'>
                        {/* image */}
                        <div className='w-[200px] mx-auto flex justify-center items-center'>
                          <img
                            className='max-h-[160px] group-hover:scale-110 transition duration-300'
                            src={image}
                            alt=''
                          />
                        </div>
                      </div>
                    </Link>
                    {/* button */}
                    <button
                      onClick={() => addToCart(product, id)}
                      className='p-2 bg-red-500 text-white flex items-center justify-center gap-x-4 rounded-full px-4 w-10 h-10 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-6 -right-11 group-hover:right-5 hover:scale-110'
                    >
                      <div>
                        <BsPlus className='text-4xl' />
                      </div>
                    </button>
                  </div>
                </div>
                <div>
                  <div className='text-sm capitalize text-gray-500 mb-1'>
                    {category}
                  </div>
                  <Link to={`/product/${id}`}>
                    <h2 className='font-semibold mb-1'>{title}</h2>
                  </Link>
                  <div className='font-semibold'>${price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
