import "../styleSheets/Contact.css"
import { useTranslation } from 'react-i18next';

function Contact(){
    const { t } = useTranslation("translate");
    return(
        <section id="contact">
            <h1>{t("contact.title")}</h1>
            <div className="contactContainer">
                <strong>{t("contact.description")}</strong>
                <br></br>
                <div className="contactDetails">
                    <div>
                        {t("contact.email")} <a className="emailLink"
                        href="mailto:paolaportillo02@gmail.com">paolaportillo02@gmail.com</a>
                    </div>
                    <a href="https://www.linkedin.com/in/paola-portillo-martell-0130804a/" target="_blank" rel="noreferrer">
                         <img className="imageLinkedin"
                         src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original-wordmark.svg" 
                         alt="Linkedin"/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;