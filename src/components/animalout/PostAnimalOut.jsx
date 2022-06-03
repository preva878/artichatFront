import {useState} from 'react'
import axios from 'axios'

const url = 'http://localhost:8085/animaloutpost';

const AnimalOutPost = () => {

    const [Nom,setNom] = useState('');
    const [NomDefinitif,setNomDefinitif] = useState('');
    const [SexeDefini,setSexDefini] = useState('');
    const [Particularite,setParticularite] = useState('');
    const [Age,setAge] = useState('');
    const [Poids,setPoids] = useState('');
    const [Etat,setEtat] = useState('');
    const [Vaccin,setVaccin] = useState('');
    const [DateVaccin,setDateVaccin] = useState('');
    const [Puce,setPuce] = useState('');
    const [Sterilisation,setSterilisation] = useState('');
    const [DateSterilisation,setDateSterilisation] = useState('');
    const [Adoptant,setAdoptant] = useState('');
    const [DateDepart,setDateDepart] = useState('');

    const handleSubmit = async (g) => {
        g.preventDefault();
        try {
            const resp = await axios.post(url,{Nom:Nom,NomDefinitif:NomDefinitif,
                SexeDefini:SexeDefini,Particularite:Particularite,Age:Age,Poids:Poids,Age:Age,Poids:Poids,
                Etat:Etat,Vaccin:Vaccin,DateVaccin:DateVaccin,Puce:Puce,Sterilisation:Sterilisation,
            DateSterilisation:DateSterilisation,Adoptant:Adoptant,DateDepart:DateDepart})
            console.log(resp.data);
        } catch (error) {
            console.log(error.response)
        }
    };
    return (
        <section>
            <h2>Encoder un artichat qui s'en va</h2>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Nom">Nom</label>
                    <input type="text" id="Nom" onChange={(g) => setNom (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="NomDefinitif">Nom definitif</label>
                    <input type="text" id="NomDefinitif" onChange={(g) =>setNomDefinitif (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="SexeDefini">vrai sexe </label>
                    <input type="text"  id="SexeDefini" onChange={(g) =>setSexDefini (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="Particularite">Particularité</label>
                    <input type="text" id="Particularite" onChange={(g) =>setParticularite (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="Age">Age</label>
                    <input type="text" id="Age" onChange={(g) =>setAge (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="Poids">Poids</label>
                    <input type="text" id="Poids" onChange={(g) =>setPoids (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="Etat">Etat</label>
                    <input type="text" id="Etat" onChange={(g) =>setEtat (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="Vaccin">Vaccin</label>
                    <input type="checkbox" initialChecked={true} id="Vaccin" onChange={(g) =>setVaccin (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="DateVaccin">Date du vaccin</label>
                    <input type="date" id="DateVaccin" onChange={(g) =>setDateVaccin (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="Puce">Code de la puce</label>
                    <input type="text" id="Puce" onChange={(g) =>setPuce (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="Sterilisation">Sterilisation</label>
                    <input type="checkbox" initialChecked={true} id="Sterilisation" onChange={(g) =>setSterilisation (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="DateSterilisation">Date de la sterilisation</label>
                    <input type="date" id="DateSterilisation" onChange={(g) =>setDateSterilisation (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="Adoptant">Famille pour la vie</label>
                    <input type="text" id="Adoptant" onChange={(g) =>setAdoptant (g.target.value)} />
                </div>
                <div>
                    <label htmlFor="Datedepart">Date du depart de l'asso</label>
                    <input type="date" id="DateDepart" onChange={(g) =>setDateDepart (g.target.value)} />
                </div>

                <button type='submit'>ajouter</button>
            </form>
        </section>
    )

}
export default AnimalOutPost