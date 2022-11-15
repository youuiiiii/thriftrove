import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  // get single product
  const product = products.find((item, index) => {
    return item.id === parseInt(id);
  });
  console.log(product);

  // destructure product
  const { title, price, description, image, category } = product;
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex'>
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
