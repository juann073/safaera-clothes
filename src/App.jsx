import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import CartProvider from "./CartContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider/>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route
            path="/category/:categoriaId"
            element={<ItemListConteiner />}
          />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="/contacto" element={<contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
