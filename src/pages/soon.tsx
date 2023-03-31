import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'

export default function Soon() {
    const router = useRouter();

    return (
        <div className={styles.main}>
            <div className={styles.containerMain}>
                <h1>Em breve!</h1>
            </div>            
        </div>
    )
}