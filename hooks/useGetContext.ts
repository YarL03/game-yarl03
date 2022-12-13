import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"

export const useGetContext = () => {
    return useContext(GameContext)
}