import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation() {
    return (
        <div id="Presentation" className={styles.presentation}>
            <h4>Bem-vindo ao meu portfólio!</h4>
            <h1>Olá, eu sou Alexandre Amaro</h1>
            <p id="textPresentation">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Phasellus finibus volutpat auctor. Etiam nec sollicitudin diam.<br/>
                Integer faucibus arcu ut tristique euismod. Etiam volutpat,<br/>
                quam nec aliquet tristique, orci nisi feugiat enim, nec auctor<br/>
                leo dui vitae sem. Cras ac nibh dignissim, placerat ipsum at,<br/>
                convallis enim.
            </p>
            <ButtonA link="https://www.github.com" text="Conecte-se comigo!"/>
        </div>
    )
}

export default Presentation