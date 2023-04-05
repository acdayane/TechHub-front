import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import logo from '../assets/logo_techHUB.png'

export default function Header() {

    return (
        <div className={styles.header}>
            <Image
                src={logo}
                width={200}
                height={200}
                alt="logo"
            />
        </div>       
    )
}