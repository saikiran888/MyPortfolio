import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ChatwithPdf from "../../Assets/Projects/ChatwithPdf.png";
import CustomerChurn from "../../Assets/Projects/CustomerChurn.png";
import Multilanguage_invoice from "../../Assets/Projects/Multilanguage_invoice.png";
import Nextword_predict from "../../Assets/Projects/Nextword_predict.png";
import Pneumonia_detection from "../../Assets/Projects/Pneumonia_detection.png";
import StudentPerformance from "../../Assets/Projects/StudentPerformance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatwithPdf}
              isBlog={false}
              title="Chat with Pdf"
              description="An end-to-end application for querying multiple PDF documents using Google Gemini Pro, Langchain, and Streamlit, with PDF upload, vector embedding processing, and interactive Q&A."
              ghLink="https://github.com/saikiran888/Chat_with_Pdfs"
              demoLink="https://chatwithpdfsllm.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudentPerformance}
              isBlog={false}
              title="Student Performance Analysis"
              description="A modular, end-to-end machine learning project following a real-world data science lifecycle. It covers data ingestion, preprocessing, model training, and deployment to predict math scores based on demographics and preparation factors.."
              ghLink="https://github.com/saikiran888/mlproject"
              // demoLink="https://github.com/saikiran888/mlproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CustomerChurn}
              isBlog={false}
              title="Customer Churn Prediction"
              description="A user-friendly Customer Churn Prediction App leveraging machine learning and ANN models to help businesses identify at-risk customers, visualize churn factors, and enhance retention strategies."
              ghLink="https://github.com/saikiran888/Customer-Churn-Prediction"
              demoLink="https://customer-churn-predictionapp.streamlit.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Multilanguage_invoice}
              isBlog={false}
              title="Multi-Language Invoice Extractor"
              description="An advanced Multi-Language Invoice Extractor powered by Google Gemini Pro, providing accurate, efficient data extraction across multiple languages, with an interactive Q&A interface and seamless integration using Streamlit and Langchain."
              ghLink="https://github.com/saikiran888/Multilanguage-Invoice-Extractor"
              demoLink="https://multilanguage-invoice-imgextractor.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pneumonia_detection}
              isBlog={false}
              title="Pneumonia detection"
              description="This project classifies pediatric CT scan images into Normal and Pneumonia categories using a DenseNet-161 model, achieving 92% accuracy with data augmentation to handle class imbalance."
              ghLink="https://github.com/saikiran888/Pneumonia-Detection"
              demoLink="https://drive.google.com/file/d/1Yy6IOMhbHXpcx2zFoQhlhc89AQ4SVfl8/view?pli=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nextword_predict}
              isBlog={false}
              title="Next Word Prediction"
              description="This Streamlit app predicts the next word in a sentence using a trained LSTM model and tokenizer, helping users complete their thoughts or explore AI-driven text generation."
              ghLink="https://github.com/saikiran888/Next-Word-Prediction"
              demoLink="https://next-word-predictionapp.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
