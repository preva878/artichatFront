import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const VeterinairesCard = ({veterinaire}) => {
    return (

        <>

        <Card  style={{ width: '18rem' }}>
        <Card.Img src={`http://localhost:8585/${veterinaire.Images}` }/>
            <Card.Body>
                <Card.Title>Nom: {veterinaire.Nom}</Card.Title>
                <Card.Title>Adresse: {veterinaire.Adresse}, {veterinaire.Ville}</Card.Title>
                <Card.Title>prix: {veterinaire.Prix}</Card.Title>
                <Card.Title>intervention: {veterinaire.TypeIntervention}</Card.Title>
                <Card.Title>Date d'intervention: {veterinaire.DateIntervention}</Card.Title>
                <Card.Title>Artichats: {veterinaire.Artichats}</Card.Title>
                <Card.Subtitle>Notes: {veterinaire.Notes}</Card.Subtitle>
              
                
            </Card.Body>

            
           
        </Card>
   
       
    </>
    )
}
export default VeterinairesCard