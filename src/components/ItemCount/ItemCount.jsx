import { useState } from "react";

const ItemCount = ({ inintial, stock, onAdd }) => {
  const [Count, setCount] = useState(inintial);

  const restar = () => {
    setCount(Count - 1);
  };
  const sumar = () => {
    setCount(Count + 1);
  };
  return (
    <div className="Counter">
      <button disabled={Count <= 1} onClick={restar}>
        -
      </button>
      <span>{Count}</span>
      <button disabled={Count >= stock} onClick={sumar}>
        +
      </button>
      <button disabled={stock <= 0} onClick={() => onAdd(Count)}>
        Añadir al carro
      </button>
    </div>
  );
};

export default ItemCount;
