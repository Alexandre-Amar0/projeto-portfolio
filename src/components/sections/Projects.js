import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB.js'
import Card from '../elements/Card.js'
import project1 from '../../images/projects/project-1.svg'
import project2 from '../../images/projects/project-2.svg'

function Projects() {
    return(
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Card 
                img={project1}
                title="Projeto 1"
                tech="HTML, CSS, JavaScript e React"
                description="Projeto de Landing Page"
                site="https://www.github.com"
                repo="https://www.github.com"
            />
            <Card 
                img={project2}
                title="Projeto 2"
                tech="HTML, CSS, JavaScript e React"
                description="Projeto de Portfolio"
                site="https://www.github.com"
                repo="https://www.github.com"
            />
            <ButtonB link="https://www.github.com" text="Ver repositório completo"/>
        </div>
    )
}

export default Projects