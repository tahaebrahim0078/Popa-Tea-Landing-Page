import imgyPOP from "../../../img/boba tea illustration.png";
import RightBob from "../../../img/Hero Image area.png";

import "./home.css";

function Home() {
  return (
    <>
      <section className="main">
        <div className="st1">
          <div className="titleImg">
            {" "}
            <img src={imgyPOP} alt="" />
            <h1>Boba vibe</h1>
          </div>

          <p>
            lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Faucibus in libero risus semper
          </p>
          <button>Browse menu</button>
        </div>
        <div className="st2">
          <img src={RightBob} alt="" />
        </div>
      </section>
    </>
  );
}

export default Home;
