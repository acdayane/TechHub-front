import Head from 'next/head'
import { Comfortaa } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCourses, getCourseById } from './api/courses.api'
import { Course } from '@/types/index.types'

const font = Comfortaa({ subsets: ['latin'] })

export default function Courses() {
    const [coursesList, setCoursesList] = useState<Course[] | null>(null);

    useEffect(() => {
      getCourses()
        .then((res) => setCoursesList(res))
        .catch((err) => console.log(err))
    }, []);

    useEffect(() => {
      getCourseById()
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }, []);

       if (coursesList === null) return <div className={styles.container}><p>Loading...</p></div>;

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1 className={font.className}>Cursos</h1>
                    <h1 className={font.className}>Menu</h1>
                </div>
                {coursesList.map((c) =>
                    <div key={c.id} className={styles.content}>
                        <Link href="www.google.com">
                        <div className={styles.picture}/>
                        <h2>{c.nameId}<span>=&gt;</span></h2>
                        <p>{c.description}</p>
                        <p>Carga horária: {c.durationInHours}h</p>
                        <p>Duração: {c.durationInMonths} meses</p>
                        <p>R$: {c.minTuitionFee}-{c.maxTuitionFee} *</p>
                        <p>Tem MSC? {c.msc === true? "Sim" : "Não"} **</p>
                        </Link>
                    </div>
                )}         
            <p className={styles.code}>* O menor valor corresponde ao valor do curso à vista mencionado no site da escola. O maior valor está sujeito a taxas de financiamento. Atente-se às condições contratuais.</p>        
            <p className={styles.code}>** Modelo de Sucesso Compartilhado: O aluno só paga a partir de determinada renda mínima. Verifique regras, valores e acréscimos diretamente com a escola. </p>  
            <p className={styles.code}>Informações coletadas em março de 2023.</p>  
            </div>       

        </div>
        // <Link href='/courses/[id]' as={'/courses/' + value[0]}>
        //       <a>{value[1].title}</a>
        // </Link>
    )
}