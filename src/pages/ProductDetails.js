import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  // get single product
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section className=''>Loading...</section>;
  }

  // destructure product
  const { title, price, description, image, category } = product;
  return (
    <section className='py-32 h-screen'>
      <div className='container mx-auto'>
        <div className='flex bg-blue-200'>
          <div className='flex-1 flex justify-center items-center'>
            <img className='max-w-md' src={image} alt='' />
          </div>
          <div className='flex-1 bg-pink-200'>text</div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
