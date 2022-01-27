import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {UserContextProvider} from "./context/userContext";
import Styles from './components/Styles'

ReactDOM.render(
 
  <BrowserRouter> 
  <UserContextProvider>
    <Styles/> 
    <App />
  </UserContextProvider>
  
  </BrowserRouter>,

  document.getElementById('root')
);


