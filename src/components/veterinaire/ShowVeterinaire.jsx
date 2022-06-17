import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import VeterinairesCard from './VeterinaireCard';

const ShowVeterinaires = () => {

    const [Veterinaires,setVeterinaires] = useState([])

    useEffect(() => {
        const getVeterinairesData = async() => {
            const {data} =await axios.get('http://localhost:3000/api/getVeterinaires')
            console.log(data)
            setVeterinaires(data)
        }
        getVeterinairesData
    }, [])
    return (
        <>
        
            <Container>
                <h1>afficher les veterinaire et intervention</h1>
                <hr />

                <Row>
                    {
                        Veterinaires.map(veterinaire => {
                            return <Col md={6} lg={4} key={veterinaire.id}> 
                            <AnimalInCard veterinaire={veterinaire}/> 
                            </Col>
                        } )
                    }
                </Row>
            </Container>
        
        </>
    )

}
export default ShowVeterinaires