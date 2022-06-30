import {useState} from 'react'
import axios from 'axios'


import { Container, Form, Button } from 'react-bootstrap'

const FaPost = ({}) => {
    
    const [Nom,setNom] = useState('');
    const [Adresse,setAdresse] = useState('');
    const [CP,setCp] = useState('');
    const [Ville,setVille] = useState('');
    const [EquipementsFournit,setEquipementsFournit] = useState('');
    const [Artichats,setArtichats] = useState('');
    const [Notes,setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('Nom',Nom)
        formData.append('Adresse',Adresse)
        formData.append('CP',CP)
        formData.append('Ville',Ville)
        formData.append('EquipementsFournit',EquipementsFournit)
        formData.append('Artichats',Artichats)
        formData.append('Notes',Notes)

        await axios.post('http://localhost:8585/api/fa/addFamilleAccueil',formData)
        /*history.push('/postfamilleaccueil')*/

    }
    return (

        <>
        <Container>
            <h1>Encoder une FA</h1>
            <hr />

            <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data'>

            <Form.Group>
            <Form.Label>Nom</Form.Label>
                    <Form.Control
                        value={Nom}
                        onChange={(e) => setNom(e.target.value)}
                        type="string"
                        placeholder="Nom de la fa"
                      />
            </Form.Group>

            <Form.Group>
            <Form.Label>Adresse</Form.Label>
                    <Form.Control
                        value={Adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                        type="string"
                        placeholder="adresse rue et num de la fa"
                      />
            </Form.Group>

            <Form.Group>
            <Form.Label>Code postal</Form.Label>
                    <Form.Control
                        value={CP}
                        onChange={(e) => setCp(e.target.value)}
                        type="string"
                        placeholder="code postal"
                      />
            </Form.Group>
            <Form.Group>
            <Form.Label>Ville</Form.Label>
                    <Form.Control
                        value={Ville}
                        onChange={(e) => setVille(e.target.value)}
                        type="string"
                        placeholder="Ville"
                      />
            </Form.Group>
            <Form.Group>
            <Form.Label>Equipements Fournit</Form.Label>
                    <Form.Control
                        value={EquipementsFournit}
                        onChange={(e) => setEquipementsFournit(e.target.value)}
                        type="string"
                        placeholder="EquipementsFourni de la fa"
                      />
            </Form.Group>
            <Form.Group>
            <Form.Label>Artichats</Form.Label>
                    <Form.Control
                        value={Artichats}
                        onChange={(e) => setArtichats(e.target.value)}
                        type="string"
                        placeholder="Nom Artichats"
                      />
            </Form.Group>
            <Form.Group>
            <Form.Label>Notes</Form.Label>
                    <Form.Control
                        value={Notes}
                        onChange={(e) => setNotes(e.target.value)}
                        type="string"
                        placeholder="Notes"
                      />
            </Form.Group>


            <Button variant="primary" type="submit">
                    Add famille
                </Button>
            </Form>
        </Container>
        </>
    )


}
export default FaPost