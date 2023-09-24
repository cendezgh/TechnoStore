import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import data from "../data/objects.json";
import { NavLink } from "react-router-dom";

const categoriesArray = data.map(item => item.category);
const uniqueCategories = new Set(categoriesArray); 

export const NavBar = () => (
  <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand as={Link} to="#home">TechnoStore</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {[...uniqueCategories].map(category => (<Nav.Link as={NavLink} key={category} to={`/category/${category}`}>{category}</Nav.Link>))}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);
