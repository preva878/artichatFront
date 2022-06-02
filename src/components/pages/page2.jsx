
import axios from "axios"
import { useEffect, useState } from "react"


const Page2 = function(props){

    
    const {nomOutInput} = props

    const [id,setId]= useState("")
    const [Nom,setNomOut]= useState("")
    const [NomDefinitif,setNomDefinitif] = useState("")
    const [Particularite,setParticularite]= useState("")
    const [SexeDefini,setSexe] = useState("")
    const [Adoptant,setAdoptant] = useState("")
    const[Age,setAge]=useState("")
    const[Poids,setPoids]=useState("")
    const[Vaccin,setVaccin]=useState("")
    const[DateVaccin,setDateVaccin]=useState("")
    const[Puce,setPuce]=useState("")
    const[Sterilisation,setSterilisation]=useState("")
    const [DateSterilisation,setDateSterilisation]=useState("")
    const [DateDepart,setDateDepart]=useState("")



    useEffect(()=>{
        if(nomOutInput){
            axios.get("http://localhost:8085/animaloutnom?Nom=" + nomOutInput)
            .then(({data})=>{
               
                setNomOut(data.Nom)
                setNomDefinitif(data.NomDefinitif)
                setSexe(data.SexeDefini)
                setParticularite(data.Particularite)
                setAdoptant(data.Adoptant)
                setAge(data.Age)
                setPoids(data.Poids)
                setVaccin(data.Vaccin)
                setDateVaccin(data.DateVaccin)
                setPuce(data.Puce)
                setSterilisation(data.Sterilisation)
                setDateSterilisation(data.DateSterilisation)
                setDateDepart(data.DateDepart)
              
                    console.log(data.Vaccin)
            })
        }
    },[nomOutInput])

    return(

        <div>
      
       <h2>Nom de l'artichat qui s'en va :{Nom}</h2>
       <ul>
           <li>Nom definitif : {NomDefinitif}</li>
            <li>sexe defini : {SexeDefini}</li>
            <li>Particularite: {Particularite}</li>
            <li>Adoptant : {Adoptant}</li>
            <li>Age : {Age} mois</li>
            <li>Poids : {Poids} kg</li>
            <li> vaccin:{Vaccin}</li>
            <li>date de la vaccination : {DateVaccin}</li>
            <li>puce numero : {Puce}</li>
            <li>sterilise?: {Sterilisation}</li>
            <li>date de la sterilisation: {DateSterilisation}</li>
            <li>date de depart : {DateDepart}</li>
       </ul>
       
   </div>
    )
}
export default Page2