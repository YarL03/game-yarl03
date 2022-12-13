import { ReactNode, FC, useState, useEffect } from "react"
import { GameContext, maxValue, order } from "../contexts/GameContext"


type contextProviderProps = {
    children: ReactNode
}

const ContextProvider:FC<contextProviderProps> = ({children}) => {
    const [itemsAmount, setItemsAmount] = useState(2)
    const [maxValue, setMaxValue ] = useState('A' as maxValue) 
    const [order, setOrder] = useState('asc' as order)
    const [isVictory, setIsVictory] = useState(false)
    

    return (
        <GameContext.Provider value={{
            itemsAmount,
            maxValue,
            order,
            isVictory,
            setIsVictory,
            setItemsAmount,
            setMaxValue,
            setOrder
        }}>
            {children}
        </GameContext.Provider>
    )

}

export default ContextProvider