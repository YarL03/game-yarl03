import Placeholder from "./Placeholder/Placeholder"
import Tokens from "./Tokens/Tokens"

import Layout from "../Layout/Layout"

import { assets } from "../../utils/assets"
import { getRandomInt } from "../../utils/getRandom"
import { useEffect, useState, FC, Dispatch, SetStateAction } from "react"
import { IToken } from "../../utils/tokens"

import { useGetContext } from "../../hooks/useGetContext"
import { useRouter } from "next/router"

import Confetti from "react-confetti"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import useSound from 'use-sound'

import Button from "../../ui/Button/Button"

import victory_bg from '../../images/victory.jpg'

import { useReset } from "../../hooks/useReset"

import styles from './GameContainer.module.scss'

const MySwal = withReactContent(Swal)

type gameContainerProps = {
    tokens: IToken[],
    placeholder: IToken[]
    setPlaceholder: Dispatch<SetStateAction<IToken[]>>
    setTokens: Dispatch<SetStateAction<IToken[]>>
}

const GameContainer:FC<gameContainerProps> = ({tokens, placeholder, setPlaceholder, setTokens}) => {
    const [asset, setAsset] = useState(assets[0])
    const [currentToken, setCurrentToken] = useState(null as null | IToken)
    const {isVictory, setIsVictory} = useGetContext()
    
    const router = useRouter()
    const reset = useReset()

    const [play, {stop}] = useSound('/winner.mp3',
    {volume: 0.1})

    useEffect(() => {
        return () => {isVictory && reset()}
    }, [isVictory])

    if (!isVictory && tokens.length && tokens.every((item: IToken) => item.isEmpty === true)) {
        setIsVictory(true)
    }

    if (isVictory) {
        play()
        MySwal.fire({
            html: (
                <div className={styles.victory}>
                    <span>Молодец! Ты успешно справился с заданием!</span>
                    <div>
                    <Button 
                        onClick={() => {
                        MySwal.clickConfirm()
                        }}
                        addStyle="play"
                        text="Заново"
                        />
                        </div>
                </div>
            ),
            showConfirmButton: false,
            width: '839px',
            background: `url(${victory_bg.src}) no-repeat`,
            didClose: () => {
                stop()
                router.push('/')
            }
        })
    }

    useEffect(() => {
        setAsset(assets[getRandomInt(0, assets.length-1)])
    }, [])

    return (
        <>
        {isVictory && <Confetti/>}
        <Layout bgImage={asset.bgImage}>  
            <div data-victory={isVictory} className={styles.container}>

                <Tokens setCurrentToken={setCurrentToken} sprites={asset.sprites} tokens={tokens}/>
                <Placeholder
                    currentToken={currentToken}
                    sprites={asset.sprites}
                    bgPlaceholder={asset.placeholder}
                    placeholder={placeholder}
                    setTokens={setTokens}
                    setPlaceholder={setPlaceholder}
                    tokens={tokens}
                    />
                    
            </div>
        </Layout>
        </>
        
    )
}

export default GameContainer