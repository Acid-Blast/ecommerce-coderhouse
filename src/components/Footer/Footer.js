import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <section>
                <aside className='contacto'>
                    <h4>Contacto</h4>
                    <p>Texto de prueba</p>
                    <p>Texto de prueba</p>
                    <p>Texto de prueba</p>
                </aside>
                <aside className='redes'>
                    <h4>Redes</h4>
                    <ul>
                        <li><a href='#' target={"_blank"}><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/>Instagram</a></li>
                        <li><a href='#' target={"_blank"}><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/>Facebook</a></li>
                    </ul>
                </aside>
            </section>
            
        </footer>
    )
}

export default Footer;