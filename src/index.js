import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ValueProvide } from './contect/useTil/valueContext';
import { RenderP } from './contect/dataInput/dataInput';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ValueProvide>
     <RenderP>
      <App />
     </RenderP>
    </ValueProvide>
);

