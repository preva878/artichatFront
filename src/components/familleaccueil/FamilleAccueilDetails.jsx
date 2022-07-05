import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'

const EditFa = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [Nom,setNom] = useState('');
    const [Adresse,setAdresse] = useState('');
    const [CP,setCp] = useState('');
    const [Ville,setVille] = useState('');
    const [EquipementsFournit,setEquipementsFournit] = useState('');
    const [Artichats,setArtichats] = useState('');
    const [ContactMail,setContactMail] = useState('');
    const [Contacttel,setContacttel] = useState('');
    const [Notes,setNotes] = useState('');


    useEffect(() => {
        const getSingleFamilleAccueilData = async() => {
            const {data} = await axios.get(`http://localhost:8585/api/fa/getfamilleaccueil/${id}`)
            console.log(data)

            setNom(data.Nom)
            setAdresse(data.Adresse)
            setCp(data.CP)
            setVille(data.Ville)
            setEquipementsFournit(data.EquipementsFournit)
            setArtichats(data.Artichats)
            setContactMail(data.ContactMail)
            setContacttel(data.Contacttel)
            setNotes(data.Notes)
        }
        getSingleFamilleAccueilData()
    },[id] )

    const updateHandler = async (e) =>{

        e.preventDefault()

        const data = {
            
        }
        await axios.put(`http://localhost:8585/api/fa/getfamilleaccueilup/${id}`,data)
        navigate.push(`/fa/getfamilleaccueilup`)
    }
    return (

        <>
        <Container>
            <h1>Encoder une FA</h1>
            <hr />

            <Form onSubmit={updateHandler} method="POST" encType='multipart/form-data'>

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
            <Form.Group>
            <Form.Label>Contacttel</Form.Label>
                    <Form.Control
                        value={Contacttel}
                        onChange={(e) => setContacttel(e.target.value)}
                        type="string"
                        placeholder="Notes"
                      />
            </Form.Group>
            <Form.Group>
            <Form.Label>ContactMail</Form.Label>
                    <Form.Control
                        value={ContactMail}
                        onChange={(e) => setContactMail(e.target.value)}
                        type="string"
                        placeholder="Notes"
                      />
            </Form.Group>


            <Button variant="primary" type="submit">
                    Update famille
                </Button>
            </Form>
        </Container>
        </>
    )


}
export default EditFa