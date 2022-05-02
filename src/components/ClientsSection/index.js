import React from 'react'
import Logo1 from '../../images/Clientes/bumeran.svg'
import Logo2 from '../../images/Clientes/SNP.jpg'
import Logo3 from '../../images/Clientes/navent.jpg'
import Logo4 from '../../images/Clientes/agrofy-logo.png'
import Logo5 from '../../images/Clientes/demotores.jpg'


import { 
        ClientsCard, 
        ClientsContainer, 
        ClientsH1, 
        ClientsIcon, 
        ClientsWrapper 
      } from './ClientsElements'

const Clients = () => {
  return (
    <ClientsContainer id="clients">

      <ClientsH1>Confían en nosotros</ClientsH1>

      <ClientsWrapper>
      <ClientsCard>
          <ClientsIcon src={Logo1}/>
        </ClientsCard>
        <ClientsCard>
          <ClientsIcon src={Logo2}/>
        </ClientsCard>
        <ClientsCard>
          <ClientsIcon src={Logo3}/>
        </ClientsCard>
        <ClientsCard>
          <ClientsIcon src={Logo4}/>
        </ClientsCard>
        <ClientsCard>
          <ClientsIcon src={Logo5}/>
        </ClientsCard>

      </ClientsWrapper>
      
    </ClientsContainer>
  )
}

export default Clients
