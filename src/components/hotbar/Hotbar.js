import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon} from '../../icons/arrow.svg';
import { ReactComponent as CaretIcon} from '../../icons/caret.svg';
import { ReactComponent as ChevronIcon} from '../../icons/chevron.svg';
import{ Person, Work, Home, AccountTree, LinkedIn, GitHub, Link, School } from "@material-ui/icons"


export const Hotbar = () => {
  return (
    <Navbar>
      <NavItem name={"#intro"} icon={ <Home />}  />
      <NavItem name={"#about"} icon={ <Person />}  />
      <NavItem name={"#portfolio"}  icon={ <Work /> }/>
      
      <NavItem name={"#"} icon = {< CaretIcon/>}>
      
      {/* Dropdown here  */}
      <DropdownMenu />

      </NavItem>
    </Navbar>
  )
}


function DropdownMenu(){

  const [activeMenu, setactiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }


  function DropdownItem(props){
    return(
      <a href={`${props.refName}`} target={`${props.target}`} className='menu-item' onClick={() => props.goToMenu && setactiveMenu(props.goToMenu)}>

        <span className='icon-button'>{props.leftIcon}</span>
        
        { props.children }
        
        {/* <span className='icon-right'>{props.rightIcon}</span> */}
      </a>
    );
  }


  return(

    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500}
        classNames = "menu-primary"
        onEnter={ calcHeight }
      >

        <div className='menu'>


          <DropdownItem
            leftIcon={<AccountTree />}
            rightIcon={<ChevronIcon />}
            goToMenu='settings'
            refName = '#'
            target = '_self'
          >
            Redes sociales
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'settings'} 
        unmountOnExit 
        timeout={500}
        classNames = "menu-secondary"
        onEnter={ calcHeight }
      >

        <div className='menu'>

        <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />} refName="#" target = '_self'>
            <h3 style={{ margin: 6}}>Regresar</h3>
        </DropdownItem>
        <DropdownItem leftIcon={<LinkedIn/>} refName="https://www.linkedin.com/in/juan-pablo-gir%C3%B3n-l%C3%B3pez-7362b2224/" target="_blank"> LinkedIn</DropdownItem>
        <DropdownItem leftIcon={<Link/>} refName="https://www.udemy.com/user/juan-pablo-giron-3/" target="_blank"> Udemy</DropdownItem>
        <DropdownItem leftIcon={<GitHub/>} refName="https://www.Github.com/PabloGiron" target="_blank"> Github</DropdownItem>
        <DropdownItem leftIcon={<School/>} refName="https://platzi.com/p/pablo.giron.97/" target="_blank"> Platzi</DropdownItem>
        </div>
      </CSSTransition>

    </div>
  );
}

function Navbar( props ){
  return(
    <nav className='navbar'>
      <ul className='navbar-nav'> {props.children}</ul>
    </nav>
  )
}

function NavItem( props ){

  const [ open, setOpen ] = useState( false );

  return(
    <li className='nav-item'>
        <a href={`${props.name}`} className='icon-button' onClick={ () => setOpen( !open )}>
          { props.icon }
        </a>
        
          {/* Propiedad para cerrar y abrir dropdownMenu */}
          { open && props.children }
          
        
    </li>
  );
}