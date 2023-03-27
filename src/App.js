import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNavbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import WspWidget from './components/WspWidget/WspWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
         </Routes>
         
       <Footer />
     </BrowserRouter>
    </div>
  );
}
export default App;
