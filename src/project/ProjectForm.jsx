// Option - Caixa de seleção
// disabled - Desabilita a caixa de seleção

// Importações
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import { useEffect, useState } from 'react'
import { requestData } from '../helpers/request'

// projectData - Dados do projeto => envio de projeto pra edição => passa pela página pai

function ProjectForm({ handleSubmit, btnText, projectData }) {
    // Inicializando o valores deles como vazio - array vazio
    const [categories, setCategories] = useState([])
    // Recebo o projectData do componente pai
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        requestData("/categories").then(data => {
            setCategories(data)
        })

    }, [])

    const submit = (e) => {
        e.preventDefault()
        // console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        // Pegar todo o dado do project, um state, e.target.name que é o nome do input
        // Independende do input preenchido 
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        // Pegar todo o dado do project, um state, e.target.name que é o nome do input
        // Independende do input preenchido 
        setProject({
            ...project, category: {
                id: e.target.value,
                // [e.target.selectedIndex] - No evento de Select, acessar qual a opção selecionada pelo usuário
                name: e.target.options[e.target.selectedIndex].text,
            }
        })

    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento do projeto"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm