import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
display: flex;
justify-content: center;
align-items: center;
grid-column: 2 / 2;
color: #101010;
// position: absolute;

  li {

    overflow: hidden;
   margin-left: 3.5rem;
   font-size: clamp(1rem, 2rem, 3rem);
   font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   color: #101010;
    
  }
  li a{
    text-decoration: none;
  }

  @media (max-width: 800px) {
    position: absolute;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    background-color: #f9fcfc;
    
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    // top: 100%;
    right: 0;
    height: 5%;
    width: 100%;
    margin-top: 10%;
    transition: transform 0.3s ease-in-out;
    
    li {
      padding-left: 2.5%;
      padding-right: 2.5%;
      // margin: 1.5rem 0;
      font-size: 2rem;
       margin-left: 0px;
      // margin-right: 150px;
    }


    
  }
`;
export const NavMenu = ( {open}) => {

return(
<Ul open={open} >
    <li ><Link to="/">Inicio</Link></li>
    <li> <Link to="/Conocenos">Conocenos</Link></li>
    <li >Blog</li>
    </Ul>

)
}

