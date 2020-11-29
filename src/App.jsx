import React from 'react';
import {GlobalStyle} from  './styles/GlobalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
const App = () => {
 return (
    <> 
    <GlobalStyle /> 
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} /> 
        </Switch>    
    </BrowserRouter>
    </>
  )
};
export default App;
