import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Homme = () => {
  return (
    <div className='Menu'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Homme</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">vetements</Nav.Link>
            <Nav.Link href="#action2">Chaussures</Nav.Link>
            <NavDropdown title="Accessoires" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Boucles</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Bracelets
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Bagues
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Collection
            </Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <img className='ima' src='https://cdn.fashiola.fr/I51244/560x560/les-tendances-mode-homme-de-cet-hiver.jpg'></img>
    </div>
  )
}

export default Homme

