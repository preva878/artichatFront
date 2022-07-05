import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'


const EditVeterinaire = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [Nom,setNom]=useState('');
    const [Adresse,setAdresse]=useState('');
    const [Ville,setVille]=useState('');
    const [CP,setCP]=useState('');
    const [DateIntervention,setIntervention]=useState('');
    const [Prix,setPrix]=useState('');
    const [TypeIntervention,setTypeIntervention]=useState('');
    const [Artichats,setArtichats]=useState('');
    const [Notes,setNotes]=useState(''); 
    const [ContactMail,setContactMail]= useState('');
    const [ContactTel,setContactTel]= useState('');

    useEffect(() => {
        const getSingleVeterinaireData = async() => {
            const {data} = await axios.get(`http://localhost:8585/api/veto/getveterinaire/${id}`)
            console.log(data)

            setNom(data.Nom)
            setAdresse(data.Adresse)
            setVille(data.Ville)
            setCP(data.CP)
            setIntervention(data.DateIntervention)
            setPrix(data.Prix)
            setTypeIntervention(data.TypeIntervention)
            setArtichats(data.Artichats)
            setNotes(data.Notes)
            setContactMail(data.ContactMail)
            setContactTel(data.ContactTel)

        }
        getSingleVeterinaireData()
    },[id] )

    const updateHandler = async (v) => {

        v.preventDefault()

        const data= {
            Nom:Nom,
            Adresse:Adresse,
            Ville:Ville,
            CP:CP,
            DateIntervention:DateIntervention,
            Prix:Prix,
            TypeIntervention:TypeIntervention,
            Artichats:Artichats,
            Notes:Notes,
            ContactMail:ContactMail,
            ContactTel:ContactTel
        }
        await axios.put(`http://localhost:8585/api/veto/getveterinaireup/${id}`,data)
        navigate.push('/veto/getveterinaireup')
    }
    return(
        <>
        <Container>
            <h1>update veterinaire</h1>
            <hr />
            <Form onSubmit={updateHandler} method="POST" encType='multipart/form-data'>
                    
              
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
                    <Form.Group className="" controlId="ContactTel">
                        <Form.Label>ContactTel</Form.Label>
                        <Form.Control
                            value={ContactTel}
                            onChange={(v) => setContactTel(v.target.value)}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="" controlId="ContactMail">
                        <Form.Label>ContactMail</Form.Label>
                        <Form.Control
                            value={ContactMail}
                            onChange={(v) => setContactMail(v.target.value)}
                            type="text"
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
export default EditVeterinaire