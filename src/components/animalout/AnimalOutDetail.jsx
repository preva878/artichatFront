import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'

const EditAnimalOut = () => {

    const {id} = useParams()
    const navigate = useNavigate()

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

    useEffect(() => {

        const getSingleAnimalOutData = async() => {
            const {data} = await axios.get(`http://localhost:8585/api/animalout/getAnimalOut/${id}`)
            console.log(data)

            setNom(data.Nom)
            setNomDefinitif(data.NomDefinitif)
            setSexeDefini(data.SexeDefini)
            setParticularite(data.Particularite)
            setAge(data.Age)
            setPoids(data.Poids)
            setEtat(data.Etat)
            setVaccin(data.Vaccin)
            setDateVaccin(data.DateVaccin)
            setPuce(data.Puce)
            setSterilisation(data.Sterilisation)
            setdateSterilisation(data.DateSterilisation)
            setAdoptant(data.Adoptant)
            setDateDepart(data.DateDepart)
        }
        getSingleAnimalOutData()
    },[id])
    const updateHandler = async (f) => {

        f.preventDefault()

        const data = {
            Nom:Nom,
            NomDefinitif:NomDefinitif,
            SexeDefini:SexeDefini,
            Particularite:Particularite,
            Age:Age,
            Poids:Poids,
            Etat:Etat,
            Vaccin:Vaccin,
            DateVaccin:DateVaccin,
            Puce:Puce,
            Sterilisation:Sterilisation,
            DateSterilisation:DateSterilisation,
            Adoptant:Adoptant,
            DateDepart:DateDepart,
        }
        await axios.put(`http://localhost:8585/api/animalOut/getAnimalOutup/${id}`,data)
        navigate.push('/animalOut/getAnimalOutup/')
    }

    return(
        <>
        <Container>
            <h1>update AnimalOut</h1>
            <hr />

            <Form onSubmit={updateHandler} >

            <Form.Group className="" controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        value={Nom}
                        onChange={(f) => setNom(f.target.value)}
                        type="string"
                        placeholder="Nom en arrivant"
                      />
                </Form.Group>
                <Form.Group className="" controlId="NomDefinitif">
                    <Form.Label>Nom definitif</Form.Label>
                    <Form.Control
                        value={NomDefinitif}
                        onChange={(f) => setNomDefinitif(f.target.value)}
                        type="string"
                        placeholder="Nom officiel"
                      />
                </Form.Group>

                <Form.Group className="" controlId="SexeDefini">
                    <Form.Label>Sexe definitif </Form.Label>
                    <Form.Select
                        value={SexeDefini}
                        onChange={(f) => setSexeDefini(f.target.value)}
                        type="string"
                      >
                        <option value={"male"}>male</option>
                        <option value={"femelle"}>femelle</option>
                        
                        </Form.Select>
                </Form.Group>
                <Form.Group className="" controlId="Particularite">
                    <Form.Label>Particularite</Form.Label>
                    <Form.Control
                        value={Particularite}
                        onChange={(f) => setParticularite(f.target.value)}
                        type="string"
                        placeholder="tricolore,chat poilus, chat a calin, etc..."
                      />
                </Form.Group>
                <Form.Group className="" controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        value={Age}
                        onChange={(f) => setAge(f.target.value)}
                        type="number"
                        placeholder="Age au depart"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Poids">
                    <Form.Label>Poids en gramme</Form.Label>
                    <Form.Control
                        value={Poids}
                        onChange={(f) => setPoids(f.target.value)}
                        type="number"
                        placeholder="Poids au depart"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Etat">
                    <Form.Label>Etat</Form.Label>
                    <Form.Control
                        value={Etat}
                        onChange={(f) => setEtat(f.target.value)}
                        type="string"
                        placeholder="Vivant,decede,disparu"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Vaccin">
                    <Form.Label>Vaccin</Form.Label>
                    <Form.Control
                        value={Vaccin}
                        onChange={(f) => setVaccin(f.target.value)}
                        type="boolean"
                        placeholder="vaccine ou non?"
                      />
                </Form.Group>
                <Form.Group className="" controlId="DateVaccin">
                    <Form.Label>Date du vaccin</Form.Label>
                    <Form.Control
                        value={DateVaccin}
                        onChange={(f) => setDateVaccin(f.target.value)}
                        type="date"
                        placeholder="Date du vaccin"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Puce">
                    <Form.Label>Puce</Form.Label>
                    <Form.Control
                        value={Puce}
                        onChange={(f) => setPuce(f.target.value)}
                        type="number"
                        placeholder="Numero de la puce"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Sterilisation">
                    <Form.Label>sterilisation</Form.Label>
                    <Form.Control
                        value={Sterilisation}
                        onChange={(f) => setSterilisation(f.target.value)}
                        type="boolean"
                        placeholder="steriliser oui ou non?"
                      />
                </Form.Group>
                <Form.Group className="" controlId="DateSterilisation">
                    <Form.Label>Date de la sterilisation</Form.Label>
                    <Form.Control
                        value={DateSterilisation}
                        onChange={(f) => setdateSterilisation(f.target.value)}
                        type="date"
                        placeholder="Date de la sterilisation"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Adoptant">
                    <Form.Label>Adoptant</Form.Label>
                    <Form.Control
                        value={Adoptant}
                        onChange={(f) => setAdoptant(f.target.value)}
                        type="string"
                        placeholder="Nom des adoptants"
                      />
                </Form.Group>
                <Form.Group className="" controlId="DateDepart">
                    <Form.Label>Date de depart</Form.Label>
                    <Form.Control
                        value={DateDepart}
                        onChange={(f) => setDateDepart(f.target.value)}
                        type="date"
                        placeholder="Date du grand depart"
                      />
                </Form.Group>
                <Button variant="primary" type="submit">
                        Update animalOut
                    </Button>
            </Form>
        </Container>
        </>
    )

}
export default EditAnimalOut