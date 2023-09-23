import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
const ItemListConteiner = () => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const dbCollection = collection(db, "productos");
    if (categoriaId) {
      const dbFilter = query(
        dbCollection,
        where("categoria", "==", categoriaId)
      );
      getDocs(dbFilter).then((res) =>
        setData(
          res.docs.map((productos) => ({
            id: productos.id,
            ...productos.data(),
          }))
        )
      );
    } else {
      getDocs(dbCollection).then((res) =>
        setData(
          res.docs.map((productos) => ({
            id: productos.id,
            ...productos.data(),
          }))
        )
      );
    }
  }, [categoriaId]);

  return (
    <div className="main">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListConteiner;
