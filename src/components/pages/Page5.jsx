import {useState} from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap'


const url = `http://localhost:8085/equipementsinsert`;

const Page5 = ({history}) => {
    const [Nom,setNom] = useState('');
    const [Image,setImage] =useState('');
    const [Types,setTypes] = useState('');
    const [Quantite,setQuantite] = useState('');
    const [DateEntree,setDateEntree] = useState('');
    const [DatePeremption,setDatePeremption] = useState('');
    const [Etats,setEtats] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const resp = await axios.post(url,{Nom:Nom, Types:Types,
        //         Quantite:Quantite,
        //         DateEntree:DateEntree,DatePeremption:DatePeremption,
        //     Etats:Etats})
        //     console.log(resp.data);
        // } catch (error) {
        //     console.log(error.response);
            
        // }
        const formData = new FormData()
        formData.append('Nom',Nom)
        formData.append('Image',Image)
        formData.append('Types',Types)
        formData.append('Quantite',Quantite)
        formData.append('DateEntree',DateEntree)
        formData.append('DatePeremption',DatePeremption)
        formData.append('Etats',Etats)

        await axios.post(`http://localhost:8085/equipementsinsert`,formData)
         history.pushState('/equipementsinsert')

        
    } ;
    return (
        <>
            <Container >
                <h1>essai ajout</h1>
                <hr />

                <Form onSubmit={handleSubmit} method="POST" >

                
                <Form.Group controlId="fileName" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])}
                        size="lg" />
                </Form.Group>

                    <Form.Group  controlId="Nom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            value={Nom}
                            onChange={(e) => setNom(e.target.value)}
                            type="text"
                          />
                    </Form.Group>
                    <Form.Group  controlId="Types">
                        <Form.Label>Types</Form.Label>
                        <Form.Control
                            value={Types}
                            onChange={(e) => setTypes(e.target.value)}
                            type="text"
                          />
                    </Form.Group>
                    <Form.Group  controlId="Quantite">
                        <Form.Label>Quantite</Form.Label>
                        <Form.Control
                            value={Quantite}
                            onChange={(e) => setQuantite(e.target.value)}
                            type="text"
                          />
                    </Form.Group>
                    <Form.Group  controlId="DateEntree">
                        <Form.Label>Date entree</Form.Label>
                        <Form.Control
                            value={DateEntree}
                            onChange={(e) => setDateEntree(e.target.value)}
                            type="text"
                          />
                    </Form.Group>
                    <Form.Group  controlId="DatePeremption">
                        <Form.Label>Date de peremption</Form.Label>
                        <Form.Control
                            value={DatePeremption}
                            onChange={(e) => setDatePeremption(e.target.value)}
                            type="text"
                          />
                    </Form.Group>
                    <Form.Group  controlId="Etats">
                        <Form.Label>Etats</Form.Label>
                        <Form.Control
                            value={Etats}
                            onChange={(e) => setEtats(e.target.value)}
                            type="text"
                          />
                    </Form.Group>

                    
                    <Button variant="primary" type="submit">
                        ajouter
                    </Button>
                </Form>
            </Container>
        </>
        // <section>
        //     <h2>essai post</h2>
        //     <form action="" method="post" onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="Nom">Nom
        //             </label>
        //             <input type="text" 
        //             id='Nom'
        //             value = {Nom}
        //             onChange={(e) => setNom(e.target.value)}  />
        //         </div>
        //         <div>
        //             <label htmlFor="Type">Types
        //             </label>
        //             <input type="text" 
        //             id='Types'
        //             value = {Types}
        //             onChange={(e) => setTypes(e.target.value)}  />
        //         </div>
        //         <div>
        //             <label htmlFor="Quantite">Quantite
        //             </label>
        //             <input type="text" 
        //             id='Quantite'
        //             value = {Quantite}
        //             onChange={(e) => setQuantite(e.target.value)}  />
        //         </div>
        //         <div>
        //             <label htmlFor="DateEntree">Date arrivee
        //             </label>
        //             <input type="text" 
        //             id='DateEntree'
        //             value = {DateEntree}
        //             onChange={(e) => setDateEntree(e.target.value)}  />
        //         </div>
        //         <div>
        //             <label htmlFor="DatePeremption">date de peremption
        //             </label>
        //             <input type="text" 
        //             id='DatePeremption'
        //             value = {DatePeremption}
        //             onChange={(e) => setDatePeremption(e.target.value)}  />
        //         </div>
        //         <div>
        //             <label htmlFor="Etats">Etats
        //             </label>
        //             <input type="text" 
        //             id='Etats'
        //             value = {Etats}
        //             onChange={(e) => setEtats(e.target.value)}  />
        //         </div>
        //         <button type='submit' >
        //   ajouter
        // </button>
        //     </form>
        // </section>
    )
}
export default Page5