import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import AnimalOutCard from '../animalout/AnimalOutCard'

const ShowAnimalOuts = () => {

    const [AnimalOuts,setAnimalOuts] = useState([])

    useEffect(()=> {
        const getAnimalOutsData = async () => {
            const {data} = await axios.get('http://localhost:3000/api/getAllAnimalOuts')
            console.log(data)
            setAnimalOuts(data)
        }
        getAnimalOutsData()
    },[])
    return(
        <>
         <Container>
                <h1>essai affiche out</h1>
                <hr />

                <Row>
                    {
                        AnimalOuts.map(animalOut => {
                            return <Col md={6} lg={4} key={animalOut.id}> 
                            <AnimalOutCard animalOut={animalOut}/> 
                            </Col>
                        } )
                    }
                </Row>
            </Container>
        </>
    )
}
export default ShowAnimalOuts