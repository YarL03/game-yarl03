import { maxValues } from "../constants/maxValue"
import { maxValue, order } from "../contexts/GameContext"
import { getRandomInt } from "./getRandom"


export interface IToken {
    value: number
    isEmpty?: boolean
}

export const getUnsortedTokens = (itemsAmount: number, maxValue: maxValue) => {
    const primaryArr: IToken[] = []

    if (maxValue === 'A') {
        const defaultMaxValue = maxValues[getRandomInt(0, maxValues.length - 1)]
        
        for (let i = 0; i < itemsAmount; i++) {
            primaryArr.push({
                value: getRandomInt(i + 1, defaultMaxValue),
                isEmpty: false
            })
        }

        return {primaryTokens: primaryArr, innerMaxValue: defaultMaxValue}
    } 
    else {
        for (let i = 0; i < itemsAmount; i++) {
            primaryArr.push({
                value: getRandomInt(i + 1, maxValue),
                isEmpty: false
            })
        }

        return {primaryTokens: primaryArr, innerMaxValue: maxValue}
    }

}


export const getSortedTokens = (unsortedTokens: IToken[], order: order, maxValue: number) => {
    const arr = JSON.parse(JSON.stringify(unsortedTokens)) as IToken[]

    const values = arr.map((item: IToken) => item.value)

    arr.push({
        value: getRandomInt(1, Math.min(...values) - 1),
        isEmpty: true
    })

    switch(order) {
        case 'asc': 
            
            arr.sort((a:IToken, b:IToken) => {
                a.hasOwnProperty('isEmpty') && (a.isEmpty = true) 
                b.hasOwnProperty('isEmpty') && (b.isEmpty = true) 

                return a.value - b.value
            })
            arr[0].isEmpty = false
            

            return arr
        
        case 'desc':
           

            arr.sort((a:IToken, b:IToken) => {
                a.hasOwnProperty('isEmpty') && (a.isEmpty = true) 
                b.hasOwnProperty('isEmpty') && (b.isEmpty = true) 

                return b.value - a.value
            })
            arr[arr.length - 1].isEmpty = false

            return arr
    }
}