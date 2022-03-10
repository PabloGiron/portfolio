
export const About = () => {
  return (
    <div className='waves' id="about">
      
      <div className='waves_bg-color'></div>
      <div className='wave w1'></div>
      
      <div className='wave__body container'>

        <h1> Acerca de mi:</h1>
        <br/>
        <p> Ingeniero en sistemas e informática, graduado de la Universidad Rafael Landívar. Entusiasta por las nuevas tecnologías y el continuo aprendizaje, un pequeño resumen acerca de mi: </p>
        <br/>
          <ul className='wave__list'>
            
            <li>Inicié en el mundo del programación en 2015.</li>
            <li>Desarrollador de aplicaciones móviles híbridas.</li>
            <li>Especialmente atraído por el trabajo en front-end.</li>
            <li>Desarrollador de back-end con NodeJS.</li>
            <li>Me encantan los gatos. 😼</li>
            {/* <li>Amante de los juegos shooters</li> */}
            <li>Actualmente me encuentro estudiando React.</li>
          </ul> 

        </div>

    </div>
  )
}
