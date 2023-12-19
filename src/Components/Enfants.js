import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Chaussuresenf from '../Chaussuresenf';
const Enfants = () => {
  return (
    <div className='Menu'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Enfants</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">vetements</Nav.Link>
            <Nav.Link href="Chaussuresenf">Chaussures</Nav.Link>
           
            <NavDropdown title="Ages Enfants" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">bébé-fille(0-4ans)</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Bébé-garçon(0-4ans)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              fille(4-16ans)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              Garçon (4-16ans)
            </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <img className='imaa' src='https://cdn.shopify.com/s/files/1/0766/0447/3646/files/manteau-hiver-enfants.jpg?v=1697817483'></img>
    </div>
  )
}

export default Enfants
