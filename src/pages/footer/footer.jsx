
import "./footer.css";
import poopaFighting from "../../../img/popFighting.png";
import facebook from "../../../img/facebook.png";
import instgram from "../../../img/instagram.png";

import tiktok from "../../../img/tiktok.png";

import whatsapp from "../../../img/whatsapp.png";


function Footer(){

  return(
    <section className="FooterMain">
    <section className="FooterMain2">
        <div className="mainFooterfLEX">
        <div className="icons">
            <h1>Contact Us</h1>
            <img src={facebook} alt="" />
            <img src={instgram} alt="" />

            <img src={tiktok} alt="" />

            <img src={whatsapp} alt="" />

        </div>
         <div className="Sup">
            <h1>Subscribe!</h1>
            <img src={poopaFighting} alt="" />
         </div>
         </div>
    </section>
    </section>
  )

}


export default Footer;