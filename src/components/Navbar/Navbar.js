import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import logo from './assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';

const MyNavbar = () => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <div className='brand-div'>
              <img className="img-cart" src={logo} alt='logo'/>
              <h2>Sublim-Art</h2>
            </div>
          </Navbar.Brand>
          <CartWidget />
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
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
    </nav>
  );
}

export default MyNavbar;