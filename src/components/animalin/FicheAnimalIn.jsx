import React from 'react'

const AnimalInFiche = ({animalIn}) => {

return(
    <>
    <h2>artichats : {animalIn.Nom}</h2>

    <img src={`http://localhost:3000/${animalIn.Image}` }  />
    <ul>
        <li>Nom: {animalIn.Nom}</li>
    </ul>
    
    </>
)

}
export default AnimalInFiche