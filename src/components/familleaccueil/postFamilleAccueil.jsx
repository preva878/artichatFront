import {useState} from 'react'
import axios from 'axios'


import { Container, Form, Button } from 'react-bootstrap'



const FamilleAccueilPost = ({history}) => {

    const [Nom,setNom] = useState("");
    const [Adresse,setAdresse] = useState("");
    const [Cp,setCp] = useState("");
    const [Ville,setVille] = useState("");
    const [EquipementsFourni,setEquipementsFourni] = useState("");
    const [Artichats,setArtichats] = useState("");
    const [Notes,setNotes] = useState("");

    const handleSubmit = async (h) => {
        h.preventDefault();
      
        const formData = new FormData()

        formData.append('Nom',Nom)
        formData.append('Adresse',Adresse)
        formData.append('Cp',Cp)
        formData.append('Ville',Ville)
        formData.append('EquipementsFourni',EquipementsFourni)
        formData.append('Artichats',Artichats)
        formData.append('Notes',Notes)

        await axios.post('http://localhost:3000/api/addFamilleAccueil',formData)
        history.push('/addFamilleAccueil')
    }
    return(
        <>
        <Container>
            <h1>Ajouter une Famille d'accueil</h1>
            <hr />

            <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data' >

            <Form.Group controlId="Nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                value={Nom}
                onChange={(h) => setNom(h.target.value)}
                type="string"
                />                
            </Form.Group>
            <Form.Group controlId="Adresse">
                <Form.Label>Adresse</Form.Label>
                <Form.Control
                value={Adresse}
                onChange={(h) => setAdresse(h.target.value)}
                type="string"
                />                
            </Form.Group>

            <Form.Group controlId="Ville">
                <Form.Label>Ville</Form.Label>
                <Form.Control
                value={Ville}
                onChange={(h) => setVille(h.target.value)}
                type="string"
                />                
            </Form.Group>
            <Form.Group controlId='Cp'>
                <Form.Label>Code Postal</Form.Label>
                <Form.Control
                value={Cp}
                onChange={(h) => setCp(h.target.value)}
                type="number"
                />                
            </Form.Group>
            <Form.Group controlId='EquipementsFourni'>
                <Form.Label>Equipement fournit</Form.Label>
                <Form.Control
                value={EquipementsFourni}
                onChange={(h) => setEquipementsFourni(h.target.value)}
                type="string"
                />                
            </Form.Group>
            <Form.Group controlId='Artichats'>
                <Form.Label>Artichat</Form.Label>
                <Form.Control
                value={Artichats}
                onChange={(h) => setArtichats(h.target.value)}
                type="string"
                />                
            </Form.Group>
            <Form.Group controlId='Notes'>
                <Form.Label>Notes</Form.Label>
                <Form.Control
                value={Notes}
                onChange={(h) => setNotes(h.target.value)}
                type="string"
                />                
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Famille Accueil
            </Button>
            

            </Form>
        </Container>
        </>
    )


}
export default FamilleAccueilPost