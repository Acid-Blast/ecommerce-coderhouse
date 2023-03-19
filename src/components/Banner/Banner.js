import './Banner.css';
import img from '../Navbar/assets/logo.png';


const Banner = (props) => {
    return (
        <div className='logo-container'>
            <div className='logo-banner'>
                <img className='logo' src={img} alt='logo'/>
                <h2 className="txt">{props.titulo}</h2>
                <h4>{props.subtitulo}</h4>
            </div>
        </div>
    )
}

export default Banner;