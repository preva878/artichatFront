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
         
       
           
         
        </Route>
      </Routes>
    </BrowserRouter>
         
    
        </div>
      </header>
      
      




      
    </div> 
  );
}

export default App;
