
// import {data} from './Data/data'

import {CambioDeRulemanesMain} from './CambiosRulemanes'
import {LimpiezaYControlMain} from './limpieza&Control'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const ConocenosSection = () => {

    return(
      
        <>
{/* <Router > */}
        <section className=''>
        {/* Suegrito Project\src\Components\Conocenos\CambioDeRulemanes.jsx */}
        {/* <h2 className='h2Conocenos' style={{marginLeft: "45%"} }>Limpieza Y Control</h2> */}
     <LimpiezaYControlMain/>
     <CambioDeRulemanesMain/>
        </section>
      </>
    )
           
}