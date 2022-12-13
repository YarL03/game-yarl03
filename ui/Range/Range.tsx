import { FC, SyntheticEvent } from 'react'
import styles from './Range.module.scss'

type rangeProps = {
    values: Array<number | string>,
    width?: number,
    onChange: (e: SyntheticEvent) => void
}

const Range:FC<rangeProps> = ({values, width = 200, onChange}) => {
    return (
        <div className={styles.container} style={{width}}>
                <div className={styles.steps}>
                    {
                        values.map((item) => (
                            <span key={`__key__${item}`}>{item}</span>
                        ))
                    }
                </div>
                <input onChange={onChange} max={values.length - 1} defaultValue="0" min="0" step="1" type="range" />
        </div>
    )
}

export default Range