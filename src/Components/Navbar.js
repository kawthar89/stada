import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import coeur from '../images/coeurs.png'
import panier from '../images/paniers.png'
import Footer from './Footer'

const Navbar = () => {
  const [search, setsearch] = useState("")
  return (
    <div className='Listaa'>
<div className='menu-bar'>
    <ul>
    <Link to="/"><li>Accueil</li></Link>
    <Link to="/Femme"><li>Femme</li></Link>
    <Link to="/Homme"><li>Homme</li></Link>
    <Link to="/Enfants"><li>Enfants</li></Link>
    </ul>
    </div>
   <img src='https://stradatoulon.fr/wp-content/uploads/2022/04/strada-logo.jpg'></img>
   <div className='search-bar'>
   <div className='searsh-input'>
   <input type='text' placeholder='rechercher des produits'  className='search' onChange={(e)=>setsearch(e.target.value)}></input>
  <button onClick >Rechercher</button>
  </div>
     <div className='icones'>
     <img src={coeur}></img>
     <img src={panier}></img>
     </div>
     </div>
  
    </div>
  )
}

export default Navbar
