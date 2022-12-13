import { useRouter } from "next/router"
import { FC, SyntheticEvent } from "react"
import { maxValue } from "../../contexts/GameContext"
import { useGetContext } from "../../hooks/useGetContext"

import Button from "../../ui/Button/Button"
import Range from "../../ui/Range/Range"

import styles from './Menu.module.scss'

const amountArr = [2, 3, 4, 5]

const values: maxValue[] = ['A', 9, 19, 50, 99, 999]

const Menu:FC = () => {
    const {maxValue, order, setOrder, setMaxValue, setItemsAmount} = useGetContext()
    const router = useRouter()

    const ascClick = (e: SyntheticEvent) => order !== 'asc' && setOrder('asc')

    const descClick = (e: SyntheticEvent) => order !== 'desc' && setOrder('desc')
    
    const changeItemsAmount = (e: any) => setItemsAmount(amountArr[+e.target.value])

    const changeMaxValue = (e: any) => {
        setMaxValue(values[+e.target.value])

        values[+e.target.value] === 'A' && setOrder('asc')
} 
    

    return (
        <div className={styles.wrapper}>
           <div className={styles.menu}>
                <div className={styles.fstPart}>
                    <div>
                        <h1>Кол-во предметов</h1>
                        <Range onChange={changeItemsAmount} width={366} values={amountArr}/>
                    </div>
                    <div>
                        <h1>Значения</h1>
                        <Range onChange={changeMaxValue} width={531} values={values}/>
                    </div>
                    <div className={styles.buttons}>
                        <Button onClick={ascClick} data-selected={order === 'asc'} text="По возрастанию"/>
                        <Button onClick={descClick} data-selected={order === 'desc'} disabled={maxValue === 'A'} text="По убыванию"/>
                    </div>
                </div>
                <div className={styles.sndPart}>
                    <Button onClick={() => {
                        router.push('/game')
                        // play()
                        }} addStyle="play" text="Играть"/>
                </div>
            </div> 
            
        </div>
        
    )
}

export default Menu