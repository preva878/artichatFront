import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AnimalInCard = ({animalIn}) => {
    return (
        <>

            <Card  style={{ width: '18rem' }}>
                <Card.Img src={`http://localhost:3000/${animalIn.Image}` } /> 
                <Card.Body>
                    <Card.Title>Nom: {animalIn.Nom}</Card.Title>
                    <Card.Title>Famille: {animalIn.FamilleAccueil}</Card.Title>
                    <Card.Title>Etat: {animalIn.Etat}</Card.Title>
                    <Card.Title>Date d'arrivée: {animalIn.DateEntree}</Card.Title>
                   
                    <Card.Subtitle>sexe: {animalIn.currentSexe}</Card.Subtitle>
                    {/* <Card.Text>
                        Note: {Artichat.Note.slice(0,100)}
                    </Card.Text> */}
                    
                </Card.Body>

                
               
            </Card>
       
           
        </>
    )
}
export default AnimalInCard