import "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CodeLab } from './pages/CodeLab';
import App from './pages/App/Index';
import { Provider } from "react-redux";
import store from "./redux/store";

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <Provider store={store}>
    <div>
     <App />
   </div>
  </Provider>
 );
reportWebVitals();
