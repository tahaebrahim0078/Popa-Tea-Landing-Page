
import "./cards.css";
import oneCard from "../../../img/oneCard.png"
import towCard from "../../../img/TowCard.png"
import threeCard from "../../../img/ThreeCard.png"

function Cards(){

   

    return(
        <section className="MainCardsBG">
        <section className="mainCards2">
         <div className="cards">
          <div className="right">
             <img src={oneCard} alt="" />



          </div>
          <div className="left">
            <h1>25</h1>
            <p>lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Faucibus in libero risus semper</p>
          </div>


         </div>
         <div className="cards">
          <div className="right">
             <img src={towCard} alt="" />



          </div>
          <div className="left">
            <h1>69</h1>
            <p>lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Faucibus in libero risus semper</p>
          </div>


         </div>
         <div className="cards">
          <div className="right">
             <img src={threeCard} alt="" />



          </div>
          <div className="left">
            <h1>99</h1>
            <p>lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Faucibus in libero risus semper</p>
          </div>


         </div>

        </section>
        </section>
    )

}
export default Cards;