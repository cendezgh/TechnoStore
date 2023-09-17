import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand as={Link} to="#home">TechnoStore</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/category/Televisor">Televisores</Nav.Link>
        <Nav.Link as={Link} to="/category/Audifono">Audifonos</Nav.Link>
        <Nav.Link as={Link} to="/category/Proyector">Proyectores</Nav.Link>
        <Nav.Link as={Link} to="/category/Smartphone">Smartphones</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);
