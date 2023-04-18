import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

import logo from './assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css';

const MyNavbar = () => {

  const [expanded, setExpanded] = useState(false);

  return(
    <Navbar expanded={expanded} expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand  onClick={() => setExpanded(false)}>
          <NavLink href="#" className='brand-div' to="/#">
              <img className="img-logo" src={logo} alt='logo'/>
              <h2>Sublim-Art</h2>
          </NavLink>
        </Navbar.Brand>

        <CartWidget />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              to="/category/vinilos" 
              className="nav-link" 
              onClick={() => setExpanded(false)}
            > Vinilos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/category/maderas" 
              className='nav-link' 
              onClick={() => setExpanded(false)}
            > Maderas
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/category/telas" 
              className='nav-link' 
              onClick={() => setExpanded(false)}
            > Telas
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/category/sets" 
              className='nav-link' 
              onClick={() => setExpanded(false)}
            > Sets
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;