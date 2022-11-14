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
    <div>
      <img src={image} alt='' />
    </div>
  );
};

export default ProductDetails;
