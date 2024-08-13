import styles from './Header.module.css'

function Header() {
    return(
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>Welcome</h1>
                <ul className={styles.navList}>
                    <li><a>Home</a></li>
                    <li><a>About Me</a></li>
                    <li><a>Projects</a></li>
                    <li><a>My Resume</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <hr></hr>
            </header>
        </>
    );
}


export default Header;