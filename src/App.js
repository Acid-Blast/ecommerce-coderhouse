import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import MyNavbar from './components/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Layout = (props) => {
  return(
    <div>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      
      <header className="App-header">
        <ItemListContainer greeting="Bienvenido a mi Ecommerce" />

        <Layout title="Subtitulo">
          <p>Texto de ejemplo</p>
        </Layout>
      </header>
    </div>
  );
}

export default App;
