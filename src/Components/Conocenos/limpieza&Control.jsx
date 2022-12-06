import {limpiezaYControl} from '../Data/limpieza&Control';
import {Link} from 'react-router-dom' 
// import {Conocenos} from '../conocenos'

//This one will be set on Conocenos 
export const LimpiezaYControlMain = ()=>{
  return(
    <>
    <section>
    <div className="conocenosDivH2">
    <Link  to="/Limpieza&Control" element={<LimpiezaYControlSpecificPage/>}>

           <h2 className='h2Conocenos'>Limpieza y control de Estado de Frenos</h2>
    </Link>
</div>
<section className="conocenos">  
  {
      limpiezaYControl.map(index => {
        return(
           <article  key={index.id} className="conocenos_article" >
                 <ul key={index.id}>
                    <Link  to="/Limpieza&Control" element={<LimpiezaYControlSpecificPage/>}>
                    <img  src={index.img} alt="" className='conocenos-img' /> <img />
                    </Link>
                    <li key={index.id} className="li-article" >{index._name} </li>
                    <h2 >{index.title}</h2>
                    <p >{index.experience}</p>
                 </ul>
              </article>
        )
         //The key id is used as a unique identifier for each element.
      })
    }
    </section>
    </section>
    </>
)
} 
//This one will be set on the specific page
export const LimpiezaYControlSpecificPage= ()=>{
    return(
        <>
        <section>
        <div className="conocenosDivH2">
        <Link to="/Conocenos" >

               <h2 className='h2Conocenos'>Limpieza y control de Estado de Frenos</h2>
        </Link>
</div>
<section className="conocenos">  
      {
          limpiezaYControl.map(index => {
            return(
               <article key={index.id} className="conocenos_article">
                     <ul key={index.id}>
                        <Link  to="/Conocenos" >
                        <img  src={index.img} alt="" className='conocenos-img'/> <img />
                        </Link>
                        <li key={index.id} className="li-article">{index._name} </li>
                        <h2>{index.title}</h2>
                        <p>{index.experience}</p>
                     </ul>
                  </article>
            ) })
        }
        </section>
        </section>
        </>
    )
}
