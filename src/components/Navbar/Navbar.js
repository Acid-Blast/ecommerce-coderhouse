import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

import logo from './assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const MyNavbar = () => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#" onClick={() => setExpanded(false)}>
          <NavLink className='brand-div' to="/">
              <img className="img-logo" src={logo} alt='logo'/>
              <h2>Sublim-Art</h2>
          </NavLink>
        </Navbar.Brand>

        <CartWidget />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link onClick={() => setExpanded(false)}>
              <NavLink  to="/category/vinilos" className="nav-link" >Vinilos</NavLink>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
              <NavLink  to="/category/maderas" className='nav-link'>Maderas</NavLink>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
              <NavLink  to="/category/telas" className='nav-link'>De Tela</NavLink>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
              <NavLink  to="/category/sets" className='nav-link'>Sets</NavLink>
            </Nav.Link>
            {/* <Nav.Link onClick={() => setExpanded(false)}>
              <NavLink  to="/about" className='nav-link'>Sobre nosotros</NavLink>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;