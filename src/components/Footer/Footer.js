import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <section>
                <aside className='contacto'>
                    <h4>Contacto</h4>
                    <p>email@email.com.ar</p>
                    <p>+54 011-11223344</p>
                </aside>
                <aside className='redes'>
                    <h4>Redes</h4>
                    <ul>
                        <li>
                            <a href='https://www.instagram.com/sublim.art_/' target="_blank" rel="noreferrer">
                                <img src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-icon-download-icons-12.png' alt='link a instagram'/>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/sublimart2015' target="_blank" rel="noreferrer">
                                <img src='https://www.iconpacks.net/icons/2/free-icon-facebook-5213.png' alt='link a facebook'/>
                                Facebook
                            </a>
                        </li>
                    </ul>
                </aside>
            </section>
            <h6> &#169; Copyright 2023</h6>
            <a href="https://github.com/Acid-Blast" target="_blank" rel='noreferrer'>
                Todos los derechos reservados
            </a>
        </footer>
    )
}

export default Footer;