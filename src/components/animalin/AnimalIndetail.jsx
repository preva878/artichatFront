import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { normalizePathname } from 'react-router/lib/router'

const AnimalInDetail = () => {

    const {id} = useParams()
    const history = useHistory()

    Const [Nom,setNom] = useState('')
    const [AnimalInImage,setAnimalInImage] = useState('')


    useEffect(() => {
        const getSingleAnimalinData = async() => {
            const {data} = await axios.get(`http://localhost:3000/api/animalIn/${id}`)
            console.log(data)
            setNom(data.Nom)
            setAnimalInImage(data.Image)
        
        }
        getSingleAnimalinData()
    },[id])

    return(
        <>
        <Container>
            <h1>essai showcard</h1>
            <hr />

            <Row>
                <Col md={8} lg={8} sm={8} >
                    <Card.Img src={`http://localhost:3000/${AnimalInImage}`}></Card.Img>
                    <Card.Body>
                        <Card.Title>Nom: {Nom}</Card.Title>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
        
        </>
    )

}
export default AnimalInDetail