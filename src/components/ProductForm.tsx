import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../store/product';
import { IProduct, IinitialState } from '../interface';
const ProductForm: React.FC = () => {
  const products = useSelector((state: IinitialState) => state.item.products);
  const dispatch = useDispatch();
  const [productName, setProductName] = useState<string>('');

  const addProductFunction = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      productAction.addProduct({
        name: productName,
        fav: true,
      }),
    );
  };

  return (
    <div>
      <form onSubmit={addProductFunction}>
        <input
          name='product_name'
          value={productName}
          placeholder='input product name'
          onChange={(e) => setProductName(e.target.value)}
        />
        <button type='submit' name='add_product'>
          Submit
        </button>
      </form>
      <div style={{ display: 'flex' }}>
        {products &&
          products.map((product: IProduct) => {
            return <h1>{product.name}</h1>;
          })}
      </div>
    </div>
  );
};

export default ProductForm;
