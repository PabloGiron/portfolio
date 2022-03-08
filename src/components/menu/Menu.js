
export default function Menu({ menuOpen, setmenuOpen }) {


  return (
    <div className={"menu__menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=> setmenuOpen(!menuOpen)}>
                <a href="#intro"> Intro </a>
            </li>
            <li onClick={()=> setmenuOpen(!menuOpen)}>
                <a href="#portfolio"> Portafolio </a>
            </li >
            <li onClick={()=> setmenuOpen(!menuOpen)}>
                <a href="#works"> Proyectos </a>
            </li>
            <li onClick={()=> setmenuOpen(!menuOpen)}>
                <a href="#contact"> Contacto </a>
            </li>
        </ul>
    </div>
  )
}
