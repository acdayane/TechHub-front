import Image from 'next/legacy/image'
import { Comfortaa } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCourses, getCourseById } from './api/courses.api'
import { Course } from '@/types/index.types'
import { FaSearchPlus } from "react-icons/fa";
import Info from '@/components/Info'

const font = Comfortaa({ subsets: ['latin'] })

export default function Courses() {
    const [coursesList, setCoursesList] = useState<Course[] | null>(null);

    useEffect(() => {
      getCourses()
        .then((res) => setCoursesList(res))
        .catch((err) => console.log(err))
    }, []);

    async function fetchCourseById(id: number) {
        getCourseById(id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    };

    if (coursesList === null) return <div className={styles.container}><p>Loading...</p></div>;

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1 className={font.className}>Cursos</h1>
                    <h1 className={font.className}>Menu</h1>
                </div>
                {coursesList.map((c) =>
                    <div key={c.id} className={styles.content} onClick={() => fetchCourseById(Number())}>
                    
                        <Link href={c.Schools.website} rel="noopener noreferrer" target="_blank">                   
                            <Image
                                className={styles.picture}
                                unoptimized
                                src={c.Schools.image}
                                alt="School"
                                width={100}
                                height={100}
                                priority
                            /> 
                        </Link> 
                        <h3 className={font.className}>{c.Schools.name}</h3>                    
                        <h2 className={font.className}>{c.Names.name} <span>&#8594;</span></h2>
                        <span className={font.className}>{c.Types.name}</span>
                        <p className={font.className}>{c.description}</p>
                        <span className={font.className}>Aprenda:</span>
                        {c.TechCourses.map((t) =>
                            <span className={font.className} key={t.id}>
                                &nbsp; {t.Technologies.name},
                            </span>
                        )}
                        <span className={font.className}>&nbsp; etc.</span>
                        <p className={font.className}>Carga horária: {c.durationInHours}h</p>
                        <p className={font.className}>Duração: {c.durationInMonths} meses</p>
                        <p className={font.className}>R$: {c.minTuitionFee} - {c.maxTuitionFee} *</p>
                        <p className={font.className}>MSC: {c.msc === true? "Sim" : "Não"} **</p>
                        <FaSearchPlus/>
            
                    </div>
                )}     
               <Info/>
            </div>  
          
        </div>
        // <Link href='/courses/[id]' as={'/courses/' + value[0]}>
        //       <a>{value[1].title}</a>
        // </Link>
    )
}