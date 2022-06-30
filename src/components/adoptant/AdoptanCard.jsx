import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const AdoptantCard = ({adoptant}) => {

    return(
        <>
            <Card style = {{ width:'18rem'}}>
            <Card.Img src={`http://localhost:8585/${adoptant.Image}` } /> 
                <Card.Body>
                    <Card.Title>Nom: {adoptant.Nom}</Card.Title>
                    <Card.Title>Adresse: {adoptant.Adresse}</Card.Title>
                    <Card.Title>Cp:{adoptant.CP}</Card.Title>
                    <Card.Title>Artichat:{adoptant.Artichats}</Card.Title>
                </Card.Body>
            </Card>
        
        </>
    )
}

export default AdoptantCard