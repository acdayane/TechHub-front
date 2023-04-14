import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo_techHUB.png'

export default function Header() {

    return (
        <div className={styles.header}>
            <Link href="/">
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="logo"
                />
            </Link>
        </div>       
    )
}