import React from 'react';
import {GlobalStyle} from  './styles/GlobalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
const App = () => {
 return (
    <> 
    <GlobalStyle /> 
    <BrowserRouter>
      <Switch>
        </Switch>    
      <Header /> 
      <Form />
    </BrowserRouter>
    </>
  )
};
export default App;
