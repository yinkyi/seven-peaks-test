import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetail: React.FC = () => {
  const { id } = useParams();
  return <h1>Product Detail {id}</h1>;
};

export default ProductDetail;
