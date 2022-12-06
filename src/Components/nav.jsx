
import React, { useState, useEffect  } from "react"
// import {Hamburger} from './ResponsiveMenu/Burger/burger'
// import {NavMenu} from './ResponsiveMenu/Menu/navMenu'
import {Link}  from "react-router-dom"
import logo from '../../src/imgs/Background/Logo.jpeg' //Suegrito Project\src\imgs\Background\Logo.jpeg
import {NavMenu} from './ResponsiveMenu/Burger/navMenu';
import {Navbar} from "./ResponsiveMenu/Burger/navBar";
// Suegrito Project\src\imgs\Background\Licencia-apertura-taller.jpg
export const Nav = () => {
        const [isDesktop, setDesktop] = useState(window.innerWidth > 800);
        const updateMedia = () => {
          setDesktop(window.innerWidth > 800);
        };
 
        useEffect(() => {
            window.addEventListener("resize", updateMedia);
            return () => window.removeEventListener("resize", updateMedia);
          });
    
return(
    <>
<header>
    <nav className="navbar">
    <div id="navbarIMG" >
    <Link to='/'  >
        <img src={logo} alt="UnderTest" id="icon" />  <img/>      
        </Link>
        </div>
        {isDesktop ? ( <NavMenu  /> ) :(  <Navbar/> ) }
      </nav>
    </header>   
    </>
)
}
