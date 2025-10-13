import React from "react";
import did_proj from '../assets/images/did_proj.png';
import powerbi_proj from '../assets/images/powerbi_proj.jpg';
import financial_proj from '../assets/images/financial_proj.jpg';
import sql_erd_proj from '../assets/images/sql_erd_proj.jpg';
import cdc_proj from '../assets/images/cdc_proj.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={did_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>The Impact of Racial Diversity on School Performance and Childhood Development: A Causal Inference Study</h2></a>
                <p>Add summary</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={powerbi_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Project Management and Financial Reporting Dashboard with Power BI</h2></a>
                <p>Add summary</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={financial_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Financial Well-being Evaluation Based on Self-Reported Financial Metrics</h2></a>
                <p>Add summary</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={sql_erd_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Customer Database Project for Targeting in the Banking Sector</h2></a>
                <p>Add summary</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={cdc_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>Machine Learning in Healthcare Project: Detecting Diabetes Using Demographics Information, Physical Examinations, and Lab Tests</h2></a>
                <p>Add summary</p>
            </div>
        </div>
    </div>
    );
}

export default Project;