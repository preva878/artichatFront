import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Form, Button } from 'react-bootstrap'


const Layout = () => {
  return (
    
    <>
    
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <Link to="/AnimalInPost">ajouter un artichat</Link>
        <Link to='/ShowAnimalIns'>essai affiche animalin</Link>
        <Link to="/AnimalOutPost">Encoder un depart</Link>
        <Link to='/ShowAnimalOuts' >affiches les artichats out</Link>
        <Link to='/EquipementPost' >ajouter de l equipement</Link>
        <Link to="/ShowEquipements" > liste des equipements</Link>
        <Link to='/addAdoptant'  >ajouter un adoptant</Link>
        <Link to='/ShowAdoptants'  >show adoptants</Link>
        <Link to='/addProduct'>essaiproduct</Link>
        <Link to='/showProducts' >essaishowproduct</Link>


        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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