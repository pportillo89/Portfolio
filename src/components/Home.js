import "../styleSheets/Home.css"
import photoHome from "../image/paolaHome.jpg"
import { useTranslation } from 'react-i18next';

function Home(){
const { t } = useTranslation("translate");
return(
    <section id="home">
        <div className="homeContainer">
            <div className="left">
                <img 
                className="imageHome"
                src={photoHome}
                alt="Home"/>
            </div>
            <div className="right">
                <h1 className="name">{t("home.title")}</h1>
                <p>{t("home.subtitle")}</p>
                <br>
                </br>
                <p className="description">{t("home.description")}</p>
                <p className="description">{t("home.phrase")}</p>
                <br></br>
                <a href="#project" className="btnPortafolio">{t("home.portfolio")}</a>
            </div>
        </div>
    </section>
);
}

export default Home;