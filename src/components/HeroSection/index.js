import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideBg } from './HeroElements'
import Video from '../../videos/video.mp4'



function HeroSection() {

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Consultoria SAP</HeroH1>
        <HeroP>
            Legacy ITC es una firma de consultoría focalizada en soluciones SAP.<br/>
           Desde nuestros inicios nos hemos dedicado a asegurar que nuestros clientes reciban calidad en cada trabajo, entregando los proyectos en tiempo y presupuesto, ayudandolos a encontrar los mejores talentos del mercado y maximixando su inversion en tecnologia.
        </HeroP>
      </HeroContent>
    </HeroContainer>
      
    
  )
}

export default HeroSection
