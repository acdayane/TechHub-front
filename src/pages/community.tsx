
import { useGlobalContext } from '@/contexts/globalContext';
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Community() {
    const { token } = useGlobalContext();
    const router = useRouter();

    return (
        <div className={styles.main}> 
        
                <div className={styles.containerLeft}>                
                    <h1>Batatas da comunidade</h1>                 
                </div>
                                                     
        </div>
    )
}