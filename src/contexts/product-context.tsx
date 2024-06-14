import React, { useState } from 'react';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  favourite: boolean;
}

interface IProductsContext {
  products: IProduct[];
  toggleFavourite: (id: number) => void;
}

export const ProductsContext = React.createContext<IProductsContext>({
  products: [],
  toggleFavourite: (id: number) => {},
});

export default (props: any) => {
  const [productList, setProductList] = useState<IProduct[]>([
    {
      id: 1,
      name: 'Test',
      price: 100,
      description: 'bla bla',
      favourite: false,
    },
    {
      id: 2,
      name: 'Baby',
      price: 100,
      description: 'baby baby',
      favourite: false,
    },
  ]);
  const toggleFavouriteFun = (id: number) => {
    debugger;
    setProductList((currentProductList) => {
      const productIndex = currentProductList.findIndex((e) => e.id === id);
      const newToggleFavourite = !currentProductList[productIndex].favourite;
      const updateProduct = [...currentProductList];
      updateProduct[productIndex].favourite = newToggleFavourite;

      return updateProduct;
    });
  };
  return (
    <ProductsContext.Provider
      value={{ products: productList, toggleFavourite: toggleFavouriteFun }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
