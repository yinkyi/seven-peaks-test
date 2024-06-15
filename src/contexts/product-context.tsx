import React, { useReducer } from 'react';

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
  toggleFavourite: () => {},
});

type ProductsAction = { type: 'TOGGLE_FAVOURITE'; id: number };

const ProductsReducer = (state: IProduct[], action: ProductsAction): IProduct[] => {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      return state.map((product) =>
        product.id === action.id ? { ...product, favourite: !product.favourite } : product,
      );
    default:
      return state;
  }
};

export default function ProductsProvider(props: any) {
  const initialState: IProduct[] = [
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
  ];

  const [productListState, productListDispatch] = useReducer(ProductsReducer, initialState);
  const toggleFavouriteFun = (id: number) => {
    productListDispatch({
      type: 'TOGGLE_FAVOURITE',
      id: id,
    });
    // setProductList((currentProductList) => {
    //   const productIndex = currentProductList.findIndex((e) => e.id === id);
    //   const newToggleFavourite = !currentProductList[productIndex].favourite;
    //   const updateProduct = [...currentProductList];
    //   updateProduct[productIndex].favourite = newToggleFavourite;

    //   return updateProduct;
    // });
  };
  return (
    <ProductsContext.Provider
      value={{ products: productListState, toggleFavourite: toggleFavouriteFun }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
