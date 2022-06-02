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
            <Link to="/Page1">page1essai</Link>
          </li>
          <li>
            <Link to="/Page3">Page3</Link>
          </li>
          <li>
            <Link to="/Page4" >Page4</Link>
          </li>
          <li>
            <Link to="/AnimalInPost">ajouter un artichat</Link>
          </li>
          <li>
            <Link to="/AnimalOutPost">Encoder un depart</Link>
          </li>
         
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;