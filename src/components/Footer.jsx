import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <footer>
            <section className="left">
                <FontAwesomeIcon icon={faRobot} size="2x" className="footerIcon"/>
                <h1>SnapSummaryAI</h1>
            </section>
            <section className="right">
                <center><h3>Contact Us:</h3></center>
                    <article className="socialIcon">
                        <a href="https://www.instagram.com/r_e_n_i_t_h/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} size="3x"/></a>
                        <a href="https://wa.me/916381785875" target="_blank"><FontAwesomeIcon icon={faWhatsapp} size="3x"/></a>
                        <a href="mailto:renithroshan1234@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="3x"/></a>
                    </article>
                    <h4>If you'r facing any bug or issue while using this site feel free to contact</h4>
            </section>
        </footer>
    );
}

export default Footer;