import styled from 'styled-components';
import { Link } from 'react-router-dom'
// HeaderWrap,
// Title,
// List,
// ListItem,
// HeaderLink,



export const HeaderWrap = styled.header`
  background: #222;
  color: #fff;
  text-align: center;
  padding: 1.5rem;
`;


export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 0.5rem;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
`

export const ListItem = styled.li`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
`

export const HeaderLink = styled(Link)`
  margin: 10px 10px 10px 10px;
  color: #fff;
  text-decoration: none;
  &:hover { 
    transform: scale(1.15);
    transition: scale 1s ease;
    color: #379634;
  }
`