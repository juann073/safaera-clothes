import { useCartContext } from "../../CartContext";
import { NavLink } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
const Cart = () =>{
const{Cart, totalPrice} = useCartContext()

const order = {
buyer: {name:'pablo', email:'jdjdjjdjdjd@gmail.com', phone:'111111111111111', address:'afdsgfsf'},
    items : Cart.map(productos => ({id: productos.name, price: productos.price, quantity:productos.quantity})),
    total: totalPrice()}



if (Cart.length === 0) {
    return (
        <div className="notItemCart">
            <h1 className="opacity-50">No hay Productos en carrito </h1>
            <NavLink className="position-relative nav-link text-danger border border-danger rounded p-2 w-25"
              data-toggle="tab" to={"/"}>Mostrar Productos</NavLink>
        </div>
        )
}
    return(
        <> 
        { 
        Cart.map(product=> <ItemCart key={product.id} product={product}/>)
        
        }
        <h2>
            Total: {totalPrice()}
        </h2>
        
        </>
      )
}

export default Cart