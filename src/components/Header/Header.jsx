import React from 'react';
import {
HeaderWrap,
Title,
List,
ListItem,
HeaderLink,
} from './HeaderElements'

const Header = () => { 
  return ( 
    <>
      <HeaderWrap>

        <Title>
          Music Searcher
        </Title>
        <List>
          <ListItem>
            <HeaderLink to='/'>Home</HeaderLink>
            <HeaderLink to='/about'>About</HeaderLink>
          </ListItem>
        </List>
      </HeaderWrap>
    </>
  )
}
export default Header;
