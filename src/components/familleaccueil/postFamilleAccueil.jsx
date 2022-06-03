import {useState} from 'react'
import axios from 'axios'

const url = 'http://localhost:8085/familleaccueilinsert';

const FamilleAccueilPost = () => {

    const [Nom,setNom] = useState("");
    const [Adresse,setAdresse] = useState("");
    const [Cp,setCp] = useState("");
    const [Ville,setVille] = useState("");
    const [EquipementsFourni,setEquipementsFourni] = useState("");
    const [Artichats,setArtichats] = useState("");
    const [Notes,setNotes] = useState("");

    const handleSubmit = async (h) => {
        h.preventDefault();
        try {
            const resp = await axios.post(url,{Nom,Adresse,Cp,Ville,EquipementsFourni
            ,Artichats,Notes})
            console.log(resp.data)
        } catch (error) {
            console.log(error.response)
        }
    };
    return(
        <section>
            <h2>ajouter une famille d'accueil</h2>
            <form action="" method='post' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Nom">Nom de la famille</label>
                    <input type="text" id='Nom' onChange={(h) => setNom (h.target.value)} />
                </div>
                <div>
                    <label htmlFor="Adresse">Adresse</label>
                    <input type="text" id='Adresse' onChange={(h) => setAdresse (h.target.value)} />
                </div>
                <div>
                    <label htmlFor="Cp">Code Postal</label>
                    <input type="text" id='Cp' onChange={(h) => setCp (h.target.value)} />
                </div>
                <div>
                    <label htmlFor="Ville">Ville</label>
                    <input type="text" id='Ville' onChange={(h) => setVille (h.target.value)} />
                </div>
                <div>
                    <label htmlFor="EquipementsFourni">Equipements fourni a la famille?</label>
                    <input type="text" id='EquipementsFourni' onChange={(h) => setEquipementsFourni (h.target.value)} />
                </div>
                <div>
                    <label htmlFor="Artichats">Artichats</label>
                    <input type="text" id='Artichats' onChange={(h) => setArtichats (h.target.value)} />
                </div>
                <div>
                    <label htmlFor="Notes">Notes</label>
                    <input type="text" id='Notes' onChange={(h) => setNotes (h.target.value)} />
                </div>
                <button type='submit'>ajouter </button>
            </form>
        </section>
    )


}
export default FamilleAccueilPost