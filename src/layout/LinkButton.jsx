// Componente de Layout que utilizei em outras páginas, componente estrutural
// Propriedade 'to' - Para onde vai aonde o usuario clicar
// Propriedade 'text' - Mudar o texto de onde vai ser utilizado
// {text} -  Vindo direto da props

// Importações
import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({ to, text }) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton