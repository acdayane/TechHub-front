import { Comfortaa } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const font = Comfortaa({ subsets: ['latin'] })

export default function Soon() {

    return (
        <div className={styles.main}>
            <div className={styles.containerMain}>
                <h1 className={font.className}>Em breve!</h1>
            </div>            
        </div>
    )
}