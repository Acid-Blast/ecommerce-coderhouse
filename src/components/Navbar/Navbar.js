import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { getCategories } from '../../services/firebase/categories';
import { sweetAlert } from '../../services/sweetAlert/sweetAlert';
import { adaptCategories } from '../../adapters/adaptCategories';

import './Navbar.css';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState([])

  useEffect(() => {

    getCategories()
      .then(snapshot => {
        const categoriesAdapted = snapshot.docs.map(doc => {
          return adaptCategories(doc)
        })
        setCategories(categoriesAdapted)
      })
      .catch(error => sweetAlert('Error', `${error}`, 'error'))
      
    }, [])
    
  return(
    <Navbar expanded={expanded} expand="lg" variant="dark" fixed="top">
      <Container>
        <CartWidget />
        <Navbar.Brand  onClick={() => setExpanded(false)}>
          <NavLink href="#" className='brand-div' to="/">
              <img className="img-logo" src="https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/logo.png?alt=media&token=8d281d3f-3244-4ab5-8c7d-8e905b4e9820" alt='logo'/>
              <h2>Sublim-Art</h2>
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {
              categories.map(cat => {
                return (
                  <NavLink
                    key={cat.id}
                    className="nav-link"
                    as={Link}
                    to={`/category/${cat.slug}`} 
                    onClick={() => setExpanded(false)}
                  >
                  {cat.label}
                  </NavLink>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;