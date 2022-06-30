import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FamilleCard = ({familleaccueil}) => {

    return (
        <>
        
            <Card style={{ width: '18rem' }}>
     
                <Card.Body>
                    <Card.Title>Nom: {familleaccueil.Nom}</Card.Title>
                    <Card.Title>Adresse: {familleaccueil.Adresse}</Card.Title>
                    <Card.Title>Ville: {familleaccueil.Ville}</Card.Title>
                    <Card.Title>Code Postal: {familleaccueil.CP}</Card.Title>
                   
                    <Card.Subtitle>Equipement: {familleaccueil.EquipementsFournit}</Card.Subtitle>
                    <Card.Subtitle>Artichats: {familleaccueil.Artichats}</Card.Subtitle>
                    <Card.Subtitle>Notes: {familleaccueil.Notes}</Card.Subtitle>
                    
                    
                    
                    {/* <Link to={`/FicheAnimalIn`}>
                        <Button>Detail</Button>
                    </Link> */}
                </Card.Body>


            </Card>
        
        
        
        </>
    )
}
export default FamilleCard