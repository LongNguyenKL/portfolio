import React from "react";
import ai_agent_proj from '../assets/images/marketing_agent_proj.png';
import did_proj from '../assets/images/did_proj.png';
import powerbi_proj from '../assets/images/powerbi_proj.jpg';
import financial_proj from '../assets/images/financial_proj.jpg';
import sql_erd_proj from '../assets/images/sql_erd_proj.jpg';
import cdc_proj from '../assets/images/cdc_proj.jpg';
import crime_proj from '../assets/images/crime_proj.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/LongNguyenKL/diversity-impact-on-education-project" target="_blank" rel="noreferrer"><img src={ai_agent_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LongNguyenKL/diversity-impact-on-education-project" target="_blank" rel="noreferrer"><h2>RAG-Enhanced AI Marketing Campaign Agent</h2></a>
                <p> Engineered an AI-powered Campaign Agent capable of generating strategy tailored to small and mid-sized businesses. This project utilizied a Retrieval-Augmented Generation (RAG) system 
                        and prompt engineering (role-based and few-shot prompting) to to enhance Google Gemini LLM output generation, ensuring generated campaign strategies and
                        content achieve high quality across 8 scoring dimensions.
</p>
            </div>
            <div className="project">
                <a href="https://github.com/LongNguyenKL/diversity-impact-on-education-project" target="_blank" rel="noreferrer"><img src={did_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LongNguyenKL/diversity-impact-on-education-project" target="_blank" rel="noreferrer"><h2>The Impact of Racial Diversity on School Performance and Childhood Development: A Causal Inference Study</h2></a>
                <p>Conducted a Causal Inference Study on the impact of racial diversity on children's academic performance on 9 semesters of the ECLS 2010-11 longitudinal data set. 
                     The results showed a positive impact of attending a diverse school academia, providing support for long-term DEI strategies in education.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/long-nguyen-4583791a2/details/projects/" target="_blank" rel="noreferrer"><img src={powerbi_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/long-nguyen-4583791a2/details/projects/" target="_blank" rel="noreferrer"><h2>Project Management and Financial Reporting Dashboard with Power BI</h2></a>
                <p>Designed a comprehensive Power BI dashboard to track and visualize project progress, task details, and budget utilization for executive and operations teams.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LongNguyenKL/Financial-Wellbeing-Project" target="_blank" rel="noreferrer"><img src={financial_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LongNguyenKL/Financial-Wellbeing-Project" target="_blank" rel="noreferrer"><h2>Financial Well-being Evaluation Based on Self-Reported Financial Metrics</h2></a>
                <p>Applied classification machine learning and regression methods to unravel patterns and correlations 
                    that help predict one's financial well-being, as well as identifying meaningful predictors.</p>
            </div>
            <div className="project">
                <a href="https://github.com/m-bermudez/ISM6562-Big-Data-Final-Project" target="_blank" rel="noreferrer"><img src={crime_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/m-bermudez/ISM6562-Big-Data-Final-Project" target="_blank" rel="noreferrer"><h2>Big Data Project: Communities and Crime Analysis with PySpark</h2></a>
                <p>Analyzes the Communities and Crime dataset to identify factors influencing violent crime rates in U.S. communities by integrating socio-economic and FBI crime data.
                    Utilized PySpark for large-scale data processing and modeling.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/LongNguyenKL/Customer-Data-Banking-Database" target="_blank" rel="noreferrer"><img src={sql_erd_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LongNguyenKL/Customer-Data-Banking-Database" target="_blank" rel="noreferrer"><h2>Customer Database Project for Targeting in the Banking Sector</h2></a>
                <p>Designed a comprehensive database to enhance marketing targeting through effective customer data utilization. 
                    The project included database design, query writing, performance tuning, and data visualization.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LongNguyenKL/Diabetes-Prediction-NHANES-Project" target="_blank" rel="noreferrer"><img src={cdc_proj} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LongNguyenKL/Diabetes-Prediction-NHANES-Project" target="_blank" rel="noreferrer"><h2>Detecting Diabetes Using Demographics Information, Physical Examinations, and Lab Tests</h2></a>
                <p>Engineered Machine learning models to identify individuals at risk of diabetes, enabling early detection by supporting traditional medical diagnosis methods
                    with predictive analytics.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;