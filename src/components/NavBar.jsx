import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const db = getFirestore();
      const categoriesCollection = collection(db, "productos");
      const categoriesSnapshot = await getDocs(categoriesCollection);

      const categoriesArray = categoriesSnapshot.docs.map(doc => doc.data().categoryId);
      const uniqueCategories = Array.from(new Set(categoriesArray));

      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">TechnoStore</Navbar.Brand>
        <Nav className="me-auto">
          {categories.map(category => (<Nav.Link as={NavLink} key={category} to={`/category/${category}`}>{category}</Nav.Link>))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
