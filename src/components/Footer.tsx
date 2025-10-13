import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/LongNguyenKL" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/long-nguyen-4583791a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Thank you for checking my portfolio 💜</p>
    </footer>
  );
}

export default Footer;