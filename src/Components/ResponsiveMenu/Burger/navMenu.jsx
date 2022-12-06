import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`

display: flex;
justify-content: space-between;
justify-content: left;
// align-items: left;
margin-right: 80%;
 grid-column: 2 / 2;
color: #101010;
// position: absolute;

  li {
    // color: rgb(219, 212, 212)!important;
  overflow: hidden;
   margin-left: 5rem;
   font-size: clamp(1rem, 2rem, 3rem);
   font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  //  color: #101010;
    
  }
  li a{
    text-decoration: none;
    color: rgb(107, 122, 197)!important;
  }
  
  @media only screen and  (min-width: 310px) and (max-width: 358px){
    margin-right: 60%;
    margin-top: 0%;
   
    li{
     
      margin-left: 3%;
    }
  }
  @media only screen and  (min-width: 359px) and (max-width: 382px){
    margin-right: 60%;
    margin-top: 0%;
    
    li{
     
      margin-left: 6%;
    }
  }
  @media only screen and  (min-width: 383px) and (max-width: 421px){
    margin-right: 60%;
    margin-top: 0%;
    
    li{
     
      margin-left: 6%;
    }
  }
  @media only screen and  (min-width: 425px) and (max-width: 450){
    margin-right: 60%;
    margin-top: -1;
    height: 15%;
    li{
     
      margin-left: 10%;
    }
  }

  
  @media only screen and  (min-width: 240px) and (max-width: 800px) {
    background-color: rgb(202, 205, 219)!important;
        right: 40%;
    position: absolute;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    background-color: #f9fcfc;
    
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    
    display: flex;
    justify-content: space-between;
    justify-content: left;
    align-items: left;
    top: 12%;
    
    // left: 110%
    height: 10%;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    li {
      padding-left: 6%;
      // padding-right: 2%;
      // margin: 1.5rem 0;
      font-size: 2rem;
      //  margin-left: 30px;
      // margin-right: 150px;
    }

   
  }

`;
export const NavMenu = ( {open}) => {

return(
<Ul id='navMenu360' open={open} >
    <li ><Link to="/">Inicio</Link></li>
    <li> <Link to="/Conocenos" >Conocenos</Link></li>
    {/* <li >Blog</li> */}
    </Ul>

)
}

