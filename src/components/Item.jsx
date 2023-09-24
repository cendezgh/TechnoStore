import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({object}) => (
    <Card key={object.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={object.imagen} />
      <Card.Body>
        <Card.Title>{object.nombre}</Card.Title>
        <Card.Text>Marca: <b>{object.marca}</b></Card.Text>
        <Card.Text>Stock: {object.stock}</Card.Text>
        <Card.Text>Precio: {object.precio}</Card.Text>
        <Link to={`/item/${object.id}`}>
          <Button variant="secondary" >Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
);

