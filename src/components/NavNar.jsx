import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">TechnoStore</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/category/Televisor">Televisores</Nav.Link>
        <Nav.Link href="/category/Audifono">Audifonos</Nav.Link>
        <Nav.Link href="/category/Proyector">Proyectores</Nav.Link>
        <Nav.Link href="/category/Smartphone">Smartphones</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);
