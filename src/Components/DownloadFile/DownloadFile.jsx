import styles from './DownloadFile.module.css'

function DownloadFile() {

    return(
        <>
            <div className={styles.header}>
                <h2>Download my resume</h2>
            </div>
            <div>
                <p className={styles.download}>Click <a href="/blaines_resume.pdf" download="blaines_resume.pdf">here</a> to download</p>
            </div>
        </>
    );
}
export default DownloadFile;