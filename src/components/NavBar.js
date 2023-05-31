import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
    }
  }
  window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
    return(
      <Navbar  expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className={activeLink === 'home' ? 'active navabr-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/testimonials" className={activeLink === 'testimonials' ? 'active navabr-link': 'navbar-link'}onClick={() => onUpdateActiveLink('testimonials')}>Community</Nav.Link>
            <Nav.Link as={Link} to="/team" className={activeLink === 'team' ? 'active navabr-link': 'navbar-link'}onClick={() => onUpdateActiveLink('team')}>Why?</Nav.Link>
            
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://ca.linkedin.com/in/muhammadqassimy"><img src={navIcon1} alt=""/></a>
              <a href="https://www.facebook.com/profile.php?id=100092180580959"><img src={navIcon2} alt=""/></a>
              <a href="https://twitter.com/HandiFuel"><img src={navIcon3} alt=""/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}