import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import FamilleAccueilCard from './FamilleAccueilCard'

const ShowFamilleAccueil = () => {

    const [FamilleAccueil,setFamilleAccueil] = useState([])

    useEffect(() => {
        const getFamilleData = async () => {
            const {data} = await axios.get('http://localhost:8585/api/fa/getAllFamilleAccueil')
            console.log(data)
            setFamilleAccueil(data)
        }
        getFamilleData()
    }, [])

    return (
        <>
          <Container>
                <h1>Affiche les FA</h1>
                <hr />

                <Row>
                    {
                        FamilleAccueil.map(familleaccueil => {
                            return <Col md={6} lg={4} key={familleaccueil.id}> 
                            <FamilleAccueilCard familleaccueil={familleaccueil}/> 
                            </Col>
                        } )
                    }
                </Row>
            </Container>
        </>
    )
}
export default ShowFamilleAccueil