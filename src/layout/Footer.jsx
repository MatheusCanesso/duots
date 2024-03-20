import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social_list_li}><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className={styles.copy_right}><span>Duots</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer