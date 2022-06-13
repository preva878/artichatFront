import Page1 from './components/page1';
import Page2 from './components/pages/page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/page4';
import Page5 from './components/pages/Page5';
import AnimalInPost from './components/animalin/PostAnimalin';
import AnimalOutPost from './components/animalout/PostAnimalOut';
import FamilleAccueilPost from './components/familleaccueil/postFamilleAccueil';
import AdoptantPost from './components/adoptant/PostAdoptant';
import ShowArtichats from './components/animalin/ShowAnimalIn';

//
import AddProduct from './product/screens/AddProduct';
import EditProduct from './product/screens/EditProduct';
import ProductDetail from './product/screens/ProductDetail';
import ShowProducts from './product/screens/ShowProducts';

//
import Layout from './components/Layout';
import Home from './components/Home';



import { Route } from 'react-router-dom';
//import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

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
          <Route path="page1" element={<Page1 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="AnimalInPost" element={<AnimalInPost />} />
          <Route path="AnimalOutPost" element={<AnimalOutPost />} />
          <Route path="page5" element={<Page5 />} />
          <Route path="FamilleAccueilPost" element={<FamilleAccueilPost />} />
          <Route path="AdoptantPost" element={<AdoptantPost />} />
          <Route path="ShowArtichats" element={<ShowArtichats />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="ShowProducts" element={<ShowProducts />} />
          
          
           
         
        </Route>
      </Routes>
    </BrowserRouter>
         
         
        </div>
      </header>
      
      




       {/* <a> 
      <input type="text" value={nomInput} onChange={i => setInputNom(i.target.value)} ></input>
          <button onClick={Click} >entrer nom </button>
        <br></br>
         <Page1 nomInput={animalNom} ></Page1> 
      </a> 
      <a>
      <input type="text" value={nomOutInput} onChange={j => setinputNomout(j.target.value)} ></input>
      <button onClick={Click1} >entrer nom animal sortant</button>
      <br></br>
      <Page2 nomOutInput={animalNomout}></Page2> 
      
      </a>    */}
    </div> 
  );
}

export default App;
