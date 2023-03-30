import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'

export default function Schools() {
    const router = useRouter();

    return (
        <div className={styles.main}>
            <div className={styles.containerMain}>
                <h1>Schools</h1>
            </div>            
        </div>
    )
}