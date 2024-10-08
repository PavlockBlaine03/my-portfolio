import styles from './Home.module.css'
import twlimage from '../../assets/images/thomaswaslate.png'
import tbbimage from '../../assets/images/TheBlackBook.png'

function Home() {
    return(
        <>
            <div className={styles.main}>
                <div className={styles.main}>
                    <h2 className={styles.head}>Brief Summary</h2>
                    <h3>Who am I?</h3>
                    <div className={styles.textcard}>
                        <p>My name is Blaine Pavlock and 
                            I am currently a student at Sam Houston State Univerity
                            with a graduation date of May 2027 with a Bachelors degree
                            in Computer Science.</p>
                    </div>
                    <h3>What I do</h3>
                    <div className={styles.textcard}>
                        <p>Fill in here</p>
                    </div>
                    <h3>Experience and Background</h3>
                    <div className={styles.textcard}>
                        <p>Fill in here</p>
                    </div>
                </div>
                <hr></hr>
                <div className={styles.exampleProjs}>
                    <h2 className={styles.head}>Projects</h2>
                    <img className={styles.twlimage} src={twlimage} alt='thomas was late'></img>
                    <div className={styles.textcard}>
                        <p>fill in here</p>
                    </div>
                    <img className={styles.twlimage} src={tbbimage} alt='thomas was late'></img>
                    <div className={styles.textcard}>
                        <p>fill in here</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home