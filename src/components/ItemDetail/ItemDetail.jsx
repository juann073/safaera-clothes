import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState} from "react";
import { useCartContext } from "../../CartContext";

export const ItemDetail = ({ data }) => {
  const [GotoCart, setGotoCart] = useState(false);
  const{addItem} = useCartContext()
  const onAdd = (quantity) => {
    setGotoCart(true)
    addItem(data,quantity);}
  return (
    <div className="container">
      <div className="detail">
        <img className="img-card" src={data.Image} alt={data.detail} />
        <div className="content">
          <h4>{data.name}</h4>
          <p>${data.price}</p>
          <p>{data.detail}</p>
          {GotoCart ? (
            <NavLink className="position-relative nav-link text-dark border border-success-subtle rounded"
            data-toggle="tab" to={'/cart'}>Terminar Compra</NavLink>
          ) : (
            <ItemCount inintial={1} stock={5} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
