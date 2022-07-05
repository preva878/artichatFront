import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PetsIcon from '@mui/icons-material/Pets';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const SponsorCard = ({sponsor}) => {

    return (
        <>
        <Card  style={{ width: '18rem' }}>
                <Card.Img src={`http://localhost:8585/${sponsor.image}` } /> 
                <Card.Body>
                    <Card.Title><BadgeIcon/>Nom: {sponsor.nom}</Card.Title>
                    <Card.Title><HomeRepairServiceIcon/>materiel: {sponsor.materiel}</Card.Title>
                    <Card.Title>Types de materiel: {sponsor.types}</Card.Title>
                    <Card.Title>quantite: {sponsor.quantite}</Card.Title>
                    <Card.Subtitle><LocationOnIcon/>adresse: {sponsor.adresse}, {sponsor.ville} {sponsor.cp} </Card.Subtitle>
              
                  
                    
                    <Link to={`/sponsor/getsponsor/${sponsor.id}`}>
                        <Button>Detail</Button>
                    </Link> 
                </Card.Body>

                
               
            </Card>
       
        </>
    )
}
export default SponsorCard