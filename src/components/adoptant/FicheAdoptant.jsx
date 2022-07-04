import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

import LinkIcon from '@mui/icons-material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PetsIcon from '@mui/icons-material/Pets';
import Linkify from 'react-linkify'


const FicheAdoptant = () => {

    const {id} = useParams()
    const history = useNavigate()

    const [Image,setImage]=useState('')
    const [Nom,setNom]=useState('')
    const [Adresse,setAdresse]=useState('')
    const [CP,setCP]=useState('')
    const [Ville,setVille]=useState('')
    const [ContactMail,setContactMail]=useState('')
    const [ContactPortable,setContactPortable]=useState('')
    const [Artichats,setArtichats]=useState('')
    const [Lien,setLien]=useState('')
    const [Note,setNote]=useState('')
    const [NumeroPermis,setNumeroPermis]=useState('')
    const [DatePermis,setDatePermis]=useState('')

    useEffect(() => {

        const getSingleAdoptantData = async () => {
            const {data} = await axios.get(`http://localhost:8585/api/adoptant/getadoptant/${id}`)
            console.log(data)

            setImage(data.Image)
            setNom(data.Nom)
            setAdresse(data.Adresse)
            setCP(data.CP)
            setVille(data.Ville)
            setContactMail(data.ContactMail)
            setContactPortable(data.ContactPortable)
            setArtichats(data.Artichats)
            setLien(data.Lien)
            setNote(data.Note)
            setNumeroPermis(data.NumeroPermis)
            setDatePermis(data.DatePermis)
        }
        getSingleAdoptantData()
    },[id])

    return (
        <>
    
       <Container className="mt-10 p-4">
            <h1 className="text-center">Detail Product</h1>
            <hr />
            <Row>
                <Col md={8} lg={8} sm={8}>
                    <Card className='shadow-lg m-3 p-2 rounded'>
                            <Card.Img src={`http://localhost:8585/${Image}`} fluid />
                            <Card.Body>
                                <Card.Title>Nom: {Nom}</Card.Title>
                                 <Card.Title className="text-success"><LocationOnIcon/> Adresse: {Adresse}</Card.Title>
                                    <Card.Title className="text-success"><LocationOnIcon/> Ville et Code Postal: {Ville}, {CP}</Card.Title>
                                    <Card.Title className="text-success"> <PetsIcon/>  Artichats: {Artichats}</Card.Title>
                                    <Card.Text><EmailIcon/>
                                    ContactMail: {ContactMail}
                                    </Card.Text>
                                        <Card.Text><PhoneIcon/>
                                        ContactPortable: {ContactPortable}
                                        </Card.Text>
                                            <Card.Text><LinkIcon/> <Linkify>
                                                Lien: {Lien} </Linkify>
                                            </Card.Text>
                                                <Card.Text><LocalPoliceIcon/>
                                                NumeroPermis: {NumeroPermis}
                                                </Card.Text>
                                                    <Card.Text><LocalPoliceIcon/>
                                                    DatePermis: {DatePermis}
                                                    </Card.Text>
                                                        <Card.Text><StickyNote2Icon/>
                                                            Note: {Note}
                                                        </Card.Text>
                            <br />
                                <Link to={`/adoptant/getadoptantup/${id}`}>
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


export default FicheAdoptant