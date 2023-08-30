import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import data from "../data/objects.json";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [object, setObject] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const objectById = data.find((object) => object.id === id);
        resolve(objectById);
      }, 2000);
    });
    promise.then((data) => setObject(data));
  }, []);
 
  if (!object) return <div>loading...</div>;

  return (
    <Container className="mt-4">
      <h1>Detalle</h1>
      <ItemDetail object={object} />
    </Container>
  );
};
