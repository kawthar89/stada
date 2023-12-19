import React, { useState } from 'react'
import Strada from './Strada'
import Navbar from './Navbar'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import promo from '../images/promotion.png'
import Footer from './Footer';


const Accueil = () => {
  const [strada, setstrada] =useState(Strada)
  const Addstrada=(x)=>{
    setstrada([...Strada,x])}
    const [search, setsearch] = useState("")
  return (
    <div className='bondehaute'>
    <div  className="bonde">
    <p>Livraison gratuite à partir de 189TND </p>
    <img className='bondeimg' src={promo} alt='gh' />
    </div>
    <Navbar />
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/12/01122913/fbblack-friday-slider-Main-desktop.png"
        alt="First slide"
      />
      <Carousel.Caption>
      
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://oberson.com/cdn/shop/articles/choisir-vetements-hiver-enfants-joua_c49f6241-7b87-4a90-8f30-fb792f961a01.jpg?v=1692884764&width=1500"
        alt="Second slide"
      />
      <Carousel.Caption>
      

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://static.cnews.fr/sites/default/files/styles/image_750_422/public/web_hm_pr-a4-landscape6_61570468766c9_0.jpg?itok=uhe_cLv4"
        alt="HIVER"
      />
      <Carousel.Caption>
      
      
      </Carousel.Caption>
    </Carousel.Item>
   </Carousel>
    
    <div className='bloc'>
      <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/12/11134135/PARFUMS-desktopnouveates.png" />
           
          </Card>
        </Col>
        
      ))}
    </Row>
    <Row xs={1} md={1} className="g-5">
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Img variant="top"src='https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/11/30083703/fbDECORATION-BANNER-DESKTOPNEWSLETTER.png'/>
         
        </Card>
      </Col>
      
    ))}
  </Row>
  </div>
  <div className='texte'>
  <h1>LES MARQUE A LA UNE</h1>
  <div className='marques'>
  <img src='https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/11/06085421/ARmin-Home-2.png'></img>
  <img src='https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/06/14091612/NEW-8.png'></img>
  <img src='https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/11/06090728/ARmin-Home-4.png'></img>
  <img src='https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/07/07110326/Untitled-design-2023-07-07T110306.133.png'></img>
  <img src='https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/08/28121846/Design-sans-titre-2023-08-28T121749.716.png'></img>
  <img src='https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/11/03092853/Untitled-design-66.png'></img>
  <img src='https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/11/06104134/ARmin-Home-3.png'></img>
  <img src='https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2023/06/14123542/duo.png'></img>
    </div>
   
  </div>
  <div>
    <Footer/>
    </div>
    </div>
  
  )
}




export default Accueil;
