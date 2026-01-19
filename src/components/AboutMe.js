 
import "../styleSheets/AboutMe.css"
import cvIcon from "../image/cv.png"
import { useTranslation } from 'react-i18next';


 function AboutMe(){
    const { t, i18n } = useTranslation("translate");
    const idioma = i18n.language;

    let cvFile;
    let cvName;

    if (idioma === 'es') {
    cvFile = "/Portfolio/PaolaPortillo_es.pdf";
    cvName = "PaolaPortillo_es.pdf";
    } else if (idioma === 'en') {
    cvFile = "/Portfolio//PaolaPortillo_en.pdf";
    cvName = "PaolaPortillo_en.pdf";
    } else if (idioma === 'de') {
    cvFile = "/Portfolio//PaolaPortillo_de.pdf";
    cvName = "PaolaPortillo_de.pdf";
    } else {
    // Por defecto español
    cvFile = "/PaolaPortillo_en.pdf";
    cvName = "PaolaPortillo_en.pdf";
    }

    return(
        <section id="about">
            <div className="aboutContainer">
                <div className="textContainer">
                    <h1>{t("about.title")}</h1>
                    <p>
                        {t("about.p1")}
                    </p>
                    <br></br>
                    <p>
                        {t("about.p2")}
                    </p>
                    <br></br>
                    <a  href={cvFile} download={cvName} className="buttonDownload">{t("about.cv")}
                        <img
                        className="imgCV"
                        src={cvIcon}
                        alt="Descargar Curriculum Vitae"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
export default AboutMe;