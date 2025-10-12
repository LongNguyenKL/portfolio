import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMagnifyingGlassChart, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python", 
    "R",
    "Regressors",
    "Classifiers",
    "scikit-learn",
    "Optuna",
    "statsmodels",
    "PySpark"
];

const labelsSecond = [
    "SQL",
    "Power BI",
    "Tableau",
    "SAS",
    "Excel",
    "Snowflake",
    "Pandas"
];

const labelsThird = [
    "OpenAI",
    "Gemini",
    "Copilot",
    "Claude",
    "PyTorch",
    "Hugging Face",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Advanced Modeling & Forecasting</h3>
                    <p>I have professional experience building and optimizing Machine Learning models for business impact. 
                        My expertise includes developing robust data pipelines, feature engineering, and model tuning
                        to support demand forecasting, market segmentation, and targeting.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skill set:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} size="3x"/>
                    <h3>Business Intelligence & Analytics</h3>
                    <p>I specialize in Business Intelligence solutions, from robust ETL, database management, and comprehensive
                        dashboards to deliver data-driven insights. I have experience working with cross-function teams to 
                        translate data into efficieny and growth strategies.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Skill set:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>AI Solutions</h3>
                    <p>I drive value through data products, employing the latest AI models - from traditional Machine Learning to Deep Learning,
                        NLP, and engineering LLM prompts. I create solutions, build custom models, and support research across various domains, 
                        <i> maintaining a commitment to continuously learn and integrate emerging technologies.</i></p>
                    <div className="flex-chips">
                        <span className="chip-title">Skill set:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;