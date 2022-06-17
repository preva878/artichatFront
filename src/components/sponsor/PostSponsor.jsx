import {useState} from 'react'
import axios from 'axios'


import { Container, Form, Button } from 'react-bootstrap'

const SponsorPost = ({history}) => {

    const[Nom,setNom]=useState('')
    const[Materiel,setMateriel]=useState('')
    const[DateEntree,setDateEntree]=useState('')
    const[Quantite,setQuantite]=useState('')
    const[Types,setTypes]=useState('')
    const[Adresse,setAdresse]=useState('')
    const[Cp,setCp]=useState('')
    const[Ville,setVille]=useState('')


const handleSubmit = async (f) => {
    f.preventDefault()
    alert(`Sponsor ${Nom} encoder`)

    const formData = new FormData()

    formData.append('Nom',Nom)
    formData.append('Materiel',Materiel)
    formData.append('DateEntree',DateEntree)
    formData.append('Quantite',Quantite)
    formData.append('Types',Types)
    formData.append('Adresse',Adresse)
    formData.append('Cp',Cp)
    formData.append('Ville',Ville)
    
    await axios.post('http://localhost:3000/api/sponsor/addSponsor',formData)
    history.push('/sponsor/addSponsor')
}
//ne marche pas
    return (
        <>
        
        <Container>
            <h1>Ajouter un sponsor</h1>
            <hr />

            <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data'  >

                <Form.Group controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                    value={Nom}
                    onChange={(f) => setNom(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controlId='Materiel'>
                    <Form.Label>Materiel</Form.Label>
                    <Form.Control
                    value={Materiel}
                    onChange={(f) => setMateriel(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controlId='DateEntree'>
                    <Form.Label>DateEntree</Form.Label>
                    <Form.Control
                    value={DateEntree}
                    onChange={(f) => setDateEntree(f.target.value)}
                    type="date"
                    />
                </Form.Group>
                <Form.Group controlId='Quantite'>
                    <Form.Label>Quantite</Form.Label>
                    <Form.Control
                    value={Quantite}
                    onChange={(f) => setQuantite(f.target.value)}
                    type="number"
                    />
                </Form.Group>
                <Form.Group controlId='Types'>
                    <Form.Label>Types</Form.Label>
                    <Form.Control
                    value={Types}
                    onChange={(f) => setTypes(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controleId='Adresse'>
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control
                    value={Adresse}
                    onChange={(f) => setAdresse(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controlId='Cp'>
                    <Form.Label>Cp</Form.Label>
                    <Form.Control
                    value={Cp}
                    onChange={(f) => setCp(f.target.value)}
                    type="number"
                    />
                </Form.Group>
                <Form.Group controlId='Ville'>
                    <Form.Label>Ville</Form.Label>
                    <Form.Control
                    value={Ville}
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