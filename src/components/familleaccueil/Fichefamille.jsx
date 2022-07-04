import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

const FaFiche = () => {

    const {id} = useParams()
    const history = useNavigate()

    const [Nom,setNom] = useState('')
    const [Adresse,setAdresse] = useState('')
    const [CP,setCP] = useState('')
    const [Ville,setVille] = useState('')
    const [EquipementsFournit,setEquipementsFournit] = useState('')
    const [Artichats,setArtichats] = useState('')
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
            setNotes(data.Notes)
        }
        getSingleFaData()
    },[id])

    return(
        <>
         <Container className="mt-10 p-4">
        <h1 className="text-center">Detail Product</h1>
        <hr />
        <Row>
            <Col md={8} lg={8} sm={8}>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        
                        <Card.Body>
                            <Card.Title>Nom: {Nom}</Card.Title>
                             <Card.Title className="text-success">Adresse: {Adresse}</Card.Title>
                                <Card.Title className="text-success">Ville et code postal: {CP}, {Ville}</Card.Title>
                                <Card.Text>
                                    Equipement fournit?: {EquipementsFournit}
                                </Card.Text>
                                    <Card.Text>
                                        Artichats: {Artichats}
                                    </Card.Text>
                                        <Card.Text>
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