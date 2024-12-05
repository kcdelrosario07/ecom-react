import React from 'react'
import './Footer.css'
import footerLogo from '../Assets/logo_big.png'
import instagramIcon from '../Assets/instagram_icon.png'
import pinterestIcon from '../Assets/pintester_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerLogo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contract</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagramIcon} alt="" />
                <img src={pinterestIcon} alt="" />
                <img src={whatsappIcon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserve</p>
        </div>
    </div>
  )
}

export default Footer