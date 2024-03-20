// Importações
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { postData } from '../helpers/request'

function NewProject() {

    // Esse hook vai permitir fazer redirects nas páginas - o usuário será redirecionado
    // handleSubmit={} - Vai depender do método
    const navigate = useNavigate()

    function createPost(project) {
        // Passando um projeto pro createPost e inserir um projeto no sistema
        // initialize cost and services
        project.cost = 0
        project.services = []


        postData("/projects", project).then((data) => {
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projects", { state });
        })
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar um novo projeto</h1>
            <p>Crie um projeto e gerencie seus serviços!</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}

export default NewProject