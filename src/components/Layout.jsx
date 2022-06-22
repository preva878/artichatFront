import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Form, Button } from 'react-bootstrap'
import '../components/layout.css'




const Layout = () => {




  return (
    
    <>
  
    <Navbar   >
  <Container>
    <Navbar.Brand href="/">Bienvenue</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="Navbar">
        
        {/* <Link to="/AnimalInPost">ajouter un artichat</Link>
        <Link to='/ShowAnimalIns'>essai affiche animalin</Link>
        <Link to="/AnimalOutPost">Encoder un depart</Link>
        <Link to='/ShowAnimalOuts' >affiches les artichats out</Link> */}
        {/* /**a separer */ }
        {/* <Link to='/EquipementPost' >ajouter de l equipement</Link>
        <Link to="/ShowEquipements" > liste des equipements</Link>
        <Link to='/addProduct'>essaiproduct</Link>
        <Link to='/showProducts' >essaishowproduct</Link> */}
        {/* /**a separer */ }
        {/* <Link to='/addAdoptant'  >ajouter un adoptant</Link>
        <Link to='/ShowAdoptants'  >show adoptants</Link> */}
      


        <NavDropdown title="Pour les artichats" id="basic-nav-dropdown">
          <NavDropdown.Item href="/AnimalInPost">Ajouter un In</NavDropdown.Item>
          <NavDropdown.Item href="/ShowAnimalIns">Show allIN</NavDropdown.Item>
          <NavDropdown.Item href="/AnimalOutPost">Ajouter un depart</NavDropdown.Item>
          <NavDropdown.Item href="/ShowAnimalOuts">Show depart</NavDropdown.Item>
          <NavDropdown.Divider />
          
        </NavDropdown>
        <NavDropdown title="Pour FA et Adoptants" id="basic-nav-dropdown">
          <NavDropdown.Item href="/addAdoptant">Ajouter un adoptant</NavDropdown.Item>
          <NavDropdown.Item href="/ShowAdoptants">liste des adoptants</NavDropdown.Item>
          
          <NavDropdown.Divider />
          
        </NavDropdown>
        <NavDropdown title="Equipement et produit" id="basic-nav-dropdown">
          <NavDropdown.Item href="/EquipementPost">Ajouter un equipement</NavDropdown.Item>
          <NavDropdown.Item href="/ShowEquipements">Liste d 'equipement</NavDropdown.Item>
          <NavDropdown.Item href="/addProduct">Ajouter un produit</NavDropdown.Item>
          <NavDropdown.Item href="/showProducts">Montrer les produits</NavDropdown.Item>
          <NavDropdown.Divider />

        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* la page layout sert de navigateur*/ }
          </li>
         
         
          <li>ne fonctionne pas</li>
         <li>
           <Link to='/FamilleAccueilPost'>encoder une familleaccueil</Link>
         </li>
          <li>
            <Link to='/PostSponsor' > ajouter un sponsor</Link>
          </li>
          <li>
            <Link to='/VeterinairePost' > ajouter un veterinaire</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;