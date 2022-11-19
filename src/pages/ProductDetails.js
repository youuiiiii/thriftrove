import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import cart context
import { CartContext } from '../contexts/CartContext';
// import product context
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get single product
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }
  // destructure product
  const { title, price, description, image, category } = product;
  return (
    <section className='py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex items-center'>
          <div className='flex-1 flex justify-center items-center'>
            <img className='max-w-md' src={image} alt='' />
          </div>
          <div className='flex-1'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px]'>
              {title}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-8'>
              $ {price}
            </div>
            <p className='mb-12'>{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className='bg-primary py-4 px-8 text-white'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
