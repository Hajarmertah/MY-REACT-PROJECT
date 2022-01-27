import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {UserContextProvider} from "./context/userContext";
import Style from './components/Style'

ReactDOM.render(
 
  <BrowserRouter> 
  <UserContextProvider>
    <App />
  </UserContextProvider>
  <Style/>
  </BrowserRouter>,

  document.getElementById('root')
);


