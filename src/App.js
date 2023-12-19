import Accueil from './Components/Accueil';
import Homme from './Components/Homme';
import Enfants from './Components/Enfants';
import Femme from './Components/Femme';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Chaussuresenf from './Chaussuresenf';
import Connexion from './Components/Connexion';


function App(){
  const [search, setsearch] = useState("")
  return (
  
 
    <div>
  
 <Routes>
 <Route path='/' element={<Accueil/>}></Route>
 <Route path='/Femme' element={<Femme/>}></Route>
 <Route path='/Homme' element={<Homme/>}></Route>
 <Route path='/Enfants' element={<Enfants/>}></Route>
 <Route path='/Chaussure' element={<Chaussuresenf/>}></Route>
 <Route path='/Connexion' element={<Connexion/>}></Route>

 </Routes>

</div>

)
}
export default App;
