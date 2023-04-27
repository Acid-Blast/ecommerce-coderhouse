import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MyNavbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import WspWidget from './components/WspWidget/WspWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';
import OrderDetails from './components/OrderDetails/OrderDetails';


const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
        <ScrollToTop />
        <CartProvider>
          <MyNavbar />
          <Banner  titulo="Sublim-Art" subtitulo="¡Todo personalizado!"/>
          <WspWidget/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/order/:orderId' element={<OrderDetails />}/>
          </Routes>
        </CartProvider>
        <Footer version={'v1.3.2'}/>
     </BrowserRouter>
    </div>
  );
}
export default App;
