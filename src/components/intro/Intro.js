import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
  
    init(textRef.current, { 
      typeSpeed:  80,
      backSpeed:  160,
      showCursor:true,
      strings: ['Desarrollador','Ing. en Sistemas','Front-end dev', 'Flutter dev','React dev','Pokémon trainer'] 
    })

  }, [])
  

  return (
    <div className='intro' id="intro">
      <div className="intro__left">
        <div className="intro__imageContainer">
          <img src="assets/foto.png" alt="" />
        </div>
      </div>
      <div className="intro__right">
        <div className="wrapper">
          <h2>Hola, soy</h2>
          <h1>Pablo Girón</h1>
          <h3> {" "} 
          <span ref={textRef}>  </span>
          
          </h3>
          <br/>
          <a  href='https://drive.google.com/drive/folders/10fNn-m45qcu4Hic5fZbK6IdbOUGu6RMS?usp=sharing' rel='noreferrer' target="_blank">
            <button className='btn_awards'>Diplomas</button>
          </a>
          <div className='middle'>

          </div>
        </div>
        <a href="#about" className=" intro_button" > 
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
