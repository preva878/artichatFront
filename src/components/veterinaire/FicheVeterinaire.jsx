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


const VeterinaireFiche = () => {

    const {id} = useParams()
    const history = useNavigate()

    const [Images,setImages] = useState('')
    const [Nom,setNom] = useState('')
    const [Adresse,setAdresse] = useState('')
    const [Ville,setVille] = useState('')
    const [CP,setCP] = useState('')
    const [DateIntervention,setDateIntervention] = useState('')
    const [Prix,setPrix] = useState('')
    const [TypeIntervention,setTypeIntervention] = useState('')
    const [Artichats,setArtichats] = useState('')
    const [ContactMail,setContactMail]= useState('');

    const [ContactTel,setContactTel]= useState('');
    const [Notes,setNotes] = useState('')

    useEffect(() => {

        const getSingleVeterinaire = async () => {
            const {data} = await axios.get(`http://localhost:8585/api/veto/getveterinaire/${id}`)
            console.log(data)

            setImages(data.Images)
            setNom(data.Nom)
            setAdresse(data.Adresse)
            setVille(data.Ville)
            setCP(data.CP)
            setDateIntervention(data.DateIntervention)
            setPrix(data.Prix)
            setTypeIntervention(data.TypeIntervention)
            setArtichats(data.Artichats)
            setContactMail(data.ContactMail)
            setContactTel(data.ContactTel)
            setNotes(data.Notes)
        } 
        getSingleVeterinaire()
    },[id] )

    return (
        <>
    
       <Container className="mt-10 p-4">
            <h1 className="text-center">Detail Veterinaire</h1>
            <hr />
            <Row>
                <Col md={8} lg={8} sm={8}>
                    <Card className='shadow-lg m-3 p-2 rounded'>
                            <Card.Img src={`http://localhost:8585/${Images}`} fluid />
                            <Card.Body>
                                <Card.Title><BadgeIcon/>Nom: {Nom}</Card.Title>
                                 <Card.Title className="text-success"><LocationOnIcon/> Adresse: {Adresse}</Card.Title>
                                    <Card.Title className="text-success"><LocationOnIcon/> Ville et CP: {Ville}, {CP}</Card.Title>
                                    <Card.Title className="text-success"><PhoneIcon/> ContactTel: {ContactTel}</Card.Title>
                                    <Card.Title className="text-success"><EmailIcon/> ContactMail: {ContactMail}</Card.Title>
                                    <Card.Text><MedicalServicesIcon/>
                                        TypeIntervention: {TypeIntervention},
                                        sur {Artichats}
                                    </Card.Text>
                                        <Card.Text><PetsIcon/>
                                        Artichats: {Artichats}
                                        </Card.Text>
                                            <Card.Text><CalendarMonthIcon/>
                                            Date Intervention: {DateIntervention}
                                            </Card.Text>
                                                <Card.Text><PaidIcon/>
                                                Prix: {Prix}
                                                </Card.Text>
                                                   
                                                        <Card.Text><StickyNote2Icon/>
                                                            Note: {Notes}
                                                        </Card.Text>
                            <br />
                                <Link to={`/veto/getveterinaireup/${id}`}>
                                    <Button>update</Button>
                                </Link>
                        </Card.Body>        
                    </Card>
                </Col>
            </Row>
            </Container>
        
        </>
        )

    
}
export default VeterinaireFiche