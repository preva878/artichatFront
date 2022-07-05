import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

const AnimalOutFiche = () => {

    const {id} = useParams()
    const history = useNavigate()

    const [Image,setImage] = useState('')
    const [Nom,setNom] = useState('')
    const [NomDefinitif,setNomDefinitif] = useState('')
    const [SexeDefini,setSexeDefini] = useState('')
    const [Particularite,setParticularite] = useState('')
    const [Age,setAge] = useState('')
    const [Poids,setPoids] = useState('')
    const [Etat,setEtat] = useState('')
    const [Vaccin,setVaccin] = useState('')
    const [DateVaccin,setDateVaccin] = useState('')
    const [Puce,setPuce] = useState('')
    const [Sterilisation,setSterilisation] = useState('')
    const [DateSterilisation,setDateSterilisation] = useState('')
    const [Adoptant,setAdoptant] = useState('')
    const [DateDepart,setDateDepart] = useState('')

    useEffect(() => {

        const getSingleAnimalOutData = async () => {
            const {data} = await axios.get(`http://localhost:8585/api/animalout/getAnimalOut/${id}`)
            console.log(data)

            setImage(data.Image)
            setNom(data.Nom)
            setNomDefinitif(data.NomDefinitif)
            setSexeDefini(data.SexeDefini)
            setParticularite(data.Particularite)
            setAge(data.Age)
            setPoids(data.Poids)
            setEtat(data.Etat)
            setVaccin(data.Vaccin)
            setDateVaccin(data.DateVaccin)
            setPuce(data.Puce)
            setSterilisation(data.Sterilisation)
            setDateSterilisation(data.DateSterilisation)
            setAdoptant(data.Adoptant)
            setDateDepart(data.DateDepart)

        }
        getSingleAnimalOutData()
    },[id])

    return(
        <>
         <Container className="mt-10 p-4">
        <h1 className="text-center">Detail Artichats Out</h1>
        <hr />
        <Row>
            <Col md={8} lg={8} sm={8}>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        <Card.Img src={`http://localhost:8585/${Image}`} fluid />
                        <Card.Body>
                            <Card.Title>Nom: {Nom}</Card.Title>
                            <Card.Title>Nom definitif: {NomDefinitif}</Card.Title>
                             <Card.Subtitle className="text-success">Sexe definitif: {SexeDefini}</Card.Subtitle>
                             <Card.Subtitle className="text-success">Particularite: {Particularite}</Card.Subtitle>
                             <Card.Subtitle className="text-success">Age: {Age}</Card.Subtitle>
                             <Card.Subtitle className="text-success">DateDepart: {DateDepart}</Card.Subtitle>
                                <Card.Title className="text-success">Etat : {Etat}</Card.Title>
                               
                                <Card.Text>
                                    Famille qui adopte: {Adoptant}
                                </Card.Text>
                                    <Card.Text>
                                        Poids: {Poids}
                                    </Card.Text>
                                        <Card.Text>
                                            Date de Vaccin: {Vaccin},{DateVaccin}
                                        </Card.Text>
                                            <Card.Text>
                                                Date d'entrée: {Sterilisation}, {DateSterilisation}
                                            </Card.Text>

                                                    <Card.Text>
                                                        Numero de puce: {Puce}
                                                    </Card.Text>
                        <br />
                            <Link to={`/animalOut/getAnimalOutup/${id}`}>
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
export default AnimalOutFiche