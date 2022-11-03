import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import UploadPlace from '../../Components/UploadPlace/Upload';
import Character from './Ikbal 5.png';
import WineGlass from './glass-dynamic-color.png';

import './Home.css';

function Home() {
  return <div>
    <img src={Character} alt='character' className='character-img'></img>
    <img src={WineGlass} alt='wineGlass' className='wine-glass-img'></img>
    <Banner />
    <UploadPlace />
    <About />
  </div>;
}

export default Home;