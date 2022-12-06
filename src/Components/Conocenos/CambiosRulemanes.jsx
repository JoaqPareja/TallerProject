import {cambioRulemanes} from '../Data/cambioRulemanes';
import {Link} from 'react-router-dom' 
// import {Conocenos} from '../conocenos'

//This one will be set on Conocenos 
export const CambioDeRulemanesMain = ()=>{
  return(
    <>
    <section>
    <div className="conocenosDivH2">
    <Link  to="/CambioDeRulemanes" element={<CambioRulemanesSpecificPage />}>

           <h2 className='h2Conocenos'>Cambio de rulemanes</h2>
    </Link>
</div>
<section className="conocenos">  
  {cambioRulemanes.map(index => {
       
        return(
            <article key={index.id} className="conocenos_article" > 
            <ul key={index.id}>
            {/* <li className="li-article" key={id}>{data.img} </li > */ }
             <Link  to="/cambioDeRulemanes" element={<CambioRulemanesSpecificPage />} >
            <img src={index.img} alt="" className='conocenos-img' /> <img/>
            </Link>
            <li key={index.id} className="li-article" >{index._name} </li >
            <h2 >{index.title}</h2>
            <p >{index.experience}</p>
            </ul>
         </article>
        
        )}) }      
    
    </section>
    </section>
    </>
)
} 
//This one will be set on the specific page
export const CambioRulemanesSpecificPage= ()=>{
    return(
        <>
        <section>
        <div className="conocenosDivH2" >
        <Link to="/Conocenos" >

               <h2 className='h2Conocenos' >Cambio de rulemanes</h2>
        </Link>
        </div>
      
   
<section className="conocenos">  
      {
          cambioRulemanes.map(index => {     
            return(    
               <article key={index.id} className="conocenos_article">

                     <ul key={index.id}>

                        {/* <li className="li-article" key={id}>{data.img} </li > */}
                        <Link  to="/Conocenos" >
                        <img key={index.id} src={index.img} alt="" className='conocenos-img'/> <img />
                        </Link>
                        <li key={index.id} className="li-article">{index._name} </li>
                        <h2>{index.title}</h2>
                        <p>{index.experience}</p>
                     </ul>
                  </article>
            )
            
          })
        }
        </section>
        </section>
        </>
    )
}
