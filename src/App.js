import './App.css';
import ItemListConteiner from './components/itemListConteiner/ItemListConteiner';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SafaeraClothes</h1>
        <NavBar />
        <ItemListConteiner greeting="Aprendiendo Props"/>
      </header>
    </div>
  );
}

export default App;
