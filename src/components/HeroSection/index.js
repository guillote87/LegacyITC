import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroP, VideBg } from './HeroElements'
import Video from '../../videos/video.mp4'

function HeroSection() {

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
               <HeroP>
          En <strong>Legacy ITC </strong>somos un equipo de desarrolladores enfocados en la creación de
          soluciones tecnológicas aplicadas a la plataforma <strong>SAP</strong> que permitan mejorar los procesos del negocio.<br/>
          Siendo una firma boutique, hemos logrado siempre adaptarnos a las necesidades de
          nuestros clientes brindándoles un nivel de atención de calidad, rapido y personalizado.<br/>
          El nivel de compromiso, atención y dedicación que proveemos a nuestros clientes nos
          distingue en cada emprendimiento.
        </HeroP>
      </HeroContent>
    </HeroContainer>


  )
}

export default HeroSection
