import { Hobbies } from './Hobbies';
import { Projects } from './Projects';
import { Skills } from './Skills';


export const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>

      <div className='portfolio__left'>
        
        <Projects/>
      </div>
      <div className='portfolio__right'>
        <div className='portfolio__right-area'>
          <h1>Mis skills:</h1>
          <Skills/>
          <h1>Mis hobbies:</h1>
          <Hobbies/>
        </div>
      </div>
    </div>
  )
}
