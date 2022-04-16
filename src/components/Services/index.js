import React from 'react'
import Icon1 from '../../images/img4.svg'
import Icon2 from '../../images/img6.svg'
import Icon3 from '../../images/img5.svg'

import { 
        ServicesCard, 
        ServicesContainer, 
        ServicesH1, 
        ServicesIcon, 
        ServicesWrapper 
      } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">

      <ServicesH1>Nuestros Servicios</ServicesH1>

      <ServicesWrapper>
      <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <servicesH2><strong>Plataformas</strong></servicesH2>
          <servicesP>SAP R/3 </servicesP>
          <servicesP>SAP R/4 HANA </servicesP>
          <servicesP>SAP FIORI </servicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <servicesH2><strong>Tecnologias</strong></servicesH2>
          <servicesP>ABAP</servicesP>
          <servicesP>SAPUI5</servicesP>
          <servicesP>BASIS</servicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <servicesH2><strong>Proyectos SAP</strong></servicesH2>
          <servicesP>Aseguramos el exito de su proyecto reduciendo riesgos y costos
          </servicesP>
        </ServicesCard>

      </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services
