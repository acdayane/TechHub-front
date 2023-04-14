import styles from '@/styles/Home.module.css'
import { Comfortaa } from 'next/font/google'
import { useRouter } from 'next/router'
import Image from 'next/legacy/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Course, CourseByTechnology, Technology } from '@/types/index.types'
import { FaSearchPlus } from "react-icons/fa";
import Info from '@/components/Info'
import { getTechnologies, getTechnologyById } from '../api/technologies.api'

const font = Comfortaa({ subsets: ['latin'] })

export default function Technologies() {
    const router = useRouter();
    const id = router.query.id;
    const [coursesByTechnology, setCoursesByTechnology] = useState<CourseByTechnology[] | null>(null);
    const [techList, setTechList] = useState<Technology[] | null>(null);

    useEffect(() => {
        getTechnologyById(Number(id))
        .then((res) => setCoursesByTechnology(res))
        .catch((err) => console.log(err))
    }, [id]);

    useEffect(() => {
        getTechnologies()
        .then((res) => setTechList(res))
        .catch((err) => console.log(err))
    }, []);

    if (coursesByTechnology === null || techList === null) {
        return <div className={styles.container}><p>Loading...</p></div>;
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1 className={font.className}>Onde aprender {coursesByTechnology[0].Technologies.name}?</h1>
                    <h1 className={font.className}>Menu</h1>
                </div>
                {coursesByTechnology.map((c) =>
                    <div key={c.id} className={styles.content}>                    
                        <Link href={c.Courses.Schools.website} rel="noopener noreferrer" target="_blank">                   
                            <Image
                                className={styles.picture}
                                unoptimized
                                src={c.Courses.Schools.image}
                                alt="School"
                                width={100}
                                height={100}
                                priority
                            /> 
                        </Link> 
                        <h3 className={font.className}>{c.Courses.Schools.name}</h3>                    
                        <h2 className={font.className}>{c.Courses.Names.name} <span>&#8594;</span></h2>
                        <span className={font.className}>{c.Courses.Types.name}</span>
                        <p className={font.className}>{c.Courses.description}</p>
                        <p className={font.className}>Carga horária: {c.Courses.durationInHours}h</p>
                        <p className={font.className}>Duração: {c.Courses.durationInMonths} meses</p>
                        <p className={font.className}>R$: {c.Courses.minTuitionFee} - {c.Courses.maxTuitionFee} *</p>
                        <p className={font.className}>MSC: {c.Courses.msc === true? "Sim" : "Não"} **</p>
                        <FaSearchPlus/>
                    </div>
                )}  
                <h2 className={font.className}>Pesquise outra tecnologia:</h2>
                <div className={styles.boxTechnology}>
                    {techList.map((t) => 
                        <div key={t.id} className={styles.pictureTechnology}>
                        <Link href={`/technologies/${t.id}`}>
                            <Image
                            unoptimized
                            src={t.image}
                            alt={t.name}
                            layout="fill"
                            objectFit="contain"
                            priority
                            />
                        </Link>
                        </div>
                    )}
                </div>
                <Info/>
            </div>       
        </div>
    )
}