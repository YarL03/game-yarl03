import { FC } from 'react'
import { IToken } from '../../../utils/tokens'
import { StaticImageData } from 'next/image'
import { memo, Dispatch, SetStateAction } from 'react'

import styles from './Placeholder.module.scss'

type placeholderProps = {
    placeholder: IToken[],
    bgPlaceholder: StaticImageData,
    sprites: StaticImageData[],
    currentToken: IToken | null,
    setPlaceholder: Dispatch<SetStateAction<IToken[]>>,
    setTokens: Dispatch<SetStateAction<IToken[]>>,
    tokens: IToken[]
}

const Placeholder:FC<placeholderProps> = memo(({tokens, setTokens, setPlaceholder, currentToken, placeholder, bgPlaceholder, sprites}) => {
    
    const dropHandler = (e: React.DragEvent<HTMLDivElement>, token: IToken) => {
        e.preventDefault()
        console.log('drop2', e, token, 'current: ', currentToken)

        if (token.value == currentToken.value) {
            console.log(token.value, currentToken.value, currentToken)
            setPlaceholder(
                placeholder.map((item: IToken) => {
                    if (item.value == currentToken.value) {
                        return {...item, isEmpty: false}
                    }
                    else return item
                })
            )
            setTokens(
                tokens.map((item: IToken) => {
                    if (item.value == currentToken.value) {
                        return {...item, isEmpty: true}
                    }
                    else return item
                })
            )
        }
        
    }

    return (
        <div className={styles.placeholder}>
            <div style={{backgroundImage: `url(${bgPlaceholder.src})`}}>
                {placeholder.map((item: IToken, index: number) => (
                    <div
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnd={(e) => {
                            console.log('end2', e)
                        }}
                        onDrop={(e) => dropHandler(e, item)}
                        data-bg={!item.isEmpty} 
                        style={{backgroundImage: !item.isEmpty ? `url(${sprites[0].src})` : 'initial'}}
                        className={styles.token}
                        key={Date.now() + '__key__' + index}
                    >
                        {!item.isEmpty && <span>{item.value}</span>}
                    </div>
                ))}
            </div>
        </div>
    )
})

Placeholder.displayName = 'Placeholder'

export default Placeholder
