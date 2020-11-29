/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './Typography';


export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * { 
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body { 
    font-size: 16px;
    box-sizing: border-box;
    font-family: ${primaryFont};
  }

  html { 
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *:before, *:after { 
    box-sizing: inherit;
  }
`