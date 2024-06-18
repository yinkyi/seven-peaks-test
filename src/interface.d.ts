export interface IAuth {
  isAuth: boolean;
  name: string;
}

export interface IProduct {
  name: string;
  fav: boolean;
}

export interface IProductData {
  products: IProduct[];
}

export interface ITest {
  test: string;
}
export interface IinitialState {
  auth: IAuth;
  item: IProductData;
  test: ITest;
}
