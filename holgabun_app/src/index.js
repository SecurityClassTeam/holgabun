import React from 'react';
import ReactDOM from 'react-dom';
import "./index.js"
import App from './App';
import SignPad from "./components/Signature"
import Signature from './components/Signature';


ReactDOM.render(
  <React.StrictMode>
    <Signature />
  </React.StrictMode>,
  document.getElementById('root')
);
