import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper,} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu to='#'>
          <SidebarLink to="nosotros" onClick={toggle}>
            Nosotros
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Servicios
          </SidebarLink>
          <SidebarLink to="contacto" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
