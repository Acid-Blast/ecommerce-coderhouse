import './Footer.css';

const Footer = (props) => {
    return(
        <footer>
            <section>
                <aside className='contacto'>
                    <h4>Contacto</h4>
                    <p>Mail: sublimart@gmail.com.ar</p>
                    <p>Tel: +54 9 11 1122-3344</p>
                    <p>Buenos Aires, Lomas del Mirador</p>
                </aside>

                <aside className='redes'>
                    <h4>Redes</h4>
                    <ul>
                        <li>
                            <a href='https://www.instagram.com/sublim.art_/' target="_blank" rel="noreferrer">
                                <img src='https://firebasestorage.googleapis.com/v0/b/sublim-art.appspot.com/o/ig.png?alt=media&token=909daaba-fccf-4f07-8ebb-a646ec090c58' alt='link a instagram'/>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/sublimart2015' target="_blank" rel="noreferrer">
                                <img src='https://firebasestorage.googleapis.com/v0/b/sublim-art.appspot.com/o/fb.png?alt=media&token=6c8dd65c-d200-4cb8-ad94-d5fbfef41e41' alt='link a facebook'/>
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