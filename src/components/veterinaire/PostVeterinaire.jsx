import {useState} from 'react'
import axios from 'axios'


import { Container, Form, Button } from 'react-bootstrap'

const VeterinairePost = ({history}) => {

    const [Nom,setNom]=useState('');
    const [Adresse,setAdresse]=useState('');
    const [Ville,setVille]=useState('');
    const [CP,setCP]=useState('');
    const [DateIntervention,setIntervention]=useState('');
    const [Prix,setPrix]=useState('');
    const [TypeIntervention,setTypeIntervention]=useState('');
    const [Artichats,setArtichats]=useState('');
    const [Notes,setNotes]=useState('');
    const [Images,setImages]=useState('');

    const handleSubmit = async (v) => {
        v.preventDefault()
        alert(`veterinaire ${Nom} est intervenu ${TypeIntervention} sur ${Artichats}`)

    const formData = new FormData()

    formData.append('Nom',Nom)
    formData.append('Adresse',Adresse)
    formData.append('Ville',Ville)
    formData.append('CP',CP)
    formData.append('DateIntervention',DateIntervention)
    formData.append('Prix',Prix)
    formData.append('TypeIntervention',TypeIntervention)
    formData.append('Artichats',Artichats)
    formData.append('Notes',Notes)
    formData.append('Images',Images)

    
    await axios.post('http://localhost:8585/api/veto/addveterinaire',formData)
    history.push('/postVeterinaire')
    console.log(Nom)
    } 
    //ne arche pas,pq.....

        return(
            <>
                <Container>
                    <h1>ajouter un veterinaire</h1>
                    <hr />
                    <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data'>
                    <Form.Group controlId="fileName" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='Images'
                        onChange={(v) => setImages(v.target.files[0])}
                        size="sm" />
                </Form.Group>
              
                <Form.Group className="" controlId="Nom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            value={Nom}
                            onChange={(v) => setNom(v.target.value)}
                            type="string"
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="Adresse">
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control
                            value={Adresse}
                            onChange={(v) => setAdresse(v.target.value)}
                            type="string"
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="Ville">
                        <Form.Label>Ville</Form.Label>
                        <Form.Control
                            value={Ville}
                            onChange={(v) => setVille(v.target.value)}
                            type="string"
                            />
                    </Form.Group>

                
                    <Form.Group className="" controlId="CP">
                        <Form.Label>CP</Form.Label>
                        <Form.Control
                            value={CP}
                            onChange={(v) => setCP(v.target.value)}
                            type="number"
                            />
                    </Form.Group>
                    <Form.Group className="" controlId="DateIntervention">
                        <Form.Label>Date d'intervention</Form.Label>
                        <Form.Control
                            value={DateIntervention}
                            onChange={(v) => setIntervention(v.target.value)}
                            type="date"
                        />
                    </Form.Group>
                    <Form.Group className="" controlId="Prix">
                        <Form.Label>Prix</Form.Label>
                        <Form.Control
                            value={Prix}
                            onChange={(v) => setPrix(v.target.value)}
                            type="number"
                        />
                    </Form.Group>
                    <Form.Group className="" controlId="TypeIntervention">
                        <Form.Label>Type d'intervention</Form.Label>
                        <Form.Control
                            value={TypeIntervention}
                            onChange={(v) => setTypeIntervention(v.target.value)}
                            type="string"
                        />
                    </Form.Group>
                    <Form.Group className="" controlId="Artichats">
                        <Form.Label>Artichats</Form.Label>
                        <Form.Control
                            value={Artichats}
                            onChange={(v) => setArtichats(v.target.value)}
                            type="string"
                        />
                    </Form.Group>
                    <Form.Group className="" controlId="Notes">
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                            value={Notes}
                            onChange={(v) => setNotes(v.target.value)}
                            type="text"
                        />
                    </Form.Group>

                


                    <Button variant="primary" type="submit">
                        Add veterinaire
                    </Button>
                </Form>

                </Container>
            
            
            
            </>
        )
}
export default VeterinairePost