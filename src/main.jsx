import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import { StoreProvider } from './store/Store';
import { deliveryReducer, initialState } from './store/deliveryReducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={deliveryReducer} >
      <App />
    </StoreProvider>
  </React.StrictMode>,
)
