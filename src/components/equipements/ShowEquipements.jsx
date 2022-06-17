import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'

import EquipementCard from '../equipements/EquipementsCard'

const ShowEquipements = () => {

    const [Equipements,setEquipements] = useState([])

    useEffect(() =>{
        const getEquipements = async () => {
            const {data} = await axios.get('http://localhost:3000/api/getEquipements')
            console.log(data)
            setEquipements(data)
        }
        getEquipements()
    }, [])

    return(
        <>
             <Container>
                <h1>affiche les equipements</h1>
                <hr />

                <Row>
                    {
                        Equipements.map(equipements => {
                            return <Col md={6} lg={4} key={equipements.id}> 
                            <EquipementCard equipements={equipements}/> 
                            </Col>
                        } )
                    }
                </Row>
            </Container>

        </>
    )


}
export default ShowEquipements