import styles from './Container.module.css'

// Os elementos filhos (que estão encapsulados no container) vão ser colocados dentro da div
// {props} está direcionando o conteúdo que estiver dentro do container

function Container(props) {
    return(
// Essa classe não é de todos os containers, apenas os que utilizam props
// Utilizamos JavaScript para interpretar as classes dinamicas 
// Inserimos classes que venham da {props} 
// customClass - Classe que vem das propriedades
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container