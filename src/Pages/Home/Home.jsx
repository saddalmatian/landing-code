import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import UploadPlace from "../../Components/UploadPlace/Upload";
import Character from "./Ikbal 5.png";
import WineGlass from "./glass-dynamic-color.png";
import Navbar from "../../Components/Navbar/Navbar";

import "./Home.css";

function Home() {
  return (
    <div className="wrapper-home">
      <Navbar />
      <img src={Character} alt="character" className="character-img"></img>
      <img src={WineGlass} alt="wineGlass" className="wine-glass-img"></img>
      <Banner />
      <UploadPlace />
      <About />
    </div>
  );
}

export default Home;
