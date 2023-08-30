import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import data from "../data/objects.json";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [objects, setObjects] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    promise.then((data) => {
      if (!id) {
        setObjects(data);
      } else {
        const objectsFiltered = data.filter((object) => object.category === id);
        setObjects(objectsFiltered);
      }
    });
  }, []);

  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <ItemList objects={objects} />
      </div>
    </Container>
  );
};
