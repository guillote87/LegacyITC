import React from 'react'
import Icon1 from '../../images/img8.svg'
import Icon2 from '../../images/img9.svg'
import Icon3 from '../../images/img10.svg'

import { 
        ServicesCard, 
        ServicesContainer, 
        ServicesH1, 
        ServicesIcon, 
        ServicesWrapper,
        ServicesP,
        ServicesH2
      } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">

      <ServicesH1>Nuestros Servicios</ServicesH1>

      <ServicesWrapper>
      <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2><strong>Plataformas</strong></ServicesH2>
          <ServicesP>SAP R/3 </ServicesP>
          <ServicesP>SAP S/4 HANA </ServicesP>
          <ServicesP>SAP FIORI </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2><strong>Tecnologias</strong></ServicesH2>
          <ServicesP>ABAP</ServicesP>
          <ServicesP>SAPUI5</ServicesP>
          <ServicesP>BASIS</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2><strong>Proyectos SAP</strong></ServicesH2>
          <ServicesP>Aseguramos el exito de su proyecto reduciendo riesgos y costos
          </ServicesP>
        </ServicesCard>

      </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services
