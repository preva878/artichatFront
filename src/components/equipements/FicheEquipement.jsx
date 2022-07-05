import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'


const EquipementFiche = () => {

    const {id} = useParams()
    const history = useNavigate()

    const [Image,setImage] = useState('')
    const [Nom,setNom] = useState('')
    const [Types,setTypes] = useState('')
    const [Quantite,setQuantite] = useState('')
    const [DateEntree,setDateEntree] = useState('')
    const [DatePeremption,setDatePeremption] = useState('')
    const [Etats,setEtats] = useState('')

    useEffect(() => {

        const getSingleEquipementData = async () => {
            const {data} = await axios.get(`http://localhost:8585/api/eqp/getequipement/${id}`)
            console.log(data)

            setImage(data.Image)
            setNom(data.Nom)
            setTypes(data.Types)
            setQuantite(data.Quantite)
            setDateEntree(data.DateEntree)
            setDatePeremption(data.DatePeremption)
            setEtats(data.Etats)

        }
        getSingleEquipementData()
    },[id])

    return (
        <>
    
       <Container className="mt-10 p-4">
            <h1 className="text-center">Detail Equipements</h1>
            <hr />
            <Row>
                <Col md={8} lg={8} sm={8}>
                    <Card className='shadow-lg m-3 p-2 rounded'>
                            <Card.Img src={`http://localhost:8585/${Image}`} fluid />
                            <Card.Body>
                                <Card.Title>Nom: {Nom}</Card.Title>
                                 <Card.Title className="text-success">Type de materiel: {Types}</Card.Title>
                                    <Card.Title className="text-success">Quantite: {Quantite}</Card.Title>
                                    <Card.Text>
                                        Date d'entree: {DateEntree}
                                    </Card.Text>
                                        <Card.Text>
                                            Date de peremption: {DatePeremption}
                                        </Card.Text>
                                            <Card.Text>
                                                Etat: {Etats}
                                            </Card.Text>
                                               
                            <br />
                                <Link to={`/eqp/getequipementup/${id}`}>
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
export default EquipementFiche