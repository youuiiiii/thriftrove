import React, { useContext } from 'react';

// import product context
import { ProductContext } from '../contexts/ProductContext';
// import cart context
import { CartContext } from '../contexts/CartContext';
// import components
import Hero from '../components/Hero';
import Product from '../components/Product';

const Home = () => {
  const { products } = useContext(ProductContext);
  // get only women and men category items
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
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
