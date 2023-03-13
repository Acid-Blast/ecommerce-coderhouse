import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import MyNavbar from './components/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav>
        <MyNavbar />
      </nav>

      <header className="App-header">
        <ItemListContainer greeting="Bienvenido a mi Ecommerce" />
      </header>
    </div>
  );
}

export default App;
