import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import AnimalInCard from '../animalin/AnimalInCard'


const ShowAnimalIns = () => {

    const [AnimalIns, setAnimalIns] = useState([])

    useEffect(()=>{
        const getAnimalInsData = async () => {
            const {data} = await axios.get('http://localhost:3000/api/getAllAnimalIns')
            console.log(data)
            setAnimalIns(data)
        }
        getAnimalInsData()
    }, [])

    return (
        <>
        
            <Container>
                <h1>essai affiche in</h1>
                <hr />

                <Row>
                    {
                        AnimalIns.map(animalIn => {
                            return <Col md={6} lg={4} key={animalIn.id}> 
                            <AnimalInCard animalIn={animalIn}/> 
                            </Col>
                        } )
                    }
                </Row>
            </Container>
        
        </>
    )



}
export default ShowAnimalIns