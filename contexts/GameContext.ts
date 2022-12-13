import { createContext } from "react";

export type order = 'asc' | 'desc'

export type maxValue = 'A' | number

export const GameContext = createContext({
    itemsAmount: 2,
    maxValue: 'A' as maxValue, // random
    order: 'asc' as order,
    isVictory: false,
    setIsVictory: (victory: boolean) => {},
    setItemsAmount: (amount: number) => {},
    setMaxValue: (maxValue: maxValue) => {},
    setOrder: (order: order) => {}
})