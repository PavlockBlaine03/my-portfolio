import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx";
import DownloadFile from "./Components/DownloadFile/DownloadFile.jsx";

function ResumeApp() {

  return (
    <>
      <Header header='Resume'/>
        <DownloadFile/>
      <Footer/>
    </>
  );
}

export default ResumeApp