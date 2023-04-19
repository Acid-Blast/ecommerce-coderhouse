import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MyNavbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import WspWidget from './components/WspWidget/WspWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import { CartProvider } from './context/CartContext';


const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
        <ScrollToTop />
        <CartProvider>
          <MyNavbar />
          <WspWidget/>
          <Banner  titulo="Sublim-Art" subtitulo="¡Todo personalizado!"/>

          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<h1>Checkout</h1>}/>
          </Routes>

        </CartProvider>
         
        <Footer version={'v0.1.2'}/>
     </BrowserRouter>
    </div>
  );
}
export default App;
