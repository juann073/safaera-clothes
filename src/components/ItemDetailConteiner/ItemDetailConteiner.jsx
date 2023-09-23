import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "../../Service/FireBase/configFireBase";



const ItemDetailConteiner = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore()
    const queryDoc = doc(querydb, 'productos', id)
    getDoc(queryDoc)
    .then(res=> console.log(res, res.data()))
  },[])
  return <ItemDetail data={data} />;
};

export default ItemDetailConteiner;
