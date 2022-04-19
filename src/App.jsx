import '../src/Styles/App.css';
import '../src/Styles/mediaQueries.css'
import '../src/Styles/menu.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from "react";
import  {Redes} from './Components/redes';
// import { Home } from './Components/home';
import  {Nav}  from '../src/Components/nav';
import {Conocenos}  from '../src/Components/conocenos';
import  {MainMenu}  from '../src/Components/mainMenu';



const App = ()=>{
  return(
<  >
<Router >
 <Nav/>

      <Routes> 
        <Route path="/Inicio" element={<MainMenu/>} />
      <Route path='/' element={<MainMenu/>}/> 
       <Route path='/conocenos' element={<Conocenos/> } />
       
      </Routes> 

        <footer >
       <Redes/>
       </footer>
       </Router> 
       </>
   )
}


export default App;


