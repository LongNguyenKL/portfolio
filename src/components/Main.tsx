import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/LongNguyenKL/portfolio/master/src/assets/images/square_headshot.JPG" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/LongNguyenKL" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/long-nguyen-4583791a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Long Nguyen</h1>
          <p>Business & Marketing Data Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/LongNguyenKL" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/long-nguyen-4583791a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

