import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { 
        FooterContainer, 
        FooterLink, 
        FooterLinkItems, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkTitle, 
        FooterWrap, 
        SocialIconLink, 
        SocialIcons, 
        SocialLogo, 
        SocialMedia, 
        SocialMediaWrap, 
        WebsiteRights 
      } from './FooterElements'

const Footer = () => {

  const toggleHome = ()=> {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
<FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle> <FooterLink to="nosotros">Nosotros</FooterLink></FooterLinkTitle>
                <FooterLinkTitle> <FooterLink to="servicios">Servicios</FooterLink></FooterLinkTitle>
                <FooterLinkTitle> <FooterLink to="staffing">Staffing</FooterLink></FooterLinkTitle>
                <FooterLinkTitle> <FooterLink to="contacto">Contacto</FooterLink></FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Legacy ITC
            </SocialLogo>
            <WebsiteRights>LegacyITC © 2021
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
