import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import WspWidget from './components/WspWidget/WspWidget';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
         <MyNavbar />
         <WspWidget/>
         <Banner  titulo="Sublim-Art" subtitulo="¡Todo personalizado!"/>
         <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/item' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
         </Routes>
       <Footer />
     </BrowserRouter>
    </div>
  );
}
export default App;
