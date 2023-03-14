import './ItemListContainer.css'
import img from '../Navbar/assets/logo.png'

const ItemListContainer = (props) => {
    return (
        <div>
            <h2 className="saludo">{props.greeting}</h2>
            <img className='logo-saludo' src={img} alt='logo'/>
        </div>
    );
}


export default ItemListContainer;