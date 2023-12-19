import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Footer = () => {
  return (
    <div>
    <div className='footer'>
    <div className='bloc1'>
  <img  className='logoo' src='https://stradatoulon.fr/wp-content/uploads/2022/04/strada-logo.jpg'></img>
  <h1>.Inscrivez-vous à notre newsletter</h1>
  <p>Inscrivez-vous à notre newsletter et recevez des infos sur les dernières tendances, nos nouveautés, et des offres exclusives. Vous pouvez vous désabonner à tout moment</p>
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
  <div className='bloc2'>
  <Link to="/Connexion"><li>Connexion</li></Link>
  <Link to="/Créeruncmpt"><li>Créer un compte</li></Link>
  <Link to="/Suivre"><li>Suivre ma commande</li></Link>
  <Link to="/Monpanier"><li>Mon panier</li></Link>
  </div>
  
  
  
  </div>
    </div>
  )
}

export default Footer
