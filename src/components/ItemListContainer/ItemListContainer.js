import img from '../Navbar/assets/logo.png'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div>
            <h2 className="saludo">{props.greeting}</h2>
            <img className='logo-saludo' src={img} alt='logo'/>
        </div>
    );
}


export default ItemListContainer;