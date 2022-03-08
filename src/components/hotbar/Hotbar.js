import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon} from '../../icons/arrow.svg';
import { ReactComponent as CaretIcon} from '../../icons/caret.svg';
import { ReactComponent as CogIcon} from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon} from '../../icons/chevron.svg';
import{ Person, Work } from "@material-ui/icons"


export const Hotbar = () => {
  return (
    <Navbar>
      <NavItem name={"intro"} icon={ <Person />}  />
      <NavItem name={"portfolio"}  icon={ <Work /> }/>
      <NavItem icon="😀"/>
      
      <NavItem icon = {< CaretIcon/>}>
      
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
      <a href={`#${props.refName}`} className='menu-item' onClick={() => props.goToMenu && setactiveMenu(props.goToMenu)}>

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


          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu='settings'
          >
            Settings
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

        <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h3 style={{ margin: 6}}>Redes</h3>
        </DropdownItem>
        <DropdownItem leftIcon="🦘"><a href='Facebook.com'>Facebbok</a></DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
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
        <a href={`#${props.name}`} className='icon-button' onClick={ () => setOpen( !open )}>
          { props.icon }
        </a>
        
          {/* Propiedad para cerrar y abrir dropdownMenu */}
          { open && props.children }
          
        
    </li>
  );
}