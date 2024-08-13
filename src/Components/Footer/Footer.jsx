import styles from './Footer.module.css'

function Footer() {
    return(
        <>
            <footer>
                <hr></hr>
                <ul className={styles.navlist}>
                    <li><a>Home</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Privacy</a></li>
                </ul>
                <p>&copy; Blaine Pavlock</p>
            </footer>
        </>
    );
}

export default Footer