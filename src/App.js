import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import MyNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import WspWidget from './components/WspWidget/WspWidget';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <WspWidget/>
      <header className="App-header">
        <ItemListContainer greeting="Sublim-Art" />
      </header>

      <Footer />
    </div>
  );
}


export default App;
