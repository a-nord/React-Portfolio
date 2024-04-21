import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbarbar() {
  return (
    <Navbar fixed="top" expand="lg" className="navbar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Item className='li'>
                    <Nav.Link href="aboutme" className='link'>About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item className='li'>
                    <Nav.Link href="portfolio" className='link'>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item className='li'>    
                    <Nav.Link href="resume" className='link'>Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item className='li'>
                    <Nav.Link href="contactme" className='link'>Contact Me</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
