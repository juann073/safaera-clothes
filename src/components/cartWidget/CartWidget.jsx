import { NavLink } from "react-router-dom"

const CartWidget = () => {
    return (
        <NavLink className="position-relative nav-link text-light">
            Carrito <i className="fa-solid fa-cart-shopping"></i> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">0 <span className="visually-hidden"></span></span>
        </NavLink>)
      
    }

export default CartWidget