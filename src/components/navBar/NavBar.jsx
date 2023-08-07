import CartWidget from "../cartWidget/CartWidget"

const NavBar = () => {
    return (
        <ul className="grid gap-5 row-gap-3 nav">
            <li className="nav-item">
                <a className="btn btn-primary position-relative" data-toggle="tab" href="#">Home</a>
            </li>
            <li className="nav-item">
                <CartWidget/>
            </li>
            <li className="nav-item">
                <a className="btn btn-primary position-relative"data-toggle="tab" href="#">Contacto</a>
            </li>
        </ul>
    )
}

export default NavBar