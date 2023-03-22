import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import WspWidget from './components/WspWidget/WspWidget';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <WspWidget/>
      
      <header className="App-header">
        <Banner  titulo="Sublim-Art" subtitulo="¡Todo personalizado!"/>
        <ItemListContainer />
      </header>

      <main>
        <Banner titulo="Preventa" subtitulo="¡No te lo pierdas!"/>
        <ItemDetailContainer />
      </main>

      <Footer />
    </div>
  );
}
export default App;
