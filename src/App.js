import { useEffect, useState } from 'react';
import './App.css';
import ControlledCarousel from './components/Carousel';
import ParticlesComponent from './components/Particles';

function App() {
  const [media, setMedia] = useState(false)
  useEffect(() =>{
    setMedia(window.matchMedia("(min-width: 900px)").matches)
  }, [])
  return (
    <div className="App">
      <div className="isi">
        <ParticlesComponent />
        {
          media ? <ControlledCarousel /> :
          <div className="carousel-container">
            <div className="text-container">
                <h3 style={{ fontFamily: "Mountains of Christmas", fontWeight: '700', fontSize: '64px' }}>YAHHH GABISA DIBUKA<br/> COBA BUKA DI LAPTOP PASTI BISA DEHHH. JANGAN LUPA HPNYA BUAT VIDEO REACTION YAAAA!!!!</h3>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
