import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SponsorCard = ({sponsor}) => {

    return (
        <>
        <Card  style={{ width: '18rem' }}>
                <Card.Img src={`http://localhost:8585/${sponsor.image}` } /> 
                <Card.Body>
                    <Card.Title>Nom: {sponsor.nom}</Card.Title>
                    <Card.Title>materiel: {sponsor.materiel}</Card.Title>
                    <Card.Title>Etat: {sponsor.types}</Card.Title>
                    <Card.Title>quantite: {sponsor.quantite}</Card.Title>
                    <Card.Subtitle>adresse: {sponsor.adresse}, {sponsor.ville} {sponsor.cp} </Card.Subtitle>
              
                  
                    
                    {/* <Link to={`/FicheAnimalIn`}>
                        <Button>Detail</Button>
                    </Link> */}
                </Card.Body>

                
               
            </Card>
       
        </>
    )
}
export default SponsorCard