import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PetsIcon from '@mui/icons-material/Pets';

import BadgeIcon from '@mui/icons-material/Badge';

const AdoptantCard = ({adoptant}) => {

    return(
        <>
            <Card style = {{ width:'18rem'}}>
            <Card.Img src={`http://localhost:8585/${adoptant.Image}` } /> 
                <Card.Body>
                    <Card.Title><BadgeIcon/>Nom: {adoptant.Nom}</Card.Title>
                    <Card.Title><LocationOnIcon/>Adresse: {adoptant.Adresse}</Card.Title>
                    <Card.Title><LocationOnIcon/>Cp:{adoptant.CP}</Card.Title>
                    <Card.Title><PetsIcon/>Artichat:{adoptant.Artichats}</Card.Title>
                    <Card.Subtitle><PhoneIcon/>Artichat:{adoptant.ContactPortable}</Card.Subtitle>
                    <Card.Subtitle><EmailIcon/>Artichat:{adoptant.ContactMail}</Card.Subtitle>
                </Card.Body>

                <Link to={`/adoptant/getadoptant/${adoptant.id}`}>
                        <Button>Detail</Button>
                    </Link>
            </Card>
        
        </>
    )
}

export default AdoptantCard