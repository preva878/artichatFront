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


const FamilleCard = ({familleaccueil}) => {

    return (
        <>
        
            <Card style={{ width: '18rem' }}>
     
                <Card.Body>
                    <Card.Title><BadgeIcon/>Nom: {familleaccueil.Nom}</Card.Title>
                    <Card.Title><LocationOnIcon/>Adresse: {familleaccueil.Adresse}</Card.Title>
                    <Card.Title><LocationOnIcon/>Ville: {familleaccueil.Ville}</Card.Title>
                    <Card.Title><LocationOnIcon/>Code Postal: {familleaccueil.CP}</Card.Title>
                    <Card.Title><PhoneIcon/>Contact: {familleaccueil.Contacttel}</Card.Title>
                    <Card.Title><EmailIcon/>ContactMail: {familleaccueil.ContactMail}</Card.Title>
                    
                   
                    <Card.Subtitle><HomeRepairServiceIcon/>Equipement: {familleaccueil.EquipementsFournit}</Card.Subtitle>
                    <Card.Subtitle><PetsIcon/> Artichats: {familleaccueil.Artichats}</Card.Subtitle>
                    <Card.Subtitle><StickyNote2Icon/>Notes: {familleaccueil.Notes}</Card.Subtitle>
                    
                    
                    
                    <Link to={`/fa/getfamilleaccueil/${familleaccueil.id}`}>
                        <Button>Detail</Button>
                    </Link>
                </Card.Body>


            </Card>
        
        
        
        </>
    )
}
export default FamilleCard