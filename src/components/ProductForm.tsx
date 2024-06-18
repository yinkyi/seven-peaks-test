import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../store/product';
import { IProduct, IinitialState } from '../interface';
const ProductForm: React.FC = () => {
  const products = useSelector((state: IinitialState) => state.item.products);
  const test = useSelector((state: IinitialState) => state.test);
  console.log(test.test);
  const dispatch = useDispatch();
  const [productName, setProductName] = useState<string>('');
  const productRef = useRef<HTMLInputElement>(null);

  const addProductFunction = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      productAction.addProduct({
        name: productName,
        fav: true,
      }),
    );
    setProductName('');
    productRef.current?.focus();
  };

  return (
    <div>
      <form onSubmit={addProductFunction}>
        <input
          ref={productRef}
          name='product_name'
          value={productName}
          placeholder='input product name'
          onChange={(e) => setProductName(e.target.value)}
        />
        <button type='submit' name='add_product'>
          Submit
        </button>
      </form>
      <div style={{ display: 'block' }}>
        {test.test}
        {products &&
          products.map((product: IProduct) => {
            return (
              <div
                style={{
                  margin: '2px',
                  border: 'solid  1px',
                  padding: '10px',
                  borderRadius: '12px',
                }}
              >
                {product.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductForm;
