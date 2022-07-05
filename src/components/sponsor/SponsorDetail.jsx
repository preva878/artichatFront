import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'


const EditSponsor = () => {

    const {id} = useParams()
    const navigate = useNavigate()

   
    const [nom,setnom] = useState('')
    const [materiel,setmateriel] = useState('')
    const [dateEntre,setdateEntre] = useState('')
    const [quantite,setquantite] = useState('')
    const [types,settypes] = useState('')
    const [adresse,setadresse] = useState('')
    const [cp,setcp] = useState('')
    const [ville,setville] = useState('')

    useEffect(( ) => {
        const getSingleSponsorData = async() => {
            const {data} = await axios.get(`http://localhost:8585/api/sponsor/getsponsor/${id}`)
            console.log(data)

            setnom(data.nom)
            setmateriel(data.materiel)
            setdateEntre(data.dateEntre)
            setquantite(data.quantite)
            settypes(data.types)
            setadresse(data.adresse)
            setcp(data.cp)
            setville(data.ville)
        }
        getSingleSponsorData()   
    },[id] )

    const updateHandler = async (f) => {
        
        f.preventDefault()

        const data = {
            nom:nom,
            materiel:materiel,
            dateEntre:dateEntre,
            quantite:quantite,
            types:types,
            adresse:adresse,
            cp:cp,
            ville:ville,
        }
        await axios.put(`http://localhost:8585/api/sponsor/getsponsorup/${id}`,data)
        navigate.push('/sponsor/getsponsorup/')
    }
    
    return (
        <>
             <Container>
            <h1>Ajouter un sponsor</h1>
            <hr />

            <Form onSubmit={updateHandler} method="POST" encType='multipart/form-data'  >

          
                
                <Form.Group controlId="nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                    value={nom}
                    onChange={(f) => setnom(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controlId='materiel'>
                    <Form.Label>Materiel</Form.Label>
                    <Form.Control
                    value={materiel}
                    onChange={(f) => setmateriel(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controlId='dateEntre'>
                    <Form.Label>DateEntree</Form.Label>
                    <Form.Control
                    value={dateEntre}
                    onChange={(f) => setdateEntre(f.target.value)}
                    type="date"
                    />
                </Form.Group>
                <Form.Group controlId='quantite'>
                    <Form.Label>Quantite</Form.Label>
                    <Form.Control
                    value={quantite}
                    onChange={(f) => setquantite(f.target.value)}
                    type="number"
                    />
                </Form.Group>
                <Form.Group controlId='types'>
                    <Form.Label>Types</Form.Label>
                    <Form.Control
                    value={types}
                    onChange={(f) => settypes(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controleId='adresse'>
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control
                    value={adresse}
                    onChange={(f) => setadresse(f.target.value)}
                    type="string"
                    />
                </Form.Group>
                <Form.Group controlId='cp'>
                    <Form.Label>Cp</Form.Label>
                    <Form.Control
                    value={cp}
                    onChange={(f) => setcp(f.target.value)}
                    type="number"
                    />
                </Form.Group>
                <Form.Group controlId='ville'>
                    <Form.Label>Ville</Form.Label>
                    <Form.Control
                    value={ville}
                    onChange={(f) => setville(f.target.value)}
                    type="string"
                    />
                </Form.Group>

            <Button type="submit">
                update Sponsor
            </Button>
            </Form>
        </Container>
        </>
    )

   
}
export default EditSponsor