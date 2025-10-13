import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Background</h1>
        <a
          href="https://raw.githubusercontent.com/LongNguyenKL/portfolio/master/src/Resume_Long_GEN.docx"
          download="Resume_Long_GEN.docx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{
              backgroundColor: "white",
              color: "#050f0b",
              marginBottom: "30px",
              height: "50px",

              '&:hover': {
                backgroundColor: "#5000ca",
                color: "white",
              }            
            }}
            endIcon={<FileDownloadIcon />}
          >
                Download Full Resume
          </Button>
        </a>
        <div className="timeline-split-container" style={{maxHeight: "70vh"}}>
          <div className="timeline-column">
            <h3 className="work-experience-header">Work Experience</h3>
            <VerticalTimeline layout="1-column-right">
              {/* WORK HISTORY */}
              <VerticalTimelineElement className="vertical-timeline-element--work">
                <h4 className="vertical-timeline-element-subtitle">May 2025 - Dec 2025</h4>
                <h3 className="vertical-timeline-element-title">Business Analytics Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Vertical Bridge</h4>
                <p>
                  ML Predictive Modeling, Feature Engineering, EDA, GIS Analysis, Data Visualization
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement className="vertical-timeline-element--work">
                <h4 className="vertical-timeline-element-subtitle">Jan 2024 - May 2025</h4>
                <h3 className="vertical-timeline-element-title">Head Graduate Assistant - Data Analytics</h3>
                <h4 className="vertical-timeline-element-subtitle">University of South Florida</h4>
                <p>
                  Team Leading, Statistical Modeling, Hypothesis Testing, Curriculum Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement className="vertical-timeline-element--work">
                <h4 className="vertical-timeline-element-subtitle">May 2023 - Dec 2023</h4>
                <h3 className="vertical-timeline-element-title">Social Media Analytics Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Jabil Inc.</h4>
                <p>
                  Social Media Analytics, Content Audit, SWOT Analysis, KPI Evaluation, B2B Marketing Strategy, SEO
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement className="vertical-timeline-element--work">
                <h4 className="vertical-timeline-element-subtitle">Aug 2022 - May 2023</h4>
                <h3 className="vertical-timeline-element-title">Communications Specialist</h3>
                <h4 className="vertical-timeline-element-subtitle">Patel College of Global Sustainability</h4>
                <p>
                  Social Media Management, Content Creation, Graphic Design, Event Planning, Market Outreach
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
          {/* EDUCATION HISTORY */}
          <div className="timeline-column">
            <h3 className="education-header">Education</h3>
            <VerticalTimeline layout="1-column-left">
              <VerticalTimelineElement className="vertical-timeline-element--education">
                <h4 className="vertical-timeline-element-subtitle">Jan 2024 - December 2025</h4>
                <h3 className="vertical-timeline-element-title">M.S. in Artificial Intelligence & Business Analytics</h3>
                <h4 className="vertical-timeline-element-subtitle">University of South Florida</h4>
                <p>
                  <b>GPA:</b> 3.96<br></br>
                  <b>Relevant coursework</b>: Data Mining, Machine Learning, Data Warehousing, Advanced Database Management, 
                  Analytical Methods for Business, Application Development for Analytics, Big Data for Business, Text Analytics / NLP. <br></br>
                  <b>Competition</b>: 2024 Humana - Mays Healthcare Analytics Case Competition
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement className="vertical-timeline-element--education">
                <h4 className="vertical-timeline-element-subtitle">Aug 2019 - May 2023</h4>
                <h3 className="vertical-timeline-element-title">B.S. in Marketing - Digital Marketing</h3>
                <h4 className="vertical-timeline-element-subtitle">University of South Florida</h4>
                <p>
                  <b>GPA:</b> 3.96<br></br>
                  <b>Competition</b>: Top 10 National, Stukent Mimic Pro's Digital Marketing Competition<br></br>
                  <b>Nomination</b>: 2023 USF Student Employee of the Year Award
                </p> 
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;