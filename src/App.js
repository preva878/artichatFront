import Page1 from './components/page1';
import Page2 from './components/pages/page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/page4';
import Page5 from './components/pages/Page5';
import AnimalInPost from './components/animalin/PostAnimalin';

import Layout from './components/Layout';
import Home from './components/Home';



import { Route } from 'react-router-dom';
//import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  


  const [nomOutInput,setinputNomout]=useState("")
  const [animalNomout,setAnimalNomout]=useState("")
  const [nomInput,setInputNom]=useState("")
    const [animalNom,setAnimalNom]=useState("")
 const Click=function(){
     setAnimalNom(nomInput)
    
 }
  const Click1=function(){
     setAnimalNomout(nomOutInput)
  }
  
  
  
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
