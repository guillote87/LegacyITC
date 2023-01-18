import React from 'react'
import Icon1 from '../../images/portfolio/pedidos.png'
import Icon2 from '../../images/portfolio/dashboard.png'
import Icon3 from '../../images/portfolio/constancia.png'

import { 
        PortfolioCard, 
        PortfolioContainer, 
        PortfolioH1, 
        PortfolioIcon, 
        PortfolioWrapper,
        PortfolioP,
        PortfolioH2,
        PortfolioLink
      } from './PortfolioElements'

const Portfolio = () => {
  return (
    <PortfolioContainer id="Portfolio">

      <PortfolioH1>Portfolio</PortfolioH1>

      <PortfolioWrapper>
      <PortfolioLink href="https://legacy-pedidos-sapui5.netlify.app/" target="_blank">  
      <PortfolioCard>
          <PortfolioH2><strong>Listado Pedidos SAPUI5</strong></PortfolioH2>
          <PortfolioIcon src={Icon1}/>
          <PortfolioP>Aplicacion de listado de pedidos, con filtros de Organizacion de venta, estado del pedido y rango de fecha, realizada en SAPUI5 conectada a servicio Odata </PortfolioP>
        </PortfolioCard>
        </PortfolioLink >
        <PortfolioLink  href=" https://legacy-dashboard.netlify.app/" target="_blank">
        <PortfolioCard>
          <PortfolioH2><strong>Dashboard analitico de pedidos</strong></PortfolioH2>
          <PortfolioIcon src={Icon2}/>
          <PortfolioP>Dashboard de listado de pedidos, con graficos de barras, realizada en SAPUI5 conectada a servicio Odata</PortfolioP>
        </PortfolioCard>
</PortfolioLink >
<PortfolioLink  href="https://legacy-constanciacuit.netlify.app/" target="_blank"><PortfolioCard>
          <PortfolioH2><strong>Constancia</strong></PortfolioH2>
          <PortfolioIcon src={Icon3}/>
          <PortfolioP>Aplicacion de consulta de Constancia de inscripción, realizada en SAPUI5 </PortfolioP>
        </PortfolioCard>
        </PortfolioLink>

      </PortfolioWrapper>
      
    </PortfolioContainer> 
  )
}

export default Portfolio
