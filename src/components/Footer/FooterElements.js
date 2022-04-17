import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const FooterContainer = styled.footer`
  background-color: #101522;

`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:1100px;
  margin: 0 auto;

`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 420px) {
    padding-top: 32px;
    flex-direction:column;   
  }
`

export const FooterLinksWrapper = styled.div`
  display:flex;
  justify-content:center;
 `

export const FooterLinkItems = styled(LinkS)`
  display: flex;
  align-items: center;
  margin:16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 820px) {
    margin: 0;
    padding: 10px;
    width: 100%
  }
  &:hover{
    color: #f0ab00;
    transition: 0.3 ease-ease-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;

`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(LinkS)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`
export const Logo = styled.img`
height :90px;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size:24px;
  text-decoration: none;

`