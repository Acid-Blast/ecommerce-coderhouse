import './Banner.css';

const Banner = (props) => {
    return (
        <div className='logo-container'>
            <div className='logo-banner'>
                <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/backend-prod-sublimart.appspot.com/o/logo.png?alt=media&token=8d281d3f-3244-4ab5-8c7d-8e905b4e9820" alt='logo'/>
                <h2 className="txt">{props.titulo}</h2>
                <h4>{props.subtitulo}</h4>
            </div>
        </div>
    )
}

export default Banner;