import 'bootstrap/dist/css/bootstrap.min.css';

import AnimalInPost from './components/animalin/PostAnimalin';
import AnimalOutPost from './components/animalout/PostAnimalOut';
import FamilleAccueilPost from './components/familleaccueil/postFamilleAccueil';
import ShowFamilleAccueil from './components/familleaccueil/ShowFamilleAccueil';
import AdoptantPost from './components/adoptant/PostAdoptant';
import ShowAnimalIns from './components/animalin/ShowAnimalIn';
import ShowAnimalOuts from './components/animalout/ShowAnimalOut';
import AddAdoptant from './components/adoptant/PostAdoptant';
import SponsorPost from './components/sponsor/PostSponsor';
import ShowSponsor from './components/sponsor/ShowSponsor';
import Postequipement from './components/equipements/postEquipements';
import ShowEquipements from './components/equipements/ShowEquipements';
import VeterinairePost from './components/veterinaire/PostVeterinaire';
import ShowVeterinaire from './components/veterinaire/ShowVeterinaire';
import Faq from './components/Faq';

import Register from './Register'
import Login from './Login'

//
import AddProduct from './product/screens/AddProduct';
import EditProduct from './product/screens/EditProduct';

import ProductDetail from './product/screens/ProductDetail';
import AnimalInFiche from './components/animalin/FicheAnimalIn';
import AnimalOutFiche from './components/animalout/FicheAnimalOut';
import FicheAdoptant from './components/adoptant/FicheAdoptant'
import EquipementFiche from './components/equipements/FicheEquipement'
import FaFiche from './components/familleaccueil/Fichefamille'
import SponsorFiche from './components/sponsor/FicheSponsor'
import VeterinaireFiche from './components/veterinaire/FicheVeterinaire'

import AnimaInDetail from './components/animalin/AnimalIndetail'
import EditAdoptant from './components/adoptant/AdoptantDetail'
import EditEquipement from './components/equipements/EquipementsDetail'
import EditAnimalOut from './components/animalout/AnimalOutDetail'
import EditFamilleAccueil from './components/familleaccueil/FamilleAccueilDetails'
import EditSponsor from './components/sponsor/SponsorDetail'
import EditVeterinaire from './components/veterinaire/VeterinaireDetail'

import ShowProducts from './product/screens/ShowProducts';

//
import Layout from './components/Layout';
import Home from './components/Home';
import { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



import { Route } from 'react-router-dom';
//import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import ShowAdoptants from './components/adoptant/ShowAdoptant';

// import AddEquip from './components/equipements/addEquip';
// import allEquip from './components/equipements/ShowEquip'
// import ShowEquip from './components/equipements/ShowEquip';


function App() {
  



  
  
  
  return (

   
    <div className="App">
      <header className="App-header">
       
       <div>
       <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="AnimalInPost" element={<AnimalInPost />} />
          <Route path="AnimalOutPost" element={<AnimalOutPost />} />
         
          <Route path="FamilleAccueilPost" element={<FamilleAccueilPost />} />
          <Route path="ShowFamilleAccueil" element={<ShowFamilleAccueil />} />
          <Route path="AdoptantPost" element={<AdoptantPost />} />
          <Route path="ShowAnimalIns" element={<ShowAnimalIns />} />
          <Route path="ShowAnimalOuts" element={<ShowAnimalOuts />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="ShowProducts" element={<ShowProducts />} />
          <Route path="ShowAdoptants" element={<ShowAdoptants />} />
          <Route path="addAdoptant" element={<AddAdoptant />} />
          <Route path="PostSponsor" element={<SponsorPost />} />
          <Route path="ShowSponsor" element={<ShowSponsor />} />
          <Route path="EquipementPost" element={<Postequipement />} />
          <Route path="ShowEquipements" element={<ShowEquipements />} />
          <Route path="VeterinairePost" element={<VeterinairePost />} />
          <Route path="ShowVeterinaire" element={<ShowVeterinaire />} />
          <Route path="Faq" element={<Faq />} />
          
          <Route exact path='/product/getproduct/:id' element={<ProductDetail />} />
          <Route exact path='/animalin/getAnimalIn/:id' element={<AnimalInFiche />} />
          <Route exact path='/animalout/getAnimalOut/:id' element={<AnimalOutFiche />} />
          <Route exact path='/adoptant/getadoptant/:id' element={<FicheAdoptant />} />
          <Route exact path='/eqp/getequipement/:id' element={<EquipementFiche />} />
          <Route exact path='/fa/getfamilleaccueil/:id' element={<FaFiche />} />
          <Route exact path='/sponsor/getsponsor/:id' element={<SponsorFiche />} />
          <Route exact path='/veto/getveterinaire/:id' element={<VeterinaireFiche />} />
         
          <Route exact path='/animalin/getAnimalInUp/:id' element={<AnimaInDetail />} /> 
          <Route exact path='/adoptant/getadoptantup/:id' element={<EditAdoptant />} /> 
          <Route exact path='/eqp/getequipementup/:id' element={<EditEquipement />} />
          <Route exact path='/animalOut/getAnimalOutup/:id' element={<EditAnimalOut />} />  
          <Route exact path='/fa/getfamilleaccueilup/:id' element={<EditFamilleAccueil />} />
          <Route exact path='/product/getproductup/:id' element={<EditProduct />} /> 
          <Route exact path='/sponsor/getsponsorup/:id' element={<EditSponsor />} />   
          <Route exact path='/veto/getveterinaireup/:id' element={<EditVeterinaire />} />           
          

        
          

        </Route>
      </Routes>
    </BrowserRouter>
         
    
        </div>
      </header>
      
      




      
    </div> 
  );
}

export default App;
