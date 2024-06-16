import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from './store/auth';
import Index from './pages/Index';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import { IinitialState } from './interface';
function App() {
  const [count, setCount] = useState(0);
  const auth = useSelector((state: IinitialState) => state.auth);
  const dispatch = useDispatch();

  const setUserAuth = () => {
    dispatch(
      authAction.login({
        isAuth: true,
        name: 'Yin After',
      }),
    );
  };
  return (
    <>
      <Index />
      <Routes>
        <Route path='/' element={<Product />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      {/* <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div> */}
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setUserAuth()}>Set Auth</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>{auth.name}</p>
    </>
  );
}

export default App;
