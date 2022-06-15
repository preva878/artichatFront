import {useState} from 'react'
import axios from 'axios'


import { Container, Form, Button } from 'react-bootstrap'

const AnimalOutPost = ({history}) => {
    const [Nom,setNom] = useState('');
    const [NomDefinitif,setNomDefinitif] = useState('');
    const [SexeDefini,setSexeDefini] = useState('');
    const [Particularite,setParticularite] = useState('');
    const [Age,setAge] = useState('');
    const [Poids,setPoids] = useState('');
    const [Etat,setEtat] = useState('');
    const [Vaccin,setVaccin] = useState('');
    const [DateVaccin,setDateVaccin] = useState('');
    const [Puce,setPuce] = useState('');
    const [Sterilisation,setSterilisation] = useState('');
    const [DateSterilisation,setdateSterilisation] = useState('');
    const [Adoptant,setAdoptant] = useState('');
    const [DateDepart,setDateDepart] = useState('');
}

const handleSubmit = async (g) => {
    g.prenvetnDefault()
    alert()
}