import reactLogo from './assets/react.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementBy,
  reset,
} from './store/slices/counter';
import './App.css';

function App() {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1> Counter is {counter}</h1>
      <div className='card'>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          + 1
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          - 1
        </button>
        <button
          onClick={() => {
            dispatch(incrementBy(2));
          }}
        >
          Increment by 2
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
