import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'


import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PetsIcon from '@mui/icons-material/Pets';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PaidIcon from '@mui/icons-material/Paid';

const SponsorFiche = () => {

    const {id} = useParams()
    const history = useNavigate()

    const [image,setimage] = useState('')
    const [nom,setnom] = useState('')
    const [materiel,setmateriel] = useState('')
    const [dateEntre,setdateEntre] = useState('')
    const [quantite,setquantite] = useState('')
    const [types,settypes] = useState('')
    const [adresse,setadresse] = useState('')
    const [cp,setcp] = useState('')
    const [ville,setville] = useState('')

   useEffect(() => {

    const getSingleSponsor = async () => {
        const {data} =await axios.get(`http://localhost:8585/api/sponsor/getsponsor/${id}`)
        console.log(data)

        setimage(data.image)
        setnom(data.nom)
        setmateriel(data.materiel)
        setdateEntre(data.dateEntre)
        setquantite(data.quantite)
        settypes(data.types)
        setadresse(data.adresse)
        setcp(data.cp)
        setville(data.ville)
    }
    getSingleSponsor()
   },[id] )

   return(
    <>
    <Container className="mt-10 p-4">
        <h1 className="text-center">Detail Sponsors</h1>
        <hr />
        <Row>
            <Col md={8} lg={8} sm={8}>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        <Card.Img src={`http://localhost:8585/${image}`} fluid />
                        <Card.Body>
                            <Card.Title><BadgeIcon/>Nom: {nom}</Card.Title>
                             <Card.Title className="text-success"><LocationOnIcon/>adresse: {adresse}</Card.Title>
                                <Card.Title className="text-success"><LocationOnIcon/>ville et code postal: {cp},{ville}</Card.Title>
                                <Card.Text><StickyNote2Icon/>
                                materiel: {materiel}
                                </Card.Text>
                                    <Card.Text>
                                    quantite: {quantite}
                                    </Card.Text>
                                        <Card.Text>
                                        types: {types}
                                        </Card.Text>
                                            <Card.Text><CalendarMonthIcon/>
                                                Date d'entrée: {dateEntre}
                                            </Card.Text>
                                                
                        <br />
                            <Link to={`/sponsor/getsponsorup/${id}`}>
                                <Button>Update</Button>
                            </Link>
                    </Card.Body>        
                </Card>
            </Col>
        </Row>
        </Container>
    
    </>
   )
}
export default SponsorFiche