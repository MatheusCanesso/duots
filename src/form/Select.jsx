// Importações
import styles from './Select.module.css'

// option - Opções da caixa de seleção
// map - método do javascript

function Select({text, name, options, handleOnChange, value}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    // Interpolação de valores
                    <option value={option.id} key={option.id}>{option.category}</option>
                ))}
            </select>
        </div>
    )
}

export default Select