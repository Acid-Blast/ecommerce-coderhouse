import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import MyNavbar from './components/Navbar/Navbar';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      
      <header className="App-header">
        <ItemListContainer greeting="Destacados" />
      </header>
    </div>
  );
}


export default App;
