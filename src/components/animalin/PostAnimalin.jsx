import {useState} from 'react'
import axios from 'axios'

import { Container, Form, Button } from 'react-bootstrap'


const AnimalInPost = ({history}) => {

    const [Nom,setNom] = useState('');
    const [currentSexe, setCurrentSexe] = useState('Indefini');
    const [Age,setAge] = useState('');
    const [Poids,setPoids] = useState('');
    const [DateEntree,setDateEntree] = useState('');
    const [Etat,setEtat] = useState('');
    const [Traitement,setTraitement] = useState('');
    const [FamilleAccueil,setFamilleAccueil] = useState('');
    const [Note,setNote] = useState('');
    const [Image,setImage] = useState('');
    
        
const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`artichats encoder ${Nom},${currentSexe},${Age}`)
    
const formData = new FormData()

formData.append('Image', Image)
formData.append('Nom',Nom)
formData.append('currentSexe',currentSexe)
formData.append('Age',Age)
formData.append('Poids',Poids)
formData.append('DateEntree',DateEntree)
formData.append('Etat',Etat)
formData.append('Traitement',Traitement)
formData.append('FamilleAccueil',FamilleAccueil)
formData.append('Note',Note)

await axios.post('http://localhost:3000/api/addAnimalIn',formData)
history.push('/addAnimalIn')
}
    return (
        <>
        <Container className=''>
            <h1>Ajouter un artichats</h1>
            <hr />

            <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data'>

            <Form.Group controlId="fileName" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                    type="file"
                    name='image'
                    onChange={(e) => setImage(e.target.files[0])}
                    size="lg" />
            </Form.Group>
            <Form.Group className="" controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        value={Nom}
                        onChange={(e) => setNom(e.target.value)}
                        type="string"
                      />
                </Form.Group>

                <Form.Group className="" controlId="sexe">
                    <Form.Label>Sexe</Form.Label>
                    <Form.Control
                        value={currentSexe}
                        onChange={(e) => setCurrentSexe(e.target.value)}
                        type="string"
                      />
                </Form.Group>

                <Form.Group className="" controlId="age">
                    <Form.Label>Age ($)</Form.Label>
                    <Form.Control
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                         />
                </Form.Group>

              
                <Form.Group className="" controlId="Poids">
                    <Form.Label>Poids</Form.Label>
                    <Form.Control
                        value={Poids}
                        onChange={(e) => setPoids(e.target.value)}
                        type="number"
                        />
                </Form.Group>
                <Form.Group className="" controlId="DateEntree">
                    <Form.Label>Date d'arrivee</Form.Label>
                    <Form.Control
                        value={DateEntree}
                        onChange={(e) => setDateEntree(e.target.value)}
                        type="dateonly"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Etat">
                    <Form.Label>Etat</Form.Label>
                    <Form.Control
                        value={Etat}
                        onChange={(e) => setEtat(e.target.value)}
                        type="string"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Traitement">
                    <Form.Label>Traitement reçu</Form.Label>
                    <Form.Control
                        value={Traitement}
                        onChange={(e) => setTraitement(e.target.value)}
                        type="string"
                      />
                </Form.Group>
                <Form.Group className="" controlId="FamilleAccueil">
                    <Form.Label>Famille d'accueil</Form.Label>
                    <Form.Control
                        value={FamilleAccueil}
                        onChange={(e) => setFamilleAccueil(e.target.value)}
                        type="string"
                      />
                </Form.Group>
                <Form.Group className="" controlId="note">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                        value={Note}
                        onChange={(e) => setNote(e.target.value)}
                        type="text"
                      />
                </Form.Group>

               


                <Button variant="primary" type="submit">
                    Add Product
                </Button>
            </Form>
        </Container>
    </>
        )

}
export default AnimalInPost