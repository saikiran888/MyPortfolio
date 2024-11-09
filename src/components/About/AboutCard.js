import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         <p style={{ textAlign: "justify" }}>
              Hello! I’m <span className="purple">Saikiran Mandula</span> from <span className="purple">Hyderabad, India</span>.
              <br />
              I am currently pursuing a Master’s in Data Science at the University of Maryland, Baltimore County (UMBC), building expertise in advanced analytics, machine learning, and AI.
              <br />
              With <span className="purple">2 years</span> of experience as a Software Engineer at <span className="purple">Nagarro Software Pvt. Ltd.</span>, I specialize in creating data-driven solutions that drive measurable outcomes. My work has focused on predictive modeling, system optimization, and delivering end-to-end solutions in sectors such as healthcare and eCommerce.
              <br />
              <br />
              I am passionate about solving real-world challenges through <span className="purple">data science</span> and <span className="purple">AI-driven insights</span>, with strong skills in Python, SQL, and data visualization tools like Tableau and Power BI. My approach combines technical depth with a commitment to innovation and continuous learning.
              <br />
              <br />
              Outside of work, I enjoy staying active and exploring new places, always ready to bring fresh perspectives and creativity to the projects I undertake.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistency turns small actions into big achievements"{" "}
          </p>
          <footer className="blockquote-footer">Saikiran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
