import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

import LocationOnIcon from '@mui/icons-material/LocationOn';

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
            setNotes(data.Notes)
        } 
        getSingleVeterinaire()
    },[id] )

    return (
        <>
    
       <Container className="mt-10 p-4">
            <h1 className="text-center">Detail Product</h1>
            <hr />
            <Row>
                <Col md={8} lg={8} sm={8}>
                    <Card className='shadow-lg m-3 p-2 rounded'>
                            <Card.Img src={`http://localhost:8585/${Images}`} fluid />
                            <Card.Body>
                                <Card.Title>Nom: {Nom}</Card.Title>
                                 <Card.Title className="text-success"><LocationOnIcon/> Adresse: {Adresse}</Card.Title>
                                    <Card.Title className="text-success"><LocationOnIcon/> Ville et CP: {Ville}, {CP}</Card.Title>
                                    <Card.Text>
                                        TypeIntervention: {TypeIntervention},
                                        sur {Artichats}
                                    </Card.Text>
                                        <Card.Text>
                                        Artichats: {Artichats}
                                        </Card.Text>
                                            <Card.Text>
                                            Date Intervention: {DateIntervention}
                                            </Card.Text>
                                                <Card.Text>
                                                Prix: {Prix}
                                                </Card.Text>
                                                   
                                                        <Card.Text>
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