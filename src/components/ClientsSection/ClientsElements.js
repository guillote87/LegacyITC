import styled from 'styled-components'

export const ClientsContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: #fff;
   

  @media screen and (min-width: 768px) {
    height: 600px;
  }
  @media screen and (min-width: 1000px) {
    height:400px;
  }
`

export const ClientsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  align-items:center;
  grid-gap: 10px;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr ;
  }
  @media screen and (min-width: 1000px) {
    display:flex
  }
`

export const ClientsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  border-radius: 10px;
  border:2px white solid;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  

  &:hover {
    cursor: pointer;
    border:2px #f0ab00 solid;
  }
`

export const ClientsIcon = styled.img`
  
margin-bottom: 10px;
max-height: 100px;
  max-width:100px;
  width: auto;
  height: auto;
`

export const ClientsH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ClientsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #fff;
`

export const ClientsP = styled.p`
color: #fff;  
font-size: 1rem;
  text-align: center;
 
`