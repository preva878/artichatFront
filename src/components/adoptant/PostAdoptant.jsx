import {useState} from 'react'
import axios from 'axios'
import { Button, Icon } from 'semantic-ui-react'

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
                <div>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
  </div>
            </form>
        </section>
    )



}
export default AdoptantPost