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
import litlit from '../../assets/projects/litlit.png';
import animeotaku from '../../assets/projects/animeotaku.png';
import dndgo from '../../assets/projects/dndgo.png';
import ProjectCard from "./projectCard";





export default function Portfolio(){  
    return (    
        <div>
            <section>
            <h1 className="aboutMe">
                Projects
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={3} className="project-card">
            <ProjectCard
              imgPath={animeotaku}
              isBlog={false}
              title="Anime Otaku"
              description="This application provides an interactive anime theme search.  The user will be able to see information about the artist as well as a few more songs from the artist if they are interested. "
              ghLink="https://github.com/a-nord/Anime-Otaku"
              demoLink="https://a-nord.github.io/Anime-Otaku/"
            />
            </Col>

            <Col md={3} className="project-card">
            <ProjectCard
              imgPath={dndgo}
              isBlog={false}
              title="DnD GO"
              description="This MERN application is designed for the dungeons and dragons community to gather and connect. D&D-GO is an immersive game inspired by Dungeons & Dragons.  This is an interactive front-end group project."
              ghLink="https://github.com/Aricoria10/DnD-GO"
              demoLink="https://dnd-go.onrender.com/"
            />
            </Col>

            <Col md={3} className="project-card">
            <ProjectCard
              imgPath={litlit}
              isBlog={false}
              title="LitLit"
              description="This application is designed for the bookworm community to gather and connect. Users can create an account to access the app's features. This project was built using Express, Handlebars, mySQL2, sequelize, and tailwind css."
              ghLink="https://github.com/a-nord/Lit-Lit"
              demoLink="https://lit-lit-5480ca7bfcf5.herokuapp.com/login"
            />
            </Col>
            </Row>         
            
            </section>


            <section className="skills">
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
            </section>

        </div>
        
    )
}