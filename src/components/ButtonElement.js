import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#007db8' : '#f0ab00')};
  white-space: nowrap;
  padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#f0ab00' : '#007db8')};
  }
`
export const WhatsappLink = styled.a`
	position:fixed;
	width:50px;
	height:50px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:35px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
&:hover {
	text-decoration: none;
	color: #25d366;
  background-color:#fff;
}

`