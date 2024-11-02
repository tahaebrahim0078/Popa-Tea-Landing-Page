import "./cards.css";
import oneCard from "../../../img/oneCard.png";
import towCard from "../../../img/TowCard.png";
import threeCard from "../../../img/ThreeCard.png";

function Cards() {
  // const data = [
  //   { number: "65", para: "wasap taha", imgy: oneCard },
  //   { number: "55", para: "wasap fuck u taha", imgy: towCard },
  //   { number: "22", para: "wasap bitch taha", imgy: threeCard },
  // ];
   // if i want to use map for more data
  return (
    <>
      <section className="mainCards">
        {/* 
        {data.map((item) => {

          return( */}
        <div className="cards">
          <div className="right">
            <img src={oneCard} alt="" />
          </div>
          <div className="left">
            <h1>65</h1>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper
            </p>
          </div>
        </div>
        {/* )
        }
        )}
         */}

        <div className="cards">
          <div className="right">
            <img src={towCard} alt="" />
          </div>
          <div className="left">
            <h1>88</h1>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="right">
            <img src={threeCard} alt="" />
          </div>
          <div className="left">
            <h1>23</h1>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cards;
