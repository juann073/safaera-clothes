import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NuevoArray from "../../productos";

const ItemDetailConteiner = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(NuevoArray.find((item) => item.id === parseInt(id)));
      }, 1000);
    });
    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailConteiner;
