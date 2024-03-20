// Importações
import styles from './Home.module.css'
import imageHome from '../img/imageHome.svg'
import LinkButton from '../layout/LinkButton'
// LinkButton - Aqui estamos utilizando a props para determinar 
// aonde o usuario será redirecionado e qual texto aparecerá no botão


function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo(a) ao <span>Duots</span></h1>
            <p>A melhor ferramenta para gerenciar os seus projetos, a qualquer momento!</p>
            <LinkButton to="/newproject" text="Comece agora!"/>
            <img src={imageHome} alt="Imagem de uma pessoa gerenciando seus projetos" />
        </section>
    )
}

export default Home