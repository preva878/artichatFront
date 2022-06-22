import {useState} from 'react'
import axios from 'axios'


import { Container, Form, Button } from 'react-bootstrap'

const AnimalOutPost = ({history}) => {
    const [Nom,setNom] = useState('');
    const [NomDefinitif,setNomDefinitif] = useState('');
    const [SexeDefini,setSexeDefini] = useState('');
    const [Particularite,setParticularite] = useState('');
    const [Age,setAge] = useState('');
    const [Poids,setPoids] = useState('');
    const [Etat,setEtat] = useState('');
    const [Vaccin,setVaccin] = useState('');
    const [DateVaccin,setDateVaccin] = useState('');
    const [Puce,setPuce] = useState('');
    const [Sterilisation,setSterilisation] = useState('');
    const [DateSterilisation,setdateSterilisation] = useState('');
    const [Adoptant,setAdoptant] = useState('');
    const [DateDepart,setDateDepart] = useState('');
    const [Image,setImage] = useState('');


const handleSubmit = async (f) => {
    f.preventDefault()
    alert(`Artichats : ${Nom} en route pour sa nouvelle vie avec ${Adoptant}`)

    const formData = new FormData()

    formData.append('Nom',Nom)
    formData.append('NomDefinitif',NomDefinitif)
    formData.append('SexeDefini',SexeDefini)
    formData.append('Particularite',Particularite)
    formData.append('Age',Age)
    formData.append('Poids',Poids)
    formData.append('Etat',Etat)
    formData.append('Vaccin',Vaccin)
    formData.append('DateVaccin',DateVaccin)
    formData.append('Puce',Puce)
    formData.append('Sterilisation',Sterilisation)
    formData.append('DateSterilisation',DateSterilisation)
    formData.append('Adoptant',Adoptant)
    formData.append('DateDepart',DateDepart)
    formData.append('Image',Image)

    await axios.post('http://localhost:3000/api/addAnimalOut',formData)
    history.push('/addAnimalOut')
}
    return(
        <>
        <Container>
            <h1>ajouter un Artichats qui s'en va</h1>
            <hr />

            <Form onSubmit={handleSubmit} method="POST" encType='multipart/form-data'>

            <Form.Group controlId="fileName" >
                <Form.Label></Form.Label>
                <Form.Control
                    type="file"
                    name='image'
                    onChange={(f) => setImage(f.target.files[0]) }
                    size="sm"
                />
            </Form.Group>
            <Form.Group className="" controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        value={Nom}
                        onChange={(f) => setNom(f.target.value)}
                        type="string"
                      />
                </Form.Group>
                <Form.Group className="" controlId="NomDefinitif">
                    <Form.Label>Nom definitif</Form.Label>
                    <Form.Control
                        value={NomDefinitif}
                        onChange={(f) => setNomDefinitif(f.target.value)}
                        type="string"
                      />
                </Form.Group>

                <Form.Group className="" controlId="SexeDefini">
                    <Form.Label>Sexe definitif </Form.Label>
                    <select
                        value={SexeDefini}
                        onChange={(f) => setSexeDefini(f.target.value)}
                        type="string"
                      >
                        <option value={"male"}>male</option>
                        <option value={"femelle"}>femelle</option>
                        
                        </select>
                </Form.Group>
                <Form.Group className="" controlId="Particularite">
                    <Form.Label>Particularite</Form.Label>
                    <Form.Control
                        value={Particularite}
                        onChange={(f) => setParticularite(f.target.value)}
                        type="string"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        value={Age}
                        onChange={(f) => setAge(f.target.value)}
                        type="number"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Poids">
                    <Form.Label>Poids en gramme</Form.Label>
                    <Form.Control
                        value={Poids}
                        onChange={(f) => setPoids(f.target.value)}
                        type="number"
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
                <Form.Group className="" controlId="Vaccin">
                    <Form.Label>Vaccin</Form.Label>
                    <Form.Control
                        value={Vaccin}
                        onChange={(f) => setVaccin(f.target.value)}
                        type="boolean"
                      />
                </Form.Group>
                <Form.Group className="" controlId="DateVaccin">
                    <Form.Label>Date du vaccin</Form.Label>
                    <Form.Control
                        value={DateVaccin}
                        onChange={(f) => setDateVaccin(f.target.value)}
                        type="date"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Puce">
                    <Form.Label>Puce</Form.Label>
                    <Form.Control
                        value={Puce}
                        onChange={(f) => setPuce(f.target.value)}
                        type="number"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Sterilisation">
                    <Form.Label>sterilisation</Form.Label>
                    <Form.Control
                        value={Sterilisation}
                        onChange={(f) => setSterilisation(f.target.value)}
                        type="boolean"
                      />
                </Form.Group>
                <Form.Group className="" controlId="DateSterilisation">
                    <Form.Label>Date de la sterilisation</Form.Label>
                    <Form.Control
                        value={DateSterilisation}
                        onChange={(f) => setdateSterilisation(f.target.value)}
                        type="date"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Adoptant">
                    <Form.Label>Adoptant</Form.Label>
                    <Form.Control
                        value={Adoptant}
                        onChange={(f) => setAdoptant(f.target.value)}
                        type="string"
                      />
                </Form.Group>
                <Form.Group className="" controlId="DateDepart">
                    <Form.Label>Date de depart</Form.Label>
                    <Form.Control
                        value={DateDepart}
                        onChange={(f) => setDateDepart(f.target.value)}
                        type="date"
                      />
                </Form.Group>


        <Button variant="primary" type="submit">
            ajouter Artichats out
        </Button>
            </Form>
        </Container>
        
        </>
    )
}
export default AnimalOutPost