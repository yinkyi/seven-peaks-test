import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { IinitialState, authAction } from './store/auth';
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
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
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
