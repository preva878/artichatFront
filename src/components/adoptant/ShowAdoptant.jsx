import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import AdoptantCard from '../adoptant/AdoptanCard'

const ShowAdoptants = () => {

    const [Adoptants,setAdoptants] = useState([])

    useEffect(() => {
        const getAdoptantData = async() => {
            const {data} = await axios.get('http://localhost:3000/api/getAdoptants')
            console.log(data)
            setAdoptants(data)
        }
        getAdoptantData()
    }, [])

    return(
        <>
        <Container>
        <h1>encoder les Adoptants</h1>
        <hr />
        
        <Row>
        {
            Adoptants.map(adoptant => {
                
            return <Col md={6} lg={4} key={adoptant.id}>
                <AdoptantCard adoptant={adoptant}></AdoptantCard>
            </Col> 
        })
    }
</Row>
        </Container>
        
        </>
    )
}
export default ShowAdoptants