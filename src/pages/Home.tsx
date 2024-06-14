import { useContext } from 'react';
import { IProduct, ProductsContext } from '../contexts/product-context';

const Home: React.FC = () => {
  const { products: productList, toggleFavourite } = useContext(ProductsContext);
  console.log('productList', productList);
  return (
    <>
      {productList.map((product) => {
        return (
          <div>
            {product.name}{' '}
            <button
              value={product.id}
              style={{ color: 'black' }}
              onClick={() => toggleFavourite(product.id)}
            >
              {product.favourite ? 'true' : 'false'}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Home;
