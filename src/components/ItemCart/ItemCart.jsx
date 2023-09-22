import { useCartContext } from "../../CartContext";
import { NavLink } from "react-router-dom";
import NuevoArray from "../../productos";

const ItemCart = ({product}) =>{
    const{removeItem} = useCartContext()
    return(
        <div className="ItemCart">
            <p>Producto: {product.name}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>SubTotal: {product.quantity * product.price}</p>
            <button className="botonEliminar" onClick={() =>removeItem(product.id)}> <i class="fa-solid fa-trash fa-xl"></i> </button>
        </div>
        )
   
}

export default ItemCart