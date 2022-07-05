import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'


const ProductDetail = () => {

    const { id } = useParams()
    const history = useNavigate()

    const [Nom, setNom] = useState('')
    const [Prix, setPrix] = useState(0)
    const [Description, setDescription] = useState('')
    const [SellWay, setSellWay] = useState('')
    const [Image, setImage] = useState('')


    

    useEffect(() => {

        const getSingleProductData = async () => {
            const { data } = await axios.get(`http://localhost:8585/api/product/getproduct/${id}`)
            console.log(data)

            setNom(data.Nom)
            setPrix(data.Prix)
            setDescription(data.Description)
            setSellWay(data.SellWay)
            setImage(data.Image)

            


        }
        getSingleProductData()

    },[id])



    // handling Delete
  



   


    

    return (
        <>

        <Container className="mt-10 p-4">
        <h1 className="text-center">Detail Produit en vente</h1>
        <hr />

        <Row>
            <Col md={8} lg={8} sm={8}>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        <Card.Img src={`http://localhost:8585/${Image}`} fluid />
                        <Card.Body>
                            <Card.Title>Nom: {Nom}</Card.Title>
                            <Card.Title className="text-success">Price: ${Prix}</Card.Title>
                            <Card.Text>
                                Description: {Description}
                            </Card.Text>
                            <Card.Text>
                               Methode de vente: {SellWay}
                            </Card.Text>
                        <br />

                    
                            <Link to={`/product/edit/${id}`}>
                                <Button>Edit</Button>
                            </Link>
                            
                            
                        
                    </Card.Body>        
                </Card>
            </Col>


                <Col md={4} lg={4} sm={4}>

                   

                       

                      
                       

                    

                        
                </Col>
        </Row>



                
        </Container>

       



        </>
    )
}

export default ProductDetail
