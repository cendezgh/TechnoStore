import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ object }) => {
  const {addItem} = useContext(CartContext);
  const onAdd = (count) => addItem(object, count);
  return (
    <Card key={object.id} style={{ width: "500px"}}>
    <Card.Img variant="top" src={object.imagen} />
    <Card.Body style={{display: "flex", flexDirection: "column", alignContent: "center"}}>
      <Card.Title><h2>{object.nombre}</h2></Card.Title>
      <Card.Text><h3>{object.marca}</h3></Card.Text>
      <Card.Text>{object.descripcion}</Card.Text>
      <Card.Text>STOCK: {object.stock} Unidades</Card.Text>
      <Card.Text style={{ fontSize: "35px", margin: "auto"}}>USD {object.precio}</Card.Text>
      <ItemCount onAdd={onAdd} stock={object.stock} />
    </Card.Body>
  </Card>
)};  
