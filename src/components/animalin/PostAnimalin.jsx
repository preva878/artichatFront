import {useState} from 'react'
import axios from 'axios'

const url = 'http://localhost:8085/animalinpost';

const AnimalInPost = () => {
    const [Nom,setNom] = useState('');
    const [Sexe,setSexe] = useState('');
    const [Age,setAge] = useState('');
    const [Poids,setPoids] = useState('');
    const [DateEntree,setDateEntree] = useState('');
    const [Etat,setEtat] = useState('');
    const [Traitement,setTraitement] = useState('');
    const [FamilleAccueil,setFamilleAccueil] = useState('');
    const [Note,setNote] = useState('');

const handleSubmit = async (f) => {
    f.preventDefault();
    try {
        const resp = await axios.post(url,{Nom:Nom,Sexe:Sexe,Age:Age,
            Poids:Poids,DateEntree:DateEntree,Etat:Etat,Traitement:Traitement,
        FamilleAccueil:FamilleAccueil,Note:Note})
        console.log(resp.data);
    }catch (error) {
        console.log(error.response);
    }
    };
    return (
        <section>
            <h2>ajouter un artichats qui vient d'arriver</h2>
            <form action="" method='post' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Nom">Nom</label>
                    <input type="text"  id="Nom" onChange={(f)=>setNom(f.target.value)} />
                </div>
                <button type='submit' >
          ajouter
        </button>
            </form>
        </section>
    )

}
export default AnimalInPost