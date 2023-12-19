import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Connexion = () => {
  return (
    <div className='onebloc'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Votre adresse@mail.com" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label></Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="J'ai lu et j'accepte la politique de confidentialité" />
  </Form.Group>
  <Button variant="primary" type="ok">
    Accept
  </Button>
  </Form>
    </div>
  )
}

export default Connexion
