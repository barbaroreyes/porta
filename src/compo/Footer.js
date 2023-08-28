import React from 'react';
import { FaReact,FaAws,FaGithub, FaLinkedin,FaInstagram} from 'react-icons/fa';
import { SiGraphql,SiExpress,SiMysql,SiFigma } from 'react-icons/si';
import {RiFacebookCircleFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer_container'>
     <div className='tools'>
       <h5 style={{color: 'white' , width:'100%'}}>Stack</h5>
     <span ><FaReact /></span>
      <span><FaAws/></span>
      <span><SiGraphql/></span>
      <span><SiExpress/></span>
      <span><SiMysql/></span>
      <span><FaGithub/></span>
      <span><SiFigma/></span>
     </div>
      <div className="socials">
      <span><RiFacebookCircleFill/></span>
      <span><FaLinkedin/></span>
      <span><FaInstagram/></span>
      <span><MdEmail/></span>
     
      </div>
     
    </div>
  );
}

export default Footer;
