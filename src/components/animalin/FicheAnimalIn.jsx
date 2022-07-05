import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

import ScaleIcon from '@mui/icons-material/Scale';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BadgeIcon from '@mui/icons-material/Badge';
import WcIcon from '@mui/icons-material/Wc';



const AnimalInFiche = () => {

    const { id } = useParams()
    const history = useNavigate()
    
    const [Nom,setNom] = useState('');
    const [currentSexe, setCurrentSexe] = useState('');
    const [Age,setAge] = useState('');
    const [Poids,setPoids] = useState('');
    const [DateEntree,setDateEntree] = useState('');
    const [Etat,setEtat] = useState('');
    const [Traitement,setTraitement] = useState('');
    const [FamilleAccueil,setFamilleAccueil] = useState('');
    const [Note,setNote] = useState('');
    const [Image,setImage] = useState('');

    useEffect(() => {

        const getSingleAnimalInData = async () => {
            const {data} = await axios.get(`http://localhost:8585/api/animalin/getAnimalIn/${id}`)
            console.log(data)

            setNom(data.Nom)
            setCurrentSexe(data.currentSexe)
            setAge(data.Age)
            setPoids(data.Poids)
            setDateEntree(data.DateEntree)
            setEtat(data.Etat)
            setTraitement(data.Traitement)
            setFamilleAccueil(data.FamilleAccueil)
            setNote(data.Note)
            setImage(data.Image)
        }
        getSingleAnimalInData()
    },[id])


return (
    <>

   <Container className="mt-10 p-4">
        <h1 className="text-center">Detail Artichats In</h1>
        <hr />
        <Row>
    {/* /**</> */ }

            <Col md={8} lg={8} sm={8}>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        <Card.Img src={`http://localhost:8585/${Image}`} fluid />
                        <Card.Body>
                            <Card.Title><BadgeIcon/>  Nom: {Nom}</Card.Title>
                             <Card.Title className="text-success">Famille d'accueil: {FamilleAccueil}</Card.Title>
                                <Card.Title className="text-success">Etat actuel: {Etat}</Card.Title>
                                <Card.Text> <WcIcon/>
                                    Sexe actuel: {currentSexe}
                                </Card.Text> 
                                    <Card.Text>
                                        Age: {Age}
                                    </Card.Text>
                                        <Card.Text><ScaleIcon/>
                                            Poids: {Poids}
                                        </Card.Text>
                                            <Card.Text> <CalendarMonthIcon/>
                                                Date d'entrée: {DateEntree}
                                            </Card.Text>
                                                <Card.Text>
                                                    Traitement reçu: {Traitement}
                                                </Card.Text>
                                                    <Card.Text>
                                                        Note: {Note}
                                                    </Card.Text>
                        <br />
                            <Link to={`/animalin/getAnimalInUp/${id}`}>
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
export default AnimalInFiche