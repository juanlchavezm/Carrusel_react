//mport { useRoutes } from 'react-router-dom';
import Developers from '../Developers';
/*import Home from '../Home';

import Tutorials from '../Tutorials';*/
import Slider from "react-slick"; // Crea la funcionalidad del carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'


function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slideToShow: 3,
    slideToScroll: 1,
    autoplaySpeed: 20,
    autoplay: true
  }

  return (
    <>
    <h1 className="bg-red-200 mb-4 text-2xl"> Carrusel </h1>
    <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={()=> window.open('https://tailwindcss.com/', '_blank')} > Help me</button>
    <div className='w-3/4 m-auto mt-10 bg-violet-100 pt-10'>
      <div className='mt-30'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className=''>
            <div className='bg-white h-[300px] text-black rounded-xl'>
              <img src={d.img} alt='' className='h-60 w-60 rounded-full my-auto mx-auto' />
            </div><div className='flex flex-col items-center justify-center gap-5 p-5'>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p className='text-center'>{d.name}</p>
              <button className='bg-indigo-400 text-white text-lg px-4 py-2'>Mis tutoriales</button>
              </div>
              </div>
          )
          )}
          </Slider>
      </div>
    </div>
    </>
  )
}

const data = [
  {
    name: `Brais Moure`,
    img: `../src/assets/Fotos/perfil-brais.png`,
    review: `Developer`
  },
  {
    name: `Facundo`,
    img: `../src/assets/Fotos/perfil-facundo.png`,
    review: `Developer`
  },
  {
    name: `Midudev`,
    img: `../src/assets/Fotos/perfil-midudev.png`,
    review: `Developer`
  },
];

export default App
