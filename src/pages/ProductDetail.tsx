import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate('/product');
  };
  return (
    <h1>
      Product Detail <button onClick={() => navigateToProduct()}>{id}</button>
    </h1>
  );
};

export default ProductDetail;
