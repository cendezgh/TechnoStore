import { Container, Table } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { Form, Button, Spinner } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

export const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { clear, items, removeItem } = useContext(CartContext);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setRedirect(true);
      }, 4000);
    }
  }, [items]);

  if (redirect) {
    return <Navigate to="/" />;
  }

  if (items.length === 0) {
    return (
      <Container>
        <h1>El carrito está vacio.</h1>
        <p style={{textAlign: "center"}}> Serás redireccionado al home en unos segundos...</p>
        <div className="divSpinner">
          <Spinner animation="border" variant="secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Container>
    );
  }
  const total = () =>
    items.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.precio,
      0
    );

  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const sendOrder = () => {
    if (!formValues.name || !formValues.phone || !formValues.email) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    };

    const order = {
      buyer: formValues,
      items,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setFormValues({
          name: "",
          phone: "",
          email: "",
        });
        clear();
        alert("Su order: " + id + " ha sido creada!");
      }
    });
  };
  return (
    <Container>
      <h1>Cart</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.marca}</td>
              <td>{item.precio}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total()}</td>
          </tr>
        </tfoot>
      </Table>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.name}
            type="text"
            name="name"
            placeholder="Nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.email}
            type="email"
            name="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.phone}
            type="text"
            name="phone"
            placeholder="000 000 0000"
          />
        </Form.Group>
        <Button variant="secondary" type="button" onClick={sendOrder}>
          Comprar
        </Button>
      </Form>
    </Container>
  );
};