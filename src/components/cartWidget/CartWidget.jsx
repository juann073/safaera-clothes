import { NavLink } from "react-router-dom";
import { useCartContext } from "../../CartContext";
const CartWidget = () => {
  const {totalProducts} = useCartContext()
  return (
    <NavLink className="position-relative nav-link text-light" to="/cart">
      Carrito <i className="fa-solid fa-cart-shopping"></i>{" "}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
       {totalProducts()} <span className="visually-hidden"></span>
      </span>
    </NavLink>
  );
};

export default CartWidget;
