import React from 'react'
import { Projects } from './Projects'
import { Skills } from './Skills'


export const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='portfolio__left'>
        <h1>Mis proyectos:</h1>
        <Projects/>
      </div>
      <div className='portfolio__right'>
        <h1>My skills:</h1>
        <Skills/>

      </div>
    </div>
  )
}
