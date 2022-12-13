import { IToken } from '../../../utils/tokens'
import { Dispatch, FC, SetStateAction, memo } from 'react'
import { StaticImageData } from 'next/image'

import styles from './Tokens.module.scss'

type tokensProps = {
    tokens: IToken[]
    sprites: StaticImageData[],
    setCurrentToken: Dispatch<SetStateAction<null | IToken>>
}

const Tokens:FC<tokensProps> = memo(({tokens, sprites, setCurrentToken}) => {

    const dropHandler = (e: DragEvent<HTMLDivElement>, token: IToken) => {
        e.preventDefault()
        console.log('drop', e, token)
    }

    const dragEnd = (e: DragEvent<HTMLDivElement>, token: IToken) => {
        console.log('end', e, token)
    }

    const dragStart = (e: DragEvent<HTMLDivElement>, token: IToken) => {
        console.log('start', e, token)
        setCurrentToken(token)
}

    return (
        <div className={styles.tokens}>
            {tokens.map((item: IToken, index: number) => (
                <div
                    draggable={!item.isEmpty}
                    onDragStart={(e) => {
                        dragStart(e, item)
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnd={(e) => dragEnd(e, item)}
                    onDrop={(e) => dropHandler(e, item)}
                    style={{
                        backgroundImage: `url(${sprites[index >= sprites.length ? sprites.length - 1 : index].src})`,
                    }}
                    key={Date.now() + '__key__' + index}
                    className={styles.token}
                >
                    <span>{item.value}</span>
                </div>
                    )
                )
            }
        </div>
    )
})

export default Tokens