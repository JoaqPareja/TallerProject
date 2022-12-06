import './Styles/App.css';
import './Styles/mediaQueries.css'
import './Styles/menu.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from "react";
import  {Redes} from './Components/redes';
import  {Nav}  from './Components/nav';
import {Conocenos}  from './Components/conocenos';
import  {MainMenu}  from './Components/mainMenu';
import { LimpiezaYControlSpecificPage } from './Components/Conocenos/limpieza&Control';
import { CambioRulemanesSpecificPage  } from './Components/Conocenos/CambiosRulemanes';

const App = ()=>{
  return(
<>
<Router >
 <Nav/>

      <Routes> 
      {/* <Route path='/' element={<MainMenu/>}/>  */}
      {/* <Route path="" element={<MainMenu/>} /> */}
      <Route index element={<MainMenu/>} />
      <Route path="/" element={<MainMenu/>} />
        <Route path="/Inicio" element={<MainMenu/>} />
        {/* <Route path="TallerProject" element={<MainMenu/>} /> */}
        <Route path='/Conocenos' element={<Conocenos/> } />
        <Route path='/CambioDeRulemanes' element={<CambioRulemanesSpecificPage/> }/>
        <Route path='/limpieza&Control' element={<LimpiezaYControlSpecificPage/> }/>

       <Route path='/Conocenos' element={<Conocenos/> } />
       <Route path='/CambioDeRulemanes' element={<CambioRulemanesSpecificPage/> }/>
       <Route path='/limpieza&Control' element={<LimpiezaYControlSpecificPage/> }/>
       <Route path="*" element={<Navigate to="/" />} />
      </Routes> 

        

       <footer >
       <Redes/>
       </footer>
  </Router>
       </>
   )
}

export default App;
