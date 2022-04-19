
import {data} from './users/data'
// import UnderTest from '../../src/imgs/Under-Test.png';


{/* <UnderTest /> */}
export const Conocenos = () => {
   return(
    <>
    <section id="MainSec">
  <div id="MeetUs">
   <h1>Conoce a nuestro staff:</h1>

  </div>
  <section className="conocenos">

          {
          data.map(({ id, name, img, title, experience }) => {
            return(
            <article className="conocenos_article" key={id}> 
            <ul key={id} >
        
            {/* <li className="li-article" key={id}>{data.img} </li > */}
            <img src={img} alt="" className='conocenos-img' /> <img/>
            <li className="li-article" key={id}>{name} </li >
            <h2  >{title}</h2>
            <p >{experience}</p>
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

