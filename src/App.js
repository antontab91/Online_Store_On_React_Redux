import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="dsa" > hello world</div>
    </Provider>
  );
}

export default App;
