import CartWidget from "../cartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="fs-5">
            <ul className="grid gap-5 row-gap-3 nav nav-pills">
            <li className="nav-item">
                <a className="position-relative nav-link active" data-toggle="tab" href="#">Home <i class="fa-solid fa-house"></i></a>
            </li>
            <li className="nav-item">
                <a className="position-relative nav-link "data-toggle="tab" href="#">Productos <i class="fa-solid fa-shirt"></i></a>
            </li>
            <li className="nav-item">
                <CartWidget/>
            </li>
            <li className="nav-item">
                <a className="position-relative nav-link "data-toggle="tab" href="#">Contacto <i class="fa-solid fa-phone"></i></a>
            </li>
        </ul>
        </nav>)
}

export default NavBar