import styles from './Header.module.css'

function Header(props) {
    return(
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>{props.header}</h1>
                <ul className={styles.navList}>
                    <li><a href='../../../index.html'>Home</a></li>
                    <li><a href='../../../aboutme.html'>About Me</a></li>
                    <li><a>Projects</a></li>
                    <li><a href='../../../resume.html'>My Resume</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <hr></hr>
            </header>
        </>
    );
}


export default Header;