import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PetsIcon from '@mui/icons-material/Pets';
import BadgeIcon from '@mui/icons-material/Badge';


const VeterinairesCard = ({veterinaire}) => {
    return (

        <>

        <Card  style={{ width: '18rem' }}>
        <Card.Img src={`http://localhost:8585/${veterinaire.Images}` }/>
            <Card.Body>
                <Card.Title><BadgeIcon/>Nom: {veterinaire.Nom}</Card.Title>
                <Card.Title><LocationOnIcon/>Adresse: {veterinaire.Adresse}, {veterinaire.Ville}</Card.Title>
                
     
                <Card.Title><PetsIcon/>Artichats: {veterinaire.Artichats}</Card.Title>
               
                <Card.Subtitle><EmailIcon/>Mail: {veterinaire.ContactMail}</Card.Subtitle>
                <Card.Subtitle><PhoneIcon/>Contact: {veterinaire.ContactTel}</Card.Subtitle>
              
                <Link to={`/veto/getveterinaire/${veterinaire.id}`}>
                        <Button>Detail</Button>
                    </Link>
            </Card.Body>

            
           
        </Card>
   
       
    </>
    )
}
export default VeterinairesCard