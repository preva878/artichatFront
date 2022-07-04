import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'

const EditAdoptant = () => {

    const {id} = useParams()
    const navigate = useNavigate()


    const [Nom,setNom] = useState("");
    const [Adresse,setAdresse] = useState("");
    const [CP,setCP] = useState("");
    const [Ville,setVille] = useState("");
    const [ContactMail,setContactMail] = useState("");
    const [ContactPortable,setContactPortable] = useState("");
    const [Artichats,setArtichats] = useState("");
    const [Lien,setLien] = useState("");
    const [Note,setNote] = useState("");
    const [NumeroPermis,setNumeroPermis] = useState("");
    const [DatePermis,setDatePermis]=useState("");

    useEffect(() => {
        const getSingleAdoptantData = async () => {
            const {data} = await axios.get(`http://localhost:8585/api/adoptant/getAdoptant/${id}`)
            console.log(data)

            
            setNom(data.Nom)
            setAdresse(data.Adresse)
            setCP(data.CP)
            setVille(data.Ville)
            setContactMail(data.ContactMail)
            setContactPortable(data.ContactPortable)
            setArtichats(data.Artichats)
            setLien(data.Lien)
            setNote(data.Note)
            setNumeroPermis(data.NumeroPermis)
            setDatePermis(data.DatePermis)
        }
        getSingleAdoptantData()
    },[id])

    const updateHandler = async (f) => {

        f.preventDefault()
        const data = {
            Nom:Nom,
            Adresse:Adresse,
            CP:CP,
            Ville:Ville,
            ContactMail:ContactMail,
            ContactPortable:ContactPortable,
            Artichats:Artichats,
            Lien:Lien,
            Note:Note,
            NumeroPermis:NumeroPermis,
            DatePermis:DatePermis,
        }
        await axios.put(`http://localhost:8585/api/adoptant/getadoptantup/${id}`,data)
        navigate.push('/')
    }
    return(
        <>
        <Container>
        <h1>update Fiche Adoptant</h1>
        <hr />
        <Form onSubmit={updateHandler} >

       
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
                        onChange={(f) => setCP(f.target.value)}
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
                        Update Adoptant
                    </Button>
        </Form>
        </Container>
        </>
    )
}
export default EditAdoptant