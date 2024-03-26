import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saikiran Mandula </span>
            from <span className="purple">India.</span>
            <br />
            I am currently pursuing my Master's in Data Science at the University of Maryland, Baltimore County (UMBC).
            <br />
            I have <span className="purple">2 years</span> of experience as a Software Engineer at <span className="purple">Nagarro Software Pvt Ltd.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

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
