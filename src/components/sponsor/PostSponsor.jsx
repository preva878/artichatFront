import {useState} from 'react'
import axios from 'axios'


import { Container, Form, Button } from 'react-bootstrap'

const SponsorPost = ({}) => {

    const[nom,setNom]=useState('')
    const[materiel,setMateriel]=useState('')
    const[dateEntre,setDateEntree]=useState('')
    const[quantite,setQuantite]=useState('')
    const[types,setTypes]=useState('')
    const[adresse,setAdresse]=useState('')
    const[cp,setCp]=useState('')
    const[ville,setVille]=useState('')
    const[image,setimage]=useState('')


const handleSubmit = async (f) => {
    f.preventDefault()
    alert(`Sponsor ${nom} encoder`)

    const formData = new FormData()

    formData.append('nom',nom)
    formData.append('materiel',materiel)
    formData.append('dateEntre',dateEntre)
    formData.append('quantite',quantite)
    formData.append('types',types)
    formData.append('adresse',adresse)
    formData.append('cp',cp)
    formData.append('ville',ville)
    formData.append('image',image)
    
    await axios.post('http://localhost:8585/api/sponsor/addsponsor',formData)
    // history.push('/sponsor/addsponsor')
}
//ne marche pas
    return (
        <>
        
        <Container>
            <h1>Ajouter un sponsor</h1>
            <hr />

            <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data'  >

            <Form.Group controlId="fileName" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='image'
                        onChange={(f) => setimage(f.target.files[0])}
                        size="sm" />
                </Form.Group>
                
                <Form.Group controlId="nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                    value={nom}
                    onChange={(f) => setNom(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controlId='materiel'>
                    <Form.Label>Materiel</Form.Label>
                    <Form.Control
                    value={materiel}
                    onChange={(f) => setMateriel(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controlId='dateEntre'>
                    <Form.Label>DateEntree</Form.Label>
                    <Form.Control
                    value={dateEntre}
                    onChange={(f) => setDateEntree(f.target.value)}
                    type="date"
                    />
                </Form.Group>
                <Form.Group controlId='quantite'>
                    <Form.Label>Quantite</Form.Label>
                    <Form.Control
                    value={quantite}
                    onChange={(f) => setQuantite(f.target.value)}
                    type="number"
                    />
                </Form.Group>
                <Form.Group controlId='types'>
                    <Form.Label>Types</Form.Label>
                    <Form.Control
                    value={types}
                    onChange={(f) => setTypes(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controleId='adresse'>
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control
                    value={adresse}
                    onChange={(f) => setAdresse(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controlId='cp'>
                    <Form.Label>Cp</Form.Label>
                    <Form.Control
                    value={cp}
                    onChange={(f) => setCp(f.target.value)}
                    type="number"
                    />
                </Form.Group>
                <Form.Group controlId='ville'>
                    <Form.Label>Ville</Form.Label>
                    <Form.Control
                    value={ville}
                    onChange={(f) => setVille(f.target.value)}
                    type="string"
                    />
                </Form.Group>

            <Button type="submit">
                add Sponsor
            </Button>
            </Form>
        </Container>
        
        </>
    )
}
export default SponsorPost