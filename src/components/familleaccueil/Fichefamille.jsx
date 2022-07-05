import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'


import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PetsIcon from '@mui/icons-material/Pets';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const FaFiche = () => {

    const {id} = useParams()
    const history = useNavigate()

    const [Nom,setNom] = useState('')
    const [Adresse,setAdresse] = useState('')
    const [CP,setCP] = useState('')
    const [Ville,setVille] = useState('')
    const [EquipementsFournit,setEquipementsFournit] = useState('')
    const [Artichats,setArtichats] = useState('')
    const [ContactMail,setContactMail] = useState('');
    const [Contacttel,setContacttel] = useState('');
    const [Notes,setNotes] = useState('')

    useEffect(() => {

        const getSingleFaData = async() => {
            const {data} = await axios.get(`http://localhost:8585/api/fa/getfamilleaccueil/${id}`)
            console.log(data)
            
            setNom(data.Nom)
            setAdresse(data.Adresse)
            setCP(data.CP)
            setVille(data.Ville)
            setEquipementsFournit(data.EquipementsFournit)
            setArtichats(data.Artichats)
            setContactMail(data.ContactMail)
            setContacttel(data.Contacttel)
            setNotes(data.Notes)
        }
        getSingleFaData()
    },[id])

    return(
        <>
         <Container className="mt-10 p-4">
        <h1 className="text-center">Detail Famille Accueil</h1>
        <hr />
        <Row>
            <Col md={8} lg={8} sm={8}>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        
                        <Card.Body>
                            <Card.Title><BadgeIcon/>Nom: {Nom}</Card.Title>
                             <Card.Title className="text-success"><LocationOnIcon/>Adresse: {Adresse}</Card.Title>
                                <Card.Title className="text-success"><LocationOnIcon/>Ville et code postal: {CP}, {Ville}</Card.Title>
                                <Card.Title className="text-success"><EmailIcon/>mail de contact: {ContactMail}</Card.Title>
                                <Card.Title className="text-success"><PhoneIcon/>numero de Contact: {Contacttel}</Card.Title>
                                <Card.Text><HomeRepairServiceIcon/>
                                    Equipement fournit?: {EquipementsFournit}
                                </Card.Text>
                                    <Card.Text> <PetsIcon/>
                                        Artichats: {Artichats}
                                    </Card.Text>
                                        <Card.Text><StickyNote2Icon/>
                                            Notes: {Notes}
                                        </Card.Text>
                                            
                        <br />
                            <Link to={`/fa/getfamilleaccueilup/${id}`}>
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
export default FaFiche