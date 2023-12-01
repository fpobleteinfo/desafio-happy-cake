import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container className="justify-content-start">
        <Link to="/" className="text-white ms-3 text-decoration-none">
         🏠 Home
        </Link>

        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
         ☎️ Contacto
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            Happy Cake  🍰</Navbar.Brand>
        </Navbar.Collapse>        
      </Container>
    </Navbar>
  );
};
export default Navigation;