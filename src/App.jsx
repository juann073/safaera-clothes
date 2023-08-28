import './App.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <NavBar />   
            <Routes>
              <Route path="/" element={<ItemListConteiner/>}/>
              <Route path="/category/:categoriaId" element={<ItemListConteiner/>}/>
              <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
