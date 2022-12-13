import { StaticImageData } from "next/image"
import { ReactNode, FC } from "react"

import styles from './Layout.module.scss'

type layoutProps = {
    children: ReactNode
    bgImage?: StaticImageData | null
}

const Layout:FC<layoutProps> = ({children, bgImage = null}) => {

    return (
        <div className={styles.layout} style={{backgroundImage: bgImage ? `url(${bgImage.src})` : 'initial'}}>
            {children}
        </div>
    )
}

export default Layout