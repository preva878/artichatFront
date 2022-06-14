import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import AnimalInCard from './AnimalInCard';

const ShowArtichats = () => {

    const [Artichats,setArtichats] = useState([])

    useEffect(()=> {
        const getArtichatsData = async () =>{
            const {data} = await axios.get('http://localhost:3001/api/getAllAnimalIn')
            console.log(data)
            setArtichats(data)
        }
        getArtichatsData()
    },[])
    
    return (
        <>
             <Container  >
               <h1 >afficher tout les in</h1>
               <hr />

               <Row>
                    {
                        Artichats.map(Artichat => {
                            return <Col md={6} lg={4} sm={12} key={Artichat.id}>
                                <AnimalInCard Artichat={Artichat} />
                            </Col>
                        })
                    }
               </Row>


           </Container>
        </>
    )
}
export default ShowArtichats