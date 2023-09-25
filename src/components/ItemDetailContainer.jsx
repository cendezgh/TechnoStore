import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { Spinner } from "react-bootstrap";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [object, setObject] = useState(null);
  const [loading, setLoading] = useState(true);
 

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "productos", id );

    getDoc(refDoc).then((snapshot) => {
      setObject({ id: snapshot.id, ...snapshot.data() });
    })
    .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="divSpinner"><Spinner animation="border" variant="secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner></div>;

  return (
    <Container className="mt-4">
      <h1>Detalle del producto</h1>
      <ItemDetail object={object} />
    </Container>
  );
};
