import {useState} from 'react'
import axios from 'axios'

const url = 'http://localhost:8085/animalinpost';

const AnimalInPost = () => {
    const [Nom,setNom] = useState('');
    const [currentSexe, setCurrentSexe] = useState('Indefini');
    const [Age,setAge] = useState('');
    const [Poids,setPoids] = useState('');
    const [DateEntree,setDateEntree] = useState('');
    const [Etat,setEtat] = useState('');
    const [Traitement,setTraitement] = useState('');
    const [FamilleAccueil,setFamilleAccueil] = useState('');
    const [Note,setNote] = useState('');
    
        
        
        

const handleSubmit = async (f) => {
    f.preventDefault();
    alert(`artichats encoder ${Nom},${currentSexe},${Age}`)

    try {
        const resp = await axios.post(url,{Nom:Nom,currentSexe:currentSexe,Age:Age,
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
                {/* <div>
                    <label htmlFor="Sexe">Sexe</label>
                    <input type="text"  id="Sexe" onChange={(f)=>setSexe(f.target.value)} />
                </div> */}
                <div>
                    
                    <select name="currentSexe" id="currentSexe" onChange={(f)=>setCurrentSexe(f.target.value)} value={currentSexe}>choix du sexe
                    <option value="Male">Male</option> 
                    <option value="Femelle">Femelle</option>
                    <option value="Indefini">Indefini</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Age">Age</label>
                    <input type="text"  id="Age" onChange={(f)=>setAge(f.target.value)} />
                </div>
                <div>
                    <label htmlFor="Poids">Poids</label>
                    <input type="text"  id="Poids" onChange={(f)=>setPoids(f.target.value)} />
                </div>
                <div>
                    <label htmlFor="DateEntree">Date entree dans l'association</label>
                    <input type="date"  id="DateEntree" onChange={(f)=>setDateEntree(f.target.value)} />
                </div>
                <div>
                    <label htmlFor="Etat">Etat</label>
                    <input type="text"  id="Etat" onChange={(f)=>setEtat(f.target.value)} />
                </div>
                <div>
                    <label htmlFor="Traitement">Traitement administrer</label>
                    <input type="text"  id="Traitement" onChange={(f)=>setTraitement(f.target.value)} />
                </div>
                <div>
                    <label htmlFor="FamilleAccueil">Famille qui accueille</label>
                    <input type="text"  id="FamilleAccueil" onChange={(f)=>setFamilleAccueil(f.target.value)} />
                </div>
                <div>
                    <label htmlFor="Note">Note</label>
                    <input type="text"  id="Note" onChange={(f)=>setNote(f.target.value)} />
                </div>
               
                <button type='submit'>ajouter </button>
            </form>
        </section>
    )

}
export default AnimalInPost