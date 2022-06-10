import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AnimalInCard = ({Artichats}) => {
    return (
        <>

            <Card  style={{ width: '18rem' }}>
                {/* <Card.Img src={product.image} /> */}
                <Card.Body>
                    <Card.Title>Nom: {Artichats.Nom}</Card.Title>
                    <Card.Title>Famille: {Artichats.FamilleAccueil}</Card.Title>
                    <Card.Title>Etat: {Artichats.Etat}</Card.Title>
                    <Card.Title>Date d'arrivée: {Artichats.DateEntree}</Card.Title>
                    <Card.Title>etats: {Artichats.Etat}</Card.Title>
                    <Card.Subtitle>sexe: {Artichats.currentSexe}</Card.Subtitle>
                    <Card.Text>
                        Note: {Artichats.Note.slice(0,100)}
                    </Card.Text>
                    
                </Card.Body>

                
               
            </Card>
       
           
        </>
    )
}
export default AnimalInCard