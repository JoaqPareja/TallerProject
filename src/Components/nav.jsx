
// import '../Styles/App.css';
import React, { useState, useEffect  } from "react"
// import {Hamburger} from './ResponsiveMenu/Burger/burger'
// import {NavMenu} from './ResponsiveMenu/Menu/navMenu'
import {Link}  from "react-router-dom"
import UnderTest from '../../src/imgs/Under-Test.png'
import {NavMenu} from './ResponsiveMenu/Burger/navMenu';
import {Navbar} from "./ResponsiveMenu/Burger/navBar";
 
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
    <Link to='/' >
        <img src={UnderTest} alt="UnderTest" id="icon" />  <img/>      
        </Link>
        </div>
        {isDesktop ? ( <NavMenu  /> ) :(  <Navbar/> ) }
   
        {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <NavMenu open={open} setOpen={setOpen} id={menuId} /> */}
      </nav>
    </header>   
    </>
)
}
