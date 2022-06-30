import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import SponsorCard from '../sponsor/SponsorCard'

const ShowSponsor = () => {

    const [Sponsor,setSponsors] =  useState([])

    useEffect(() => {
        const getSponsorsData = async () => {
            const {data} = await axios.get('http://localhost:8585/api/sponsor/getAllSponsor')
            console.log(data)
            setSponsors(data)
        }
        getSponsorsData()
    }, [])

    return (
        <>
            <Container>
                <h1>essai affiche in</h1>
                <hr />

                <Row>
                    {
                        Sponsor.map(sponsor => {
                            return <Col md={6} lg={4} key={sponsor.id}> 
                            <SponsorCard sponsor={sponsor}/> 
                            </Col>
                        } )
                    }
                </Row>
            </Container>
        </>
    )
}
export default ShowSponsor