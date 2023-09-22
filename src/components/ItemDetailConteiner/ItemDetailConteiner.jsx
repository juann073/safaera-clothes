import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../../productos";



const ItemDetailConteiner = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((item) => item.id === parseInt(id)));
      }, 100);
    });
    getData.then((res) => setData(res));
  }, [id]);

  return <ItemDetail data={data} />;
};

export default ItemDetailConteiner;
