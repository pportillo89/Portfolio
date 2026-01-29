import "../styleSheets/Skills.css"
import { useTranslation } from 'react-i18next';
          

function Skills(){
    const { t } = useTranslation("translate");

    return(
        <section id="skills">
            <div className="skillsContainer">
                <h1>{t("skills.title")}</h1>
                <div className="languageContainer">
                    <h3>{t("skills.programm")}</h3>
                    <div className="skillRow">
                        <img 
                        className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" 
                        alt="HTML5"/>

                        <img 
                        className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" 
                        alt="CSS3"/>

                        <img 
                        className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" 
                        alt="react"/>

                        <img 
                        className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                        alt="JavaScript"/>


                        <img
                        className="imageProgramm" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" 
                        alt="Java"/>

                    </div>
                    <br></br>
                    <h3>{t("skills.db")}</h3>
                    <div className="skillRow">
                        <img 
                        className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" 
                        alt="mySQL"/>


                        <img 
                        className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" 
                        alt="Oracle"/>

                        <img 
                        className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" 
                        alt="Postgres"/>
                    </div>
                    <br></br>
                    <h3>{t("skills.design")}</h3>
                    <div className="skillRow">
                        
                        <img className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                        alt="Figma" />


                        <img className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dreamweaver/dreamweaver-original.svg"
                        alt="Dreamweaver" />

                        <img className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" 
                        alt="Photoshop"/>

                        <img className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" 
                        alt="Canva"/>
          
                    </div>
                    
                    <br></br>
                    <h3>{t("skills.project")}</h3>
                    <div className="skillRow">
                        <img className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" 
                        alt="Jira"/>
                    

                        <img className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original-wordmark.svg"
                        alt="Confluence" />
                    </div>
                    <br></br>
                    <h3>{t("skills.so")}</h3>
                    <div className="skillRow">
                        <img className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                        alt="GitHub" />
                        
                        <img className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg" 
                        alt="Linux"/>
          
                        <img className="imageProgramm"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
                        alt="VisualStudio" />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;