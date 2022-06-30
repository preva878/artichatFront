import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EquipementCard = ({equipements}) => {
    return(
        <>

        <Card  style={{ width: '18rem' }}>
            <Card.Img src={`http://localhost:8585/${equipements.Image}` } /> 
            <Card.Body>
                <Card.Title>Nom: {equipements.Nom}</Card.Title>
                <Card.Title>Famille: {equipements.Types}</Card.Title>
                <Card.Title>Etat: {equipements.Etat}</Card.Title>
                <Card.Title>Date d'arrivée: {equipements.DateEntree}</Card.Title>
               
                <Card.Subtitle>Quantite: {equipements.Quantite}</Card.Subtitle>
               
                
            </Card.Body>
        </Card>
        </>
    )




}
export default EquipementCard