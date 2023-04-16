import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='social-media'>
        <FaTwitter /> <AiFillInstagram /> <RiWhatsappFill /> <FaLinkedin/>
      </div>
      <p>Copyright: Millicent Chisom Didacus</p>
    </div>
  )
}

export default Footer