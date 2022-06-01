import {useState} from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap'


const url = `http://localhost:8085`;

const Page5 = ({history}) => {
    const [Nom,setNom] = useState('');
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
        formData.append('Types',Types)
        formData.append('Quantite',Quantite)
        formData.append('DateEntree',DateEntree)
        formData.append('DatePeremption',DatePeremption)
        formData.append('Etats',Etats)

        await axios.post(url,formData)
        history.pushState('/equipementsinsert')

        
    } ;
    return (
        <>
            <Container >
                <h1>Add Product</h1>
                <hr />

                <Form onSubmit={handleSubmit} method="POST" >

                

                    <Form.Group  controlId="Nom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            value={Nom}
                            onChange={(e) => setNom(e.target.value)}
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