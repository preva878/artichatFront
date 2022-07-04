import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AnimalOutCard = ({animalOut}) => {
    return (
        <>
          <Card  style={{ width: '18rem' }}>
                <Card.Img src={`http://localhost:8585/${animalOut.Image}` } /> 
                <Card.Body>
                    <Card.Title>Nom: {animalOut.Nom}</Card.Title>
                    <Card.Title>Famille: {animalOut.Adoptant}</Card.Title>
                    <Card.Title>Etat: {animalOut.Etat}</Card.Title>
                    <Card.Title>Date d'arrivée: {animalOut.DateDepart}</Card.Title>
                    <Card.Title>vaccin: {animalOut.Vaccin}</Card.Title>
                    <Card.Subtitle>sexe: {animalOut.SexeDefini}</Card.Subtitle>
                   
                    <Link to={`/animalout/getAnimalOut/${animalOut.id}`}>
                        <Button>Detail</Button>
                    </Link>
                    
                </Card.Body>

                
               
            </Card>
        </>
    )
}
export default AnimalOutCard