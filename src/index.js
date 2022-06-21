import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ValueContext, ValueProvide } from './contect/useTil/valueContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ValueProvide>
      <App />
    </ValueProvide>
);

