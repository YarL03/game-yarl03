import { FC, useEffect, useState } from "react"
import GameContainer from "../components/game/GameContainer"
import { useGetContext } from "../hooks/useGetContext"
import { getSortedTokens, getUnsortedTokens, IToken } from "../utils/tokens"



const Game:FC = () => {
    const {itemsAmount, maxValue, order} = useGetContext()

    const [tokens, setTokens] = useState([] as IToken[])
    const [placeholder, setPlaceholder] = useState([] as IToken[])

    useEffect(() => {
        const {primaryTokens , innerMaxValue} = getUnsortedTokens(itemsAmount, maxValue)

        setTokens(primaryTokens)
        setPlaceholder(getSortedTokens(primaryTokens, order, innerMaxValue))
    }, [])

    console.log(placeholder, tokens)
    return (
        <GameContainer
            setTokens={setTokens}
            setPlaceholder={setPlaceholder}
            tokens={tokens}
            placeholder={placeholder}/>
    )
  }
  
  export default Game