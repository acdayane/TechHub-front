import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Header() {

    return (
        <div className={styles.header}>
            <Image
                src="/../assets/logo_techHUB.png"
                width={50}
                height={50}
                alt="logo"
            />
        </div>       
    )
}