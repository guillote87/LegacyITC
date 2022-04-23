import React from 'react'
import logo from '../../images/logoblanco.png'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { 
        FooterContainer, 
        FooterLinkItems, 
        FooterLinksContainer, 
        FooterWrap, 
        SocialIconLink, 
        SocialIcons, 
        SocialLogo, 
        SocialMedia, 
        SocialMediaWrap, 
        WebsiteRights,
        Logo,
      } from './FooterElements'

const Footer = () => {

  const toggleHome = ()=> {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
                <FooterLinkItems to="nosotros">Nosotros</FooterLinkItems>
                <FooterLinkItems to="services">Servicios</FooterLinkItems>
                <FooterLinkItems to="contacto">Contacto</FooterLinkItems>
        </FooterLinksContainer>
      
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo  to='/' onClick={toggleHome}>
              <Logo src={logo}/>
            </SocialLogo>
            <WebsiteRights>Legacy ITC © 2022
            Todos Los derechos reservados
            </WebsiteRights>
            <SocialIcons>

              <SocialIconLink href="/" target="_blank"
                aria-label="Facebook">
                  <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank"
                aria-label="Instagram">
                  <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank"
                aria-label="Youtube">
                  <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank"
                aria-label="Twitter">
                  <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank"
                aria-label="Linkedin">
                  <FaLinkedin />
              </SocialIconLink>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
