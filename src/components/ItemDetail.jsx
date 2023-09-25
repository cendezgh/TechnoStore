import { Card, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ object }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (count) => addItem(object, count);
  return (
    <Card className="p-5" key={object.id}>
      <Row noGutters>
        <Col sm={4}>
          <Card.Title style={{ textAlign: 'center' }}>
            <h2>{object.nombre}</h2>
          </Card.Title>
          <Card.Img variant="top" src={object.imagen} />
        </Col>
        <Col sm={8}>
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >
            <Card.Text>
              <h3>{object.marca}</h3>
            </Card.Text>
            <Card.Text>{object.descripcion}</Card.Text>
            <Card.Text>STOCK: {object.stock} Unidades</Card.Text>
            <Card.Text style={{ fontSize: "35px"}}>USD {object.precio}</Card.Text>           
            <ItemCount onAdd={onAdd} stock={object.stock} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
