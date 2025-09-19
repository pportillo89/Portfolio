import"../styleSheets/Project.css"
import ReiseSchatz from "../image/logo.png"
import FinOMat from "../image/Finomat.png"
import project from "../image/project1.png"

import { useTranslation } from 'react-i18next';

function Project(){
    const { t } = useTranslation("translate");

    return(
        <section id="project">
            <h1>{t("project.title")}</h1>
            <div className="projectContainer">
                    <div className="projectCard">
                        <img
                        className="projectImage"
                        src={project}
                        alt="Proyecto"
                        />
                        <div className="projectDescription">
                            <h3>ReiseSchatz</h3>
                            <br></br>
                            {t("project.reiseSchatz")}
                            <br></br>
                            <img 
                            className="logo"
                            src={ReiseSchatz}
                            alt="ResieSchatz"/>
                            <br></br>
                            <a href="https://pportillo89.github.io/ReiseSchatz/index.html" target="_blank" rel="noreferrer" className="link">{t("project.site")}</a>
                        </div>
                    </div>
                    <div className="projectCard">
                        <img
                        className="projectImage"
                        src={project}
                        alt="Proyecto"
                        />
                        <div className="projectDescription">
                            <h3>FindOMat</h3>
                            <br></br>
                            {t("project.findOMat")}
                            <br></br>
                            <img 
                            className="logo"
                            src={FinOMat}
                            alt="FinOMat"/>
                            <br></br>
                            <a href="https://www.figma.com/proto/P9eFcHYdSLwRR372NBNtcB/Prototype-mit-Interactions?node-id=1-4&starting-point-node-id=1%3A4" target="_blank" rel="noreferrer" className="link">{t("project.site")}</a>
                        </div>
                    </div>
                    <div className="projectCard">
                        <img
                        className="projectImage"
                        src={project}
                        alt="Proyecto"
                        />
                        <div className="projectDescription">
                            <h3>{t("project.portfolioT")}</h3>
                            <br></br>
                            {t("project.portfolio")}
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Project;