//import Page2 from './pages/page2';
import axios from "axios"
import { useEffect, useState } from "react"
//import { Outlet, Link } from "react-router-dom";

const Page1 = function(props){

    
    const {nomInput} = props

    const [id,setId]= useState("")
    const [Nom,setNom]= useState("")
    const [currentSexe,setCurrentSexe] = useState("")
    const [FamilleAccueil,setFamilleAccueil] = useState("")
    const[Age,setAge]=useState("")
    const[Poids,setPoids]=useState("")
    const[DateEntree,setDateEntree]=useState("")
    const[Etat,setEtat]=useState("")
    const[Traitement,setTraitement]=useState("")
    const[Note,setNote]=useState("")
   

    useEffect(()=>{
        if(nomInput){
            axios.get("http://localhost:3000/animalinnom?Nom=" + nomInput)
            .then(({data}) => {
                setId(data.id)
                setNom(data.Nom)
                setCurrentSexe(data.currentSexe)
                setFamilleAccueil(data.FamilleAccueil)
                setAge(data.Age)
                setPoids(data.Poids)
                setDateEntree(data.DateEntree)
                setEtat(data.Etat)
                setTraitement(data.Traitement)
                setNote(data.Note)
                    console.log(data)
            })
        }
    },[nomInput])


   
    return(

        <div>
   
          
         
          
     
       <ul>
           <li> sexe : {currentSexe}</li>
           <li>nom: {Nom} </li>
           <li> id: {id}</li>
           <li> famille d'accueil: {FamilleAccueil}</li>
           <li>age: {Age} semaines</li>
           <li>Poids: {Poids} gramme</li>
           <li>Arrivée le : {DateEntree}</li>
           <li>Etat: {Etat}</li>
           <li>Traitement : {Traitement}</li>
           <p>note : {Note}</p>
       </ul> 
       
       
   </div>
    )
}
export default Page1