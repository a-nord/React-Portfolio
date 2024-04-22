import React from "react";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit
} from "react-icons/di";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Portfolio(){  
    return (    
        <div>
            <h1 className="aboutMe">
                Projects
            </h1>

            <h2 className="socials">
                Skills
            </h2>
            <Container>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>                
                <Col xs={4} md={2} className="skill-icons">
                    <DiNodejs />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiReact />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiMongodb />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiGit />
                </Col>
            </Row>
            </Container>

        </div>
        
    )
}