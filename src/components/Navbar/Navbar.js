import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <div className='brand-div'>
            <img className="img-logo" src={logo} alt='logo'/>
            <h2>Sublim-Art</h2>
          </div>
        </Navbar.Brand>
        <CartWidget />
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mx-auto ">
            <Nav.Link href="#vinilos">Vinilos</Nav.Link>
            <Nav.Link href="#set-jardin">Sets Jardin</Nav.Link>
            <Nav.Link href="#peluches">Peluches</Nav.Link>
            <Nav.Link href="#cartucheras">Cartucheras</Nav.Link>
            <Nav.Link href="#remeras">Remeras</Nav.Link>
            <Nav.Link href="#about">Sobre nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default MyNavbar;