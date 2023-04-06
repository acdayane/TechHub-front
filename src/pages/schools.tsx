import styles from '@/styles/Home.module.css'
import { Course, School } from '@/types/index.types'
import { Comfortaa } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCourseById } from './api/courses.api'
import { getSchools } from "./api/schools.api"
import { getTechnologyById } from './api/technologies.api'
import Image from 'next/legacy/image'

const font = Comfortaa({ subsets: ['latin'] })

export default function Schools() {
    const [schoolsList, setSchoolsList] = useState<School[] | null>(null);

    useEffect(() => {
        getSchools()
        .then((res) => setSchoolsList(res))
        .catch((err) => console.log(err))
    }, []);

    async function fetchCourseById(id: number) {
        getCourseById(id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    };

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
                        <h4>Estude:</h4>
                        <h4 onClick={() => fetchCourseById(1)}>{s.Courses[0].Names.name} | {s.Courses[0].Types.name}</h4>
                        </Link>
                    </div>
                )}   
            </div>            
        </div>
    )
}