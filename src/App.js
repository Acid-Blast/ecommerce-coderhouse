import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import WspWidget from './components/WspWidget/WspWidget';
import Footer from './components/Footer/Footer'

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
