import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
    <header className="App-header">
        <h1>SafaeraClothes</h1>
        <nav className="fs-5">
            <ul className="grid gap-5 row-gap-3 nav nav-pills">
            <li className="nav-item">
                <a className="position-relative nav-link text-light" data-toggle="tab" href="#">Home <i className="fa-solid fa-house"></i></a>
            </li>
            <li className="nav-item">
                <a className="position-relative nav-link text-light"data-toggle="tab" href="#">Products <i className="fa-solid fa-shirt"></i></a>
            </li>
            <li className="nav-item">
                <CartWidget/>
            </li>
            <li className="nav-item">
                <a className="position-relative nav-link text-light"data-toggle="tab" href="#">Contact <i className="fa-solid fa-phone"></i></a>
            </li>
        </ul>
        </nav>
    </header>)
}

export default NavBar