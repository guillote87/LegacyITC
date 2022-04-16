import React, {useState, useEffect}from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import logo from '../../images/logo2.png'
import { 
        MobileIcon, 
        Nav, 
        NavbarContainer, 
        NavItem, 
        NavLinks, 
        NavLogo, 
        NavMenu,
        Logo,
      } from './NavbarElements'
  

const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >=  80){
      setScrollNav(true)
    }else {
      setScrollNav(false)
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = ()=> {
    scroll.scrollToTop()
  }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}><Logo src={logo}></Logo></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to="nosotros" 
                smooth={true} 
                duration={500}
                spy={true} 
                exact='true' 
                offset={-80} 
                >Nosotros
              </NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks 
                to="staffing"
                smooth={true} 
                duration={500}
                spy={true} 
                exact='true' 
                offset={-80} 
                >Staffing</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks 
                to="services"
                smooth={true} 
                duration={500}
                spy={true} 
                exact='true' 
                offset={-80}
                >Servicios</NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks 
                to="contacto"
                smooth={true} 
                duration={500}
                spy={true} 
                exact='true' 
                offset={-80}
                >Contacto</NavLinks>
            </NavItem>
            
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>  
    </>
  )
}

export default Navbar
