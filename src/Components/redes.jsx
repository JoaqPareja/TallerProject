
import { imagesRedesSociales } from "./Data"

export const Redes = () => {
    return(
<section id="SecRed">
  
<h2>Redes Sociales</h2>
<div id="secRed2">
  <a className="secRed-Img" href=""><img src={imagesRedesSociales.whatsap} alt="" className="RedImg" />/WhatsApp</a>
  <a className="secRed-Img" href=""><img src={imagesRedesSociales.facebook} alt="" className="RedImg"/>/Facebook</a>
   <a id="secRed-Img2" className="secRed-Img" href=""><img src={imagesRedesSociales.twiter} alt="" className="RedImg"/>/Twitter</a>
    <a id="secRed-Img3"className="secRed-Img" href=""><img src={imagesRedesSociales.instagram} alt="" className="RedImg"/>/Instagram</a>
  <a className="secRed-Img" href=""><img src={imagesRedesSociales.youtube} alt="" className="RedImg"/>/Youtube</a>

</div> 
</section>
)
}

