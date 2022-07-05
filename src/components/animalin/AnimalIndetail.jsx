import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'


const EditAnimalIn = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [Nom,setNom] = useState('');
    const [currentSexe, setCurrentSexe] = useState('');
    const [Age,setAge] = useState('');
    const [Poids,setPoids] = useState('');
    const [DateEntree,setDateEntree] = useState('');
    const [Etat,setEtat] = useState('');
    const [Traitement,setTraitement] = useState('');
    const [FamilleAccueil,setFamilleAccueil] = useState('');
    const [Note,setNote] = useState('');
    


    useEffect(() => {
        const getSingleAnimalinData = async() => {
            const {data} = await axios.get(`http://localhost:8585/api/animalin/getAnimalIn/${id}`)
            console.log(data)

            setNom(data.Nom)
            setCurrentSexe(data.currentSexe)
            setAge(data.Age)
            setPoids(data.Poids)
            setDateEntree(data.DateEntree)
            setEtat(data.Etat)
            setTraitement(data.Traitement)
            setFamilleAccueil(data.FamilleAccueil)
            setNote(data.Note)
           
        
        }
        getSingleAnimalinData()
    },[id])

    const updateHandler = async (f) => {
        
        f.preventDefault()

        const data = {
            Nom: Nom,
            currentSexe: currentSexe,
            Age:Age,
            Poids:Poids,
            DateEntree: DateEntree,
            Etat: Etat,
            Traitement: Traitement,
            FamilleAccueil: FamilleAccueil,
            Note: Note,
            
        }
        await axios.put(`http://localhost:8585/api/animalin/getAnimalInUp/${id}`,data)
        navigate.push('/animalin/getAnimalInUp')
    }

    return(
        <>
        <Container>
            <h1>essai updat animalin</h1>
            <hr />

            <Form onSubmit={updateHandler} >
          
            <Form.Group className="" controlId="Nom" placeholder="essai">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        value={Nom}
                        onChange={(f) => setNom(f.target.value)}
                        type="string"
                        placeholder="Nom de l'animal"
                      />
                </Form.Group>
<hr />
                <Form.Group fullWidth>
                    <Form.Label>Sexe</Form.Label>
                    <Form.Select

                        value={currentSexe}
                        label="sexe"
                        onChange={(f) => setCurrentSexe(f.target.value) }
                    >
                        <option value={"male"}>male</option>
                        <option value={"femelle"}>femelle</option>
                        <option value={"inconnu"}>inconnu</option>
                    </Form.Select>
                    </Form.Group>

                <Form.Group className="" controlId="age">
                    <Form.Label>Age </Form.Label>
                    <Form.Control
                        value={Age}
                        onChange={(f) => setAge(f.target.value)}
                        type="number"
                        placeholder="Age estimer"
                         />
                </Form.Group>

              
                <Form.Group className="" controlId="Poids">
                    <Form.Label>Poids en gramme</Form.Label>
                    <Form.Control
                        value={Poids}
                        onChange={(f) => setPoids(f.target.value)}
                        type="number"
                        placeholder="Poids en grammes"
                        />
                </Form.Group>
                <Form.Group className="" controlId="DateEntree">
                    <Form.Label>Date d'arrivee</Form.Label>
                    <Form.Control
                        value={DateEntree}
                        onChange={(f) => setDateEntree(f.target.value)}
                        type="date"
                        placeholder="Date d'arrivee"
                      />
                </Form.Group>
                <hr />
                <Form.Group className="" controlId="Etat">
                    <Form.Label>Etat</Form.Label>
                   <Form.Select 
                        value={Etat}
                        onChange={(f) => setEtat(f.target.value)}
                        type="string"
                        placeholder="Etat :malade,vivant,decede">
                        <option value={"Vivant"}>Vivant</option>
                        <option value={"Malade"}>Malade</option>
                        <option value={"Decede"}>Decede</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group className="" controlId="Traitement">
                    <Form.Label>Traitement reçu</Form.Label>
                    <Form.Control
                        value={Traitement}
                        onChange={(f) => setTraitement(f.target.value)}
                        type="string"
                        placeholder="traitement reçu"
                      />
                </Form.Group>
                <Form.Group className="" controlId="FamilleAccueil">
                    <Form.Label>Famille d'accueil</Form.Label>
                    <Form.Control
                        value={FamilleAccueil}
                        onChange={(f) => setFamilleAccueil(f.target.value)}
                        type="string"
                        placeholder="Famille d'accueil qui le reçoit"
                      />
                </Form.Group>
                <Form.Group className="" controlId="note">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                        value={Note}
                        onChange={(f) => setNote(f.target.value)}
                        type="text"
                        placeholder="Notes"
                      />
                </Form.Group>

                <Button variant="primary" type="submit">
                        Update Product
                    </Button>
            </Form>
           
        </Container>
        
        </>
    )

}
export default EditAnimalIn