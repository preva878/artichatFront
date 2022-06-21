import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* la page layout sert de navigateur*/ }
          </li>
         
          <li>
            <Link to="/AnimalInPost">ajouter un artichat</Link>
          </li>
          <li>
           <Link to='/ShowAnimalIns'>essai affiche animalin</Link>
         </li>
          <li>
            <Link to="/AnimalOutPost">Encoder un depart</Link>
          </li>
         <li>
         <Link to='/ShowAnimalOuts' >affiches les artichats out</Link>
         </li>
         <li>
            <Link to='/EquipementPost' >ajouter de l equipement</Link>
          </li>
          <li>
            <Link to="/ShowEquipements" > liste des equipements</Link>
          </li>
          <li>ne fonctionne pas</li>
          <li>
            <Link to='/addAdoptant'  >ajouter un adoptant</Link>
          </li>
          <li>
            <Link to='/ShowAdoptants'  >show adoptants</Link>
          </li>
          <li>
           <Link to='/addProduct'>essaiproduct</Link>
         </li>
          <li>
            <Link to='/showProducts' >essaishowproduct</Link>
          </li>

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