import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SetTitleCateProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SetTitleCateProvider>
      <App />
    </SetTitleCateProvider>
  </React.StrictMode>
);

