// Importações
import styles from './Message.module.css'
import {  useState, useEffect  } from 'react'
import { FaCheck} from 'react-icons/fa6'

function Message({type, msg}) {

    const [visible, setVisible] = useState(false)
    // Alterando a visibilidade da mensagem, dependendo de uma condição

    useEffect(() => {

        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
            {visible &&(
                <div className={`${styles.message} ${styles[type]}`}><FaCheck/> {msg}</div>
                // Classes dinâmicas, uma fixa e outra vêm das propriedades
            )}
        </>
    )
}

export default Message