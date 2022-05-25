import Page1 from "../page1"
import Page2 from "./page2"

import {  useState } from "react"

const Page3 = function(){
    const [nomInput,setInputNom]=useState("")
    const [animalNom,setAnimalNom]=useState("")
    const [nomOutInput,setinputNomout]=useState("")
  const [animalNomout,setAnimalNomout]=useState("")
 const Click=function(){
     setAnimalNom(nomInput)
    
 }
 const Click1=function(){
    setAnimalNomout(nomOutInput)
 }
    return(
        <div>
            <h2>titre essai page3</h2>
<a > 
      <input type="text" value={nomInput} onChange={i => setInputNom(i.target.value)} ></input>
          <button onClick={Click} >entrer nom </button>
        <br></br>
         <Page1 nomInput={animalNom} ></Page1> 
         </a>
         <input type="text" value={nomOutInput} onChange={j => setinputNomout(j.target.value)} ></input>
      <button onClick={Click1} >entrer nom animal sortant</button>
      <br></br>
      <Page2 nomOutInput={animalNomout}></Page2>
        </div>
    )
}
export default Page3