import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <div className='brand-div'>
            <NavLink to="/">
              <img className="img-logo" src={logo} alt='logo'/>
            </NavLink>
            <h2>Sublim-Art</h2>
          </div>
        </Navbar.Brand>
        <CartWidget />
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mx-auto ">
            <Nav.Link  >
              <NavLink to="/vinilos" className='nav-link'>Vinilos</NavLink>
            </Nav.Link>
            <Nav.Link  >
              <NavLink to="/maderas" className='nav-link'>Maderas</NavLink>
            </Nav.Link>
            <Nav.Link  >
              <NavLink to="/telas" className='nav-link'>De Tela</NavLink>
            </Nav.Link>
            <Nav.Link  >
              <NavLink to="/sets" className='nav-link'>Sets</NavLink>
            </Nav.Link>
            <Nav.Link  >
              <NavLink to="/about" className='nav-link'>Sobre nosotros</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default MyNavbar;