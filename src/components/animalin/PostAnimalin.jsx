import {useState} from 'react'
import axios from 'axios'
import {FormGroup} from '@mui/material/FormGroup';


import { Container, Form, Button } from 'react-bootstrap'


const AnimalInPost = ({history}) => {

    const [Nom,setNom] = useState('');
    const [currentSexe, setCurrentSexe] = useState('');
    const [Age,setAge] = useState('');
    const [Poids,setPoids] = useState('');
    const [DateEntree,setDateEntree] = useState('');
    const [Etat,setEtat] = useState('');
    const [Traitement,setTraitement] = useState('');
    const [FamilleAccueil,setFamilleAccueil] = useState('');
    const [Note,setNote] = useState('');
    const [Image,setImage] = useState('');
    
        
const handleSubmit = async (f) => {
    f.preventDefault()
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
console.log(formData)
}
    return (
        <>
        <Container className='mt-5 p-2'>
            <h1>Ajouter un artichats</h1>
            <hr />

            <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data'>

            <Form.Group controlId="fileName" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                    type="file"
                    name='image'
                    onChange={(f) => setImage(f.target.files[0])}
                    size="sm" />
            </Form.Group>
            <Form.Group className="" controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        value={Nom}
                        onChange={(f) => setNom(f.target.value)}
                        type="string"
                      />
                </Form.Group>

                <Form.Group fullWidth>
  <Form.Label>Sexe</Form.Label>
  <select
   
    value={currentSexe}
    label="sexe"
    onChange={(f) => setCurrentSexe(f.target.value) }
  >
    <option value={"male"}>male</option>
    <option value={"femelle"}>femelle</option>
    <option value={"inconnu"}>inconnu</option>
  </select>
</Form.Group>

                <Form.Group className="" controlId="age">
                    <Form.Label>Age </Form.Label>
                    <Form.Control
                        value={Age}
                        onChange={(f) => setAge(f.target.value)}
                        type="number"
                         />
                </Form.Group>

              
                <Form.Group className="" controlId="Poids">
                    <Form.Label>Poids</Form.Label>
                    <Form.Control
                        value={Poids}
                        onChange={(f) => setPoids(f.target.value)}
                        type="number"
                        />
                </Form.Group>
                <Form.Group className="" controlId="DateEntree">
                    <Form.Label>Date d'arrivee</Form.Label>
                    <Form.Control
                        value={DateEntree}
                        onChange={(f) => setDateEntree(f.target.value)}
                        type="date"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Etat">
                    <Form.Label>Etat</Form.Label>
                    <Form.Control
                        value={Etat}
                        onChange={(f) => setEtat(f.target.value)}
                        type="string"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Traitement">
                    <Form.Label>Traitement reçu</Form.Label>
                    <Form.Control
                        value={Traitement}
                        onChange={(f) => setTraitement(f.target.value)}
                        type="string"
                      />
                </Form.Group>
                <Form.Group className="" controlId="FamilleAccueil">
                    <Form.Label>Famille d'accueil</Form.Label>
                    <Form.Control
                        value={FamilleAccueil}
                        onChange={(f) => setFamilleAccueil(f.target.value)}
                        type="string"
                      />
                </Form.Group>
                <Form.Group className="" controlId="note">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                        value={Note}
                        onChange={(f) => setNote(f.target.value)}
                        type="text"
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
export default AnimalInPost