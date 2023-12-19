import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Femme = () => {
  return (
    <div className='Menu'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Femme</Navbar.Brand>
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
    <img className='imo' src='https://assets.afcdn.com/story/20151113/811252_w2475h1856c1cx1245cy815.jpg'></img>
    </div>
  )
}

export default Femme
