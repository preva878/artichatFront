import {useState} from 'react'
import axios from 'axios'
import { Row, Col} from 'react-bootstrap'
import {FormGroup} from '@mui/material/FormGroup';


import { Container, Form, Button } from 'react-bootstrap'


const AdoptantPost = ({history}) => {
    const [Image,setImage] = useState("");
    const [Nom,setNom] = useState("");
    const [Adresse,setAdresse] = useState("");
    const [CP,setCp] = useState("");
    const [Ville,setVille] = useState("");
    const [ContactMail,setContactMail] = useState("");
    const [ContactPortable,setContactPortable] = useState("");
    const [Artichats,setArtichats] = useState("");
    const [Lien,setLien] = useState("");
    const [Note,setNote] = useState("");
    const [NumeroPermis,setNumeroPermis] = useState("");
    const [DatePermis,setDatePermis]=useState("");
    

   
    
    const handleSubmit = async (f) => {
        f.preventDefault();
        alert(`Adoptant ${Nom} ajouter avec l' Artichats ${Artichats}`)

      const formData=new FormData()
      
       formData.append('Image',Image)
        formData.append('Nom',Nom)
        formData.append('Adresse',Adresse)
        formData.append('CP',CP)
        formData.append('Ville',Ville)
        formData.append('ContactMail',ContactMail)
        formData.append('ContactPortable',ContactPortable)
        formData.append('Artichats',Artichats)
        formData.append('Lien',Lien)
        formData.append('Note',Note)
        formData.append('NumeroPermis',NumeroPermis)
        formData.append('DatePermis',DatePermis)

        await axios.post('http://localhost:8585/api/adoptant/addAdoptant',formData)
        history.push('/addAdoptant')
    };
    return(
        
        <>
        <Container>
            <h1>ajouter une famille d'adoptant</h1>
            <hr />

            <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data' >
            
            <Form.Group controlId="fileName" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                    type="file"
                    name='image'
                    onChange={(f) => setImage(f.target.files[0])}
                    size="sm" 
                    />
            </Form.Group>
            <Form.Group className="" controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        value={Nom}
                        onChange={(f) => setNom(f.target.value)}
                        type="string"
                        placeholder="Nom de reference pour les adoptants"
                      />
                </Form.Group>

                <Form.Group className="" controlId="Adresse">
                    <Form.Label>Adresse, rue et numero</Form.Label>
                    <Form.Control
                        value={Adresse}
                        onChange={(f) => setAdresse(f.target.value)}
                        type="string"
                        placeholder="Rue et numero"
                      />
                </Form.Group>
                <Form.Group className="" controlId="CP">
                    <Form.Label>Code postal</Form.Label>
                    <Form.Control
                        value={CP}
                        onChange={(f) => setCp(f.target.value)}
                        type="number"
                        placeholder="Code postal"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Ville">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control
                        value={Ville}
                        onChange={(f) => setVille(f.target.value)}
                        type="string"
                        placeholder="Ville"
                      />
                </Form.Group>
                <Form.Group className="" controlId="ContactMail">
                    <Form.Label>Email de contact</Form.Label>
                    <Form.Control
                        value={ContactMail}
                        onChange={(f) => setContactMail(f.target.value)}
                        type="mail"
                        placeholder="Email@founisseur.com"
                      />
                </Form.Group>
                <Form.Group className="" controlId="ContactPortable">
                    <Form.Label>num de contact</Form.Label>
                    <Form.Control
                        value={ContactPortable}
                        onChange={(f) => setContactPortable(f.target.value)}
                        type="string"
                        placeholder="Numero de contact"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Artichats">
                    <Form.Label>Artichats</Form.Label>
                    <Form.Control
                        value={Artichats}
                        onChange={(f) => setArtichats(f.target.value)}
                        type="string"
                        placeholder="Nom de l Artichats qui s'en va"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Lien">
                    <Form.Label>Lien facebook/twitter</Form.Label>
                    <Form.Control
                        value={Lien}
                        onChange={(f) => setLien(f.target.value)}
                        type="text"
                        placeholder="Lien"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Note">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                        value={Note}
                        onChange={(f) => setNote(f.target.value)}
                        type="string"
                        placeholder="Notes"
                      />
                </Form.Group>
                <Form.Group className="" controlId="NumeroPermis">
                    <Form.Label>Numero du Permis</Form.Label>
                    <Form.Control
                        value={NumeroPermis}
                        onChange={(f) => setNumeroPermis(f.target.value)}
                        type="number"
                        placeholder="Numero du Permis"
                      />
                </Form.Group>
                <Form.Group className="" controlId="DatePermis">
                    <Form.Label>DatePermis</Form.Label>
                    <Form.Control
                        value={DatePermis}
                        onChange={(f) => setDatePermis(f.target.value)}
                        type="date"
                        placeholder="Date du Permis"
                      />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add artichats
                </Button>
            </Form>
            </Container>
            </>
    )



}
export default AdoptantPost