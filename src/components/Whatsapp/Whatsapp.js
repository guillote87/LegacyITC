import React from 'react'
import { WhatsappLink } from '../ButtonElement'
import {FaWhatsapp} from 'react-icons/fa'

export const Whatsapp = () => {
    return (
        <>
            <WhatsappLink href="https://api.whatsapp.com/send?phone=+549116356-6623&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus servicios%20." rel="noreferrer" target="_blank"> 
                    <FaWhatsapp className="my-float"/>
                </WhatsappLink>
        </>
            )
}
