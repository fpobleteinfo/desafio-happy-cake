import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

const FormPage = () => {
  return (
    <Container className="pt-5">
      <h2 className="mb-4">Cuentanos, ¿Que torta tienes ganas de disfrutar hoy?</h2>
      <ContactForm />
    </Container>
  );
};
export default FormPage;