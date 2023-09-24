import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id: category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const productosCollection = collection(db, "productos");

      let q;

      if (category) {
        q = query(productosCollection, where("categoryId", "==", category));
      } else {
        q = productosCollection;
      }

      try {
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setObjects(products);
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <div>Loading...</div>;

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


