import React from 'react'
import Carousel from 'react-elastic-carousel';
import Card from './Card';

export const Hobbies = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false  },
    { width: 175, itemsToShow: 1, itemsToScroll: 1, pagination: false  },
    { width: 250, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  ]


  return (
    <div className='skills__container'>
        <Carousel breakPoints={breakPoints}>
            <Card name={'Atletismo'} image={"./assets/hobbies/atletismo.png"} />
            <Card name={"Fútbol"} image={"./assets/hobbies/futbol.png"} />
            <Card name={"Ajedrez"} image={"./assets/hobbies/ajedrez.png"} />
            <Card name={"Videojuegos"} image={"./assets/hobbies/videojuegos.png"} />
            <Card name={"Pixelart"} image={"./assets/hobbies/foxSprite.png"} />
            <Card name={"Dibujar"} image={"./assets/hobbies/dibujar.png"} />
        </Carousel>
    </div>
  )
}
