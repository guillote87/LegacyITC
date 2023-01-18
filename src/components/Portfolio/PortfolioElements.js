import styled from 'styled-components'

export const PortfolioContainer = styled.div`
  height: 1100px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: #dcdcdc;
   
  @media screen and (min-width: 768px) {
    height: 800px;
  }
  @media screen and (min-width: 1000px) {
    height: 600px;
  }
  
`
export const PortfolioLink = styled.a`
  text-decoration:none;
  
`

export const PortfolioWrapper= styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items:center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const PortfolioCard= styled.div`
  background: #fff ;
  color: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  border-radius: 10px;
  height: 400px;
  width:400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
 
`

export const PortfolioIcon= styled.img`
  height: 200px;
  width: 350px;
  margin-bottom: 10px;
`

export const PortfolioH1= styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const PortfolioH2= styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: left;
  color: orange;
`

export const PortfolioP= styled.p`
  font-size: 1rem;
  text-align: center;
`