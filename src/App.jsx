import './App.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <NavBar />  
            <Routes>
              <Route path="/" element={<ItemListConteiner/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
