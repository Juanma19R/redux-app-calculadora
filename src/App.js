// Libraries 
import React from 'react';
import { Provider } from 'react-redux';

// Components
import {store} from './store/Store';
import AuthRouter from './router/AuthRouter';

// Styles
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AuthRouter/>
    </Provider>
  );
}

export default App;