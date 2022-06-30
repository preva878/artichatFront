import {useState} from 'react'
import axios from 'axios'


import { Container, Form, Button } from 'react-bootstrap'


const EquipementPost = ({history}) => {

    const [Image,setImage] = useState('');
    const [Nom,setNom] = useState('');
    const [Types,setTypes] = useState('');
    const [Quantite,setQuantite] = useState('');
    const [DateEntree,setDateEntree] = useState('');
    const [DatePeremption,setDatePeremption] = useState('');
    const [Etats,setEtats] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        alert(`Equipement ${Nom} ajouter`)

        const formData = new FormData()

        formData.append('Image',Image)
        formData.append('Nom',Nom)
        formData.append('Types',Types)
        formData.append('Quantite',Quantite)
        formData.append('DateEntree',DateEntree)
        formData.append('DatePeremption',DatePeremption)
        formData.append('Etats',Etats)

        await axios.post('http://localhost:8585/api/eqp/postEquipement',formData)
        history.push('/postEquipement')
    }

        return (
            <>
            <Container>
                <h1>Ajouter de l equipement</h1>
                <hr />

                <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data' >

                    <Form.Group controlId='fileName'>
                        <Form.Label></Form.Label>
                        <Form.Control
                        type="file"
                        name= "image"
                        onChange={(e) => setImage(e.target.files[0])}
                        size="sm"
                        
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        value={Nom}
                        onChange={(e) => setNom(e.target.value)}
                        type="string"
                        placeholder="Nom de la marque"
                      />
                </Form.Group>

                <Form.Group className="" controlId="Types">
                    <Form.Label>Types</Form.Label>
                    <Form.Control
                        value={Types}
                        onChange={(e) => setTypes(e.target.value)}
                        type="string"
                        placeholder="types d'equipemet,boite,croquette,autres"
                      />
                </Form.Group>

                <Form.Group className="" controlId="Quantite">
                    <Form.Label>Quantite</Form.Label>
                    <Form.Control
                        value={Quantite}
                        onChange={(e) => setQuantite(e.target.value)}
                        type="number"
                        placeholder="Quantite reçue"
                      />
                </Form.Group>

                <Form.Group className="" controlId="Dateentree">
                    <Form.Label>Date d'entree</Form.Label>
                    <Form.Control
                        value={DateEntree}
                        onChange={(e) => setDateEntree(e.target.value)}
                        type="date"
                        placeholder="date de reception"
                      />
                </Form.Group>

                <Form.Group className="" controlId="DatePeremption">
                    <Form.Label>Date de peremption</Form.Label>
                    <Form.Control
                        value={DatePeremption}
                        onChange={(e) => setDatePeremption(e.target.value)}
                        type="date"
                        placeholder="date de peremption si il y a"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Etats">
                    <Form.Label>Etats</Form.Label>
                    <Form.Control
                        value={Etats}
                        onChange={(e) => setEtats(e.target.value)}
                        type="string"
                        placeholder="Bon,use,utilise,tres sale"
                      />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add equipements
                </Button>
                </Form>
            </Container>
            
            </>
        )
}
export default EquipementPost