import React from 'react';
import styled from 'styled-components';
import {Burger} from '../Burger/burger';

const Nav = styled.nav`

  width: 100%;
  height: 65%;
  border-bottom: 2px solid #f1f1f1;
  // padding: 0 20px;
  display: flex;
  margin-left: 150%;
  // margin-right: 25%;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

export const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        
      </div>
      <Burger />
    </Nav>
  )
}

