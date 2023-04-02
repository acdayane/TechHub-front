import styles from '@/styles/Home.module.css'
import { School } from '@/types/index.types'
import { Comfortaa } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getSchools } from "./api/schools.api"

const font = Comfortaa({ subsets: ['latin'] })

export default function Schools() {
    const [schoolsList, setSchoolsList] = useState<School[] | null>(null);

    useEffect(() => {
        getSchools()
        .then((res) => setSchoolsList(res))
        .catch((err) => console.log(err))
    }, []);

    if (schoolsList === null) return <div className={styles.container}><p>Loading...</p></div>;

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1 className={font.className}>Escolas</h1>
                    <h1 className={font.className}>Menu</h1>
                </div>
                {schoolsList.map((s) =>
                    <div key={s.id} className={styles.content}>
                        <Link href={s.website} rel="noopener noreferrer" target="_blank">
                        <div className={styles.picture}/>
                        <h2>{s.name}</h2>
                        <h3>Aprenda: {s.Courses.map((c)=>c.nameId)}</h3>
                        </Link>
                    </div>
                )}   
            </div>            
        </div>
    )
}