import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'




const AddProduct = ({ history }) => {


    const [Nom, setNom] = useState('')
    const [Prix, setPrix] = useState(0)
    const [Description, setDescription] = useState('')
    const [SellWay, setSellWay] = useState('')
    const [Image, setImage] = useState('')

    const addProductHandler = async (e) => {

        e.preventDefault()

        // const data = {
        //     title: title,
        //     price: price,
        //     description: description,
        //     published: published
        // }


        const formData = new FormData()

        formData.append('Image', Image)
        formData.append('Nom', Nom)
        formData.append('Prix', Prix)
        formData.append('Description', Description)
        formData.append('SellWay', SellWay)

        await axios.post('http://localhost:8585/api/product/addProduct', formData)
        history.push('/addProduct')
    
    }



    return (
        <>
            <Container className='mt-5 p-2'>
                <h1>Add Product</h1>
                <hr />

                <Form onSubmit={addProductHandler} method="POST" encType='multipart/form-data'>

                <Form.Group controlId="fileName" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])}
                        size="lg" />
                </Form.Group>

                    <Form.Group className="mb-3" controlId="Nom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            value={Nom}
                            onChange={(e) => setNom(e.target.value)}
                            type="text"
                            placeholder="Nom de l objet en vente"
                          />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Prix">
                        <Form.Label>Prix en euro</Form.Label>
                        <Form.Control
                            value={Prix}
                            onChange={(e) => setPrix(e.target.value)}
                            type="number"
                            placeholder="prix"
                             />
                    </Form.Group>

                  
                    <Form.Group className="mb-3" controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                            as="textarea"
                            placeholder="description"
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="SellWay">
                        <Form.Label>canal de vente</Form.Label>
                        <Form.Control
                            value={SellWay}
                            onChange={(e) => setSellWay(e.target.value)}
                            as="textarea"
                            placeholder="SellWay"
                            />
                    </Form.Group>

                  


                    <Button variant="primary" type="submit">
                        ajouter Produit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default AddProduct
