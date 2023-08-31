import CartWidget from "../CartWidget/CartWidget"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
    <header className="App-header">
        <NavLink to="/"><h1>SafaeraClothes</h1></NavLink>
        <nav className="fs-5">
            <ul className="grid gap-5 row-gap-3 nav nav-pills">
            <li className="nav-item">
                <NavLink className="position-relative nav-link text-light" data-toggle="tab" to="/">Inicio <i className="fa-solid fa-house"></i></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="position-relative nav-link text-light"data-toggle="tab" to="/category/Ropa">Ropa <i className="fa-solid fa-shirt"></i></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="position-relative nav-link text-light"data-toggle="tab" to="/category/Calzado">Calzado <i className="fa-solid fa-shoe-prints"></i></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="position-relative nav-link text-light"data-toggle="tab" to="/category/Accesorio">Accesorios <i className="fa-solid fa-icons"></i></NavLink>
            </li>
            <li className="nav-item">
                <CartWidget/>
            </li>
            <li className="nav-item">
                <NavLink className="position-relative nav-link text-light"data-toggle="tab" to="/">Contacto <i className="fa-solid fa-phone"></i></NavLink>
            </li>
        </ul>
        </nav>
    </header>)}


export default NavBar;