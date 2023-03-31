import { useRouter } from "next/router"
import styles from '@/styles/Others.module.css'
import { Comfortaa } from 'next/font/google'

const font = Comfortaa({ subsets: ['latin'] })

export default function Schools() {
    const router = useRouter();

    return (
        <div className={styles.main}>
            <div className={styles.containerMain}>
                <div className={styles.title}>
                    <h1 className={font.className}>Schools</h1>
                    <h1 className={font.className}>Menu</h1>
                </div>
                <div className={styles.card}>
                    <div className={styles.picture}/>
                    <h1 className={font.className}>Nome da Escola <span>-&gt;</span></h1>
                    <h2 className={font.className}>Aprenda:</h2>    
                </div>
                <div className={styles.card}>
                    <div className={styles.picture}/>
                    <h1 className={font.className}>Nome da Escola <span>-&gt;</span></h1>
                    <h2 className={font.className}>Aprenda:</h2>    
                </div>
                <div className={styles.card}>
                    <div className={styles.picture}/>
                    <h1 className={font.className}>Nome da Escola <span>-&gt;</span></h1>
                    <h2 className={font.className}>Aprenda:</h2>    
                </div>
         
            </div>            
        </div>
    )
}