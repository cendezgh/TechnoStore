import Card from "react-bootstrap/Card";

export const ItemDetail = ({ object }) => (

    <Card key={object.id} style={{ width: "500px"}}>
    <Card.Img variant="top" src={object.imagen} />
    <Card.Body style={{display: "flex", flexDirection: "column", alignContent: "center"}}>
      <Card.Title>
        {object.category} {object.marca}
      </Card.Title>
      <Card.Text>{object.description}</Card.Text>
      <Card.Text>STOCK: {object.stock} Unidades</Card.Text>
      <Card.Text style={{ fontSize: "35px", margin: "auto"}}>USD {object.precio}</Card.Text>
    </Card.Body>
  </Card>
);
