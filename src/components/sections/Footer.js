import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href="https://www.instagram.com"><FaInstagram size={30}/></a></li>
                <li><a href="https://www.github.com"><FaGithub size={30}/></a></li>
                <li><a href="https://www.linkedin.com"><FaLinkedin size={30}/></a></li>
            </ul>
            <p>yujiamaro@gmail.com</p>
            <p>Alexandre Amaro © 2024</p>
        </div>
    )
}

export default Footer