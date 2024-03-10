import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

export default function Navbarbar() {
  return (
    <Navbar fixed="top" expand="lg" className="navbar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Item className='li'>
                    <Nav.Link href="aboutme">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item className='li'>
                    <Nav.Link href="portfolio">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item className='li'>    
                    <Nav.Link href="resume">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item className='li'>
                    <Nav.Link href="contactme">Contact Me</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
