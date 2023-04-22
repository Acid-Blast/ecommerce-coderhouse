import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

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
              <img className="img-logo" src="https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/logo.png?alt=media&token=8d281d3f-3244-4ab5-8c7d-8e905b4e9820" alt='logo'/>
              <h2>Sublim-Art</h2>
          </NavLink>
        </Navbar.Brand>

        <CartWidget />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              className="nav-link"
              as={Link}
              to="/category/vinilos" 
              onClick={() => setExpanded(false)}
            > Vinilos
            </NavLink>
            <NavLink
              className='nav-link'
              as={Link}
              to="/category/maderas" 
              onClick={() => setExpanded(false)}
            > Maderas
            </NavLink>
            <NavLink
              className='nav-link'
              as={Link}
              to="/category/telas" 
              onClick={() => setExpanded(false)}
            > Telas
            </NavLink>
            <NavLink
              className='nav-link'
              as={Link}
              to="/category/sets" 
              onClick={() => setExpanded(false)}
            > Sets
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;