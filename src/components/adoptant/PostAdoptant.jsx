import {useState} from 'react'
import axios from 'axios'

const url ='http://localhost:8085/adoptantinsert';

const AdoptantPost = () => {

    const [Nom,setNom] = useState("");
    const [Adresse,setAdresse] = useState("");
    const [CP,setCp] = useState("");
    const [Ville,setVille] = useState("");
    const [ContactMail,setContactMail] = useState("");
    const [ContactPortable,setContactPortable] = useState("");
    const [Artichats,setArtichats] = useState("");
    const [Note,setNote] = useState("");
    
    const handleSubmit = async (i) => {
        i.preventDefault();
        try {
            const resp = await axios.post(url,{Nom,Adresse,CP,Ville,
            ContactMail,ContactPortable,Artichats,Note})
            console.log(resp.data)
        } catch (error) {
            console.log(error.response)
            
        }
    };
    return(
        <section>
            <h2>ajouter une famille d'adoptant</h2>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Nom">nom de la famille qui adopte</label>
                    <input type="text" id='Nom' onChange={(i) => setNom(i.target.value) } />
                </div>
                <div>
                    <label htmlFor="Adresse">Adresse de l'adoptant</label>
                    <input type="text" id='Adresse' onChange={(i) => setAdresse(i.target.value) } />
                </div>
                <div>
                    <label htmlFor="CP">Code Postal</label>
                    <input type="text" id='CP' onChange={(i) => setCp(i.target.value) } />
                </div>
                <div>
                    <label htmlFor="Ville">Ville</label>
                    <input type="text" id='Ville' onChange={(i) => setVille(i.target.value) } />
                </div>
                <div>
                    <label htmlFor="ContactMail">adresse email</label>
                    <input type='email' id='ContactMail' onChange={(i) => setContactMail(i.target.value) } />
                </div>
                <div>
                    <label htmlFor="ContactPortable">contact telephone</label>
                    <input type="tel" id='ContactPortable' onChange={(i) => setContactPortable(i.target.value) } />
                </div>
                <div>
                    <label htmlFor="Artichats">nom de l'artichats adopter</label>
                    <input type="text" id='Artichats' onChange={(i) => setArtichats(i.target.value) } />
                </div>
                <div>
                    <label htmlFor="Notes">Notes:</label>
                    <input type="text" id='Notes' onChange={(i) => setNote(i.target.value) } />
                </div>
                <button type='submit'>ajouter </button>
            </form>
        </section>
    )



}
export default AdoptantPost