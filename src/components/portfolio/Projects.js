import React, { useState } from 'react'

export const Projects = () => {

  const [currentSlide, setcurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "/assets/mobile.png",
      title: "Paladins App",
      desc: "Paladins app es una aplicación la cual mostrará un resumen del perfil de un jugador.",
      img:"assets/paladinsApp.png"
    },{
      id: "2",
      icon: "/assets/globe.png",
      title: "Pro-tech Web",
      desc: "Página web para un e-commerce.",
      img:"assets/proTech.png"
    },{
      id: "3",
      icon: "/assets/globe.png",
      title: "Pro-tech Web 2",
      desc: "Página web para un e-commerce.",
      img:"assets/proTech.png"
    },{
      id: "4",
      icon: "/assets/globe.png",
      title: "Pro-tech Web 3",
      desc: "Página web para un e-commerce.",
      img:"assets/proTech.png"
    }
  ]

  const handleClick = (way) => {
  
    way === "left" ? setcurrentSlide( currentSlide > 0 ? currentSlide - 1 : data.length - 1)
                   : setcurrentSlide( currentSlide < data.length - 1 ? currentSlide + 1 : 0)

  }

  return (
    <div className='projects'>
      <div className='slider' 
           style={ {transform:`translateX(-${currentSlide * 25}%)`} }
      >

        {data.map((item) => (

          <div className='container' key={item.id}>
            
            <div className='item'>
              
              <div className='projects__left'>
                <div  className='projects__left-container'>
                  <div className='projects__img-lcontainer'>
                    <img src={ item.icon } alt='PabloGiron'/>
                  </div>
                  <h2>{ item.title }</h2>
                  <p> { item.desc }</p>
                  <span>Ir al código</span>
                </div>
              </div> 

              <div className='projects__right'>
                <img src={ item.img } alt='PabloGiron'/>
              </div>
            </div>
          </div>

        ))}

        
      </div>

      <img src='assets/arrow.png' alt='' className='arrow left' onClick={()=>handleClick("left")}/>
      <img src='assets/arrow.png' alt='' className='arrow right'onClick={()=>handleClick()}/>

    </div>
  )
}