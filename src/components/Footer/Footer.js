import './Footer.css';

const Footer = (props) => {
    return(
        <footer>
            <section>
                <aside className='contacto'>
                    <h4>Contacto</h4>
                    <p>sublimart@gmail.com.ar</p>
                    <p>Tel: +54 9 11 1122-3344</p>
                    <p>Buenos Aires, Lomas del Mirador</p>
                </aside>

                <aside className='redes'>
                    <h4>Redes</h4>
                    <ul>
                        <li>
                            <a href='https://www.instagram.com/sublim.art_/' target="_blank" rel="noreferrer">
                                <img src='https://i.pinimg.com/originals/25/b8/17/25b817e94a86009fa7f32810911c0fa6.png' alt='link a instagram'/>
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
            <h6>&#169; Copyright 2023 | {props.version}</h6>
            <a href="https://github.com/Acid-Blast/ecommerce-coderhouse" target="_blank" rel='noreferrer'>
                by Marce Falasca
            </a>
        </footer>
    )
}

export default Footer;