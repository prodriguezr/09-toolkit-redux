import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import { PokemonApp } from './PokemonApp';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store';
import { TodoApp } from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
