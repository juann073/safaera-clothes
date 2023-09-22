import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import productos from "../../productos";

const ItemListConteiner = () => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(
          res.filter((productos) => productos.categoria === categoriaId)
        )
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return (
    <div className="main">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListConteiner;
