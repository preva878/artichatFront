import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Form, Button } from 'react-bootstrap'
import '../components/layout.css'

import logo from '../logo.png'


const Layout = () => {




  return (
    
    <>
  
    <Navbar expand="md"  >
    <img src={logo} />
  <Container>
    <Navbar.Brand href="/">Bienvenue</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="Navbar">
        
       
      


        <NavDropdown title="Pour les artichats" id="basic-nav-dropdown">
        <Nav.Link as={Link} to="/AnimalInPost">Ajouter un In </Nav.Link>
        <Nav.Link as={Link} to="/ShowAnimalIns">Show allIN </Nav.Link>
        <Nav.Link as={Link} to="/AnimalOutPost">Ajouter un depart </Nav.Link>
        <Nav.Link as={Link} to="/ShowAnimalOuts">Show depart </Nav.Link>
       
          
          <NavDropdown.Divider />
          
        </NavDropdown>
        <NavDropdown title="Pour FA et Adoptants" id="basic-nav-dropdown">
          <Nav.Link as={Link} to="/addAdoptant">Ajouter un adoptant</Nav.Link>
          <Nav.Link as={Link} to="/ShowAdoptants">liste des adoptants</Nav.Link>
          <Nav.Link as={Link} to="/FamilleAccueilPost">Ajouter un Famille d'accueil</Nav.Link>
          <Nav.Link as={Link} to="/ShowFamilleAccueil">afficher les FA</Nav.Link>
          <NavDropdown.Divider />
          
        </NavDropdown>
        <NavDropdown title="Equipement et produit" id="basic-nav-dropdown">
          <Nav.Link as={Link} to="/EquipementPost">Ajouter un equipement</Nav.Link>
          <Nav.Link as={Link} to="/ShowEquipements">Liste d 'equipement</Nav.Link>
          <Nav.Link as={Link} to="/addProduct">Ajouter un produit</Nav.Link>
          <Nav.Link as={Link} to="/showProducts">Montrer les produits</Nav.Link>
          <NavDropdown.Divider />

        </NavDropdown>

        <NavDropdown title="Sponsor et veterinaire" id="basic-nav-dropdown">
        
        <Nav.Link as={Link} to="/PostSponsor">Ajouter un sponsor</Nav.Link>
        <Nav.Link as={Link} to="/ShowSponsor">Afficher les sponsors</Nav.Link>
        <Nav.Link as={Link} to="/VeterinairePost">Ajouter un veterinaire</Nav.Link>
        <Nav.Link as={Link} to="/ShowVeterinaire">Afficher les Veterinaires</Nav.Link>
        
        </NavDropdown>
        <Nav>
        <Nav.Link as={Link} to="/Faq">faq</Nav.Link>
        </Nav>
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
     

      <Outlet />
    </>
  )
};

export default Layout;