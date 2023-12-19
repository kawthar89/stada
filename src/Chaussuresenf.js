import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Chaussuresenf = () => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/06/30021155/chaussure-tensaur-768x768.jpg" />
    <Card.Body>
      <Card.Title>ADIDAS – TENSAUR I</Card.Title>
      <Card.Text>
       ADIDAS Enfants 129TND
      </Card.Text>
      <Button variant="primary">Select options</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/10/18175012/nike-chaussures-revolution-6-nn-2-768x768.webp" />
  <Card.Body>
    <Card.Title>Nike Enfant – Nike Chaussures Revolution 6 Nn Noir Gris</Card.Title>
    <Card.Text>
     ADIDAS Enfants 229TND
    </Card.Text>
    <Button variant="primary">Select options</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Chaussuresenf
