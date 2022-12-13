import { FC, SyntheticEvent } from "react"
import styles from './Button.module.scss'
import cn from 'classnames'

type buttonProps = {
    text: string,
    addStyle?: 'play',
    [key: string]: any
}

const Button:FC<buttonProps> = ({text, addStyle = '', onClick = undefined, ...props}) => {
    return (
        <button {...props} onClick={onClick} className={cn(styles.button, {
            [styles.play]: !!addStyle,
        })}>
            {text}
        </button>
    )
}

export default Button