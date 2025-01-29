import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo a tempore non alias amet dolorem eum impedit dolore maxime blanditiis quis, maiores ducimus cum facere ex. Quos, voluptatem iusto! Fugit.</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon}alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-center " >
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>8668807528</li>
                    <li>jayjathar31@gamil.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright" >Copyright 2024 @ Tomoto.com - All Right Reserved. </p>




    </div>
  )
}

export default Footer