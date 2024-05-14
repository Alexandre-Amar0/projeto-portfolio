import styles from './Skills.module.css'
import javascriptlogo from '../../images/skills/javascript-logo.svg'
import htmllogo from '../../images/skills/html-logo.svg'
import csslogo from '../../images/skills/css-logo.svg'
import reactlogo from '../../images/skills/react-logo.svg'


function Skills() {
    return (
        <div id="Skills" className={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascriptlogo}/>
                <img src={htmllogo}/>
                <img src={csslogo}/>
                <img src={reactlogo}/>
            </div>
        </div>
    )
}

export default Skills