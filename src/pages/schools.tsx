import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getSchools } from "./api/schools.api"
import Image from 'next/legacy/image'
import { useGlobalContext } from '@/contexts/globalContext'

export default function Schools() {
    const { schoolsList, setSchoolsList } = useGlobalContext();

    useEffect(() => {
        getSchools()
        .then((res) => setSchoolsList(res))
        .catch((err) => console.log(err))
    }, []);

    if (schoolsList === null) return <div className={styles.container}><p>Loading...</p></div>;

    return (
        <div className={styles.main}>
            <div className={styles.containerLeft}>                
                <h1>Escolas</h1>                
                {schoolsList.map((s) =>
                    <div key={s.id} className={styles.content}>
                        <Link href={s.website} rel="noopener noreferrer" target="_blank">
                            <Image
                                className={styles.picture}
                                unoptimized
                                src={s.image}
                                alt="School"
                                width={100}
                                height={100}
                                priority
                            />                       
                            <h2>{s.name} <span>&#8594;</span></h2>
                        </Link>
                        <h4>Estude:</h4>
                        <h4>{s.Courses[0].Names.name} | {s.Courses[0].Types.name}</h4>                       
                    </div>
                )}   
            </div>            
        </div>
    )
}