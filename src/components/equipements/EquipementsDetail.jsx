import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'

const EditEquipement = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [Nom,setNom] = useState('');
    const [Types,setTypes] = useState('');
    const [Quantite,setQuantite] = useState('');
    const [DateEntree,setDateEntree] = useState('');
    const [DatePeremption,setDatePeremption] = useState('');
    const [Etats,setEtats] = useState('');

    useEffect(() => {
        const getSingleEquipementData = async() => {
            const {data} = await axios.get(`http://localhost:8585/api/eqp/getequipement/${id}`)
            console.log(data)

            setNom(data.Nom)
            setTypes(data.Types)
            setQuantite(data.Quantite)
            setDateEntree(data.DateEntree)
            setDatePeremption(data.DatePeremption)
            setEtats(data.Etats)
        }
        getSingleEquipementData()
    },[id] )

    const updateHandler = async (e) => {

        e.preventDefault()

        const data = {
            Nom:Nom,
            Types:Types,
            Quantite:Quantite,
            DateEntree:DateEntree,
            DatePeremption:DatePeremption,
            Etats:Etats,
        }
        await axios.put(`http://localhost:8585/api/eqp/getequipementup/${id}`,data)
        navigate.push('/eqp/getequipementup/')
    }

    return(
        <>
        <Container>
            <h1>update equipement</h1>
            <hr />

            <Form onSubmit={updateHandler} >
            <Form.Group className="" controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        value={Nom}
                        onChange={(e) => setNom(e.target.value)}
                        type="string"
                        placeholder="Nom de la marque"
                      />
                </Form.Group>

                <Form.Group className="" controlId="Types">
                    <Form.Label>Types</Form.Label>
                    <Form.Control
                        value={Types}
                        onChange={(e) => setTypes(e.target.value)}
                        type="string"
                        placeholder="types d'equipemet,boite,croquette,autres"
                      />
                </Form.Group>

                <Form.Group className="" controlId="Quantite">
                    <Form.Label>Quantite</Form.Label>
                    <Form.Control
                        value={Quantite}
                        onChange={(e) => setQuantite(e.target.value)}
                        type="number"
                        placeholder="Quantite reçue"
                      />
                </Form.Group>

                <Form.Group className="" controlId="Dateentree">
                    <Form.Label>Date d'entree</Form.Label>
                    <Form.Control
                        value={DateEntree}
                        onChange={(e) => setDateEntree(e.target.value)}
                        type="date"
                        placeholder="date de reception"
                      />
                </Form.Group>

                <Form.Group className="" controlId="DatePeremption">
                    <Form.Label>Date de peremption</Form.Label>
                    <Form.Control
                        value={DatePeremption}
                        onChange={(e) => setDatePeremption(e.target.value)}
                        type="date"
                        placeholder="date de peremption si il y a"
                      />
                </Form.Group>
                <Form.Group className="" controlId="Etats">
                    <Form.Label>Etats</Form.Label>
                    <Form.Control
                        value={Etats}
                        onChange={(e) => setEtats(e.target.value)}
                        type="string"
                        placeholder="Bon,use,utilise,tres sale"
                      />
                </Form.Group>
                <Button variant="primary" type="submit">
                        Update Equipement
                    </Button>
            </Form>
        </Container>
        </>
    )
}
export default EditEquipement