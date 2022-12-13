import { useGetContext } from "./useGetContext"

export const useReset = () => {
    const {setIsVictory, setItemsAmount, setMaxValue, setOrder} = useGetContext()

    return () => {
        setIsVictory(false)
        setItemsAmount(2)
        setMaxValue('A')
        setOrder('asc')
    }
}