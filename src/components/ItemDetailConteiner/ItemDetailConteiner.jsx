import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailConteiner = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "productos", id);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [id]);
  return <ItemDetail data={data} />;
};

export default ItemDetailConteiner;
