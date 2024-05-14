import styles from './Card.module.css'
import ButtonB from '../elements/ButtonB.js'

function Card({img, title, tech, description, repo, site}) {
    return (
        <div className={styles.card}>
            <a href={site}><img src={img}/></a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias: </strong>{tech}</p>
                <p><em>{description}</em></p>
                <ButtonB text="Acesse o repositório" link={repo}/>
            </section>
        </div>
    )
}

export default Card