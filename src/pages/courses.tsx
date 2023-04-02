import Head from 'next/head'
import { Comfortaa } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { getCourses, getCourseById } from './api/req.courses'

const font = Comfortaa({ subsets: ['latin'] })

export default function Courses() {

    useEffect(() => {
        async function fetchData() {
          try {
            const imagesList = await getCourses();
            console.log(imagesList)
          } catch(err) {
            console.log(err)
          }   
        }
        fetchData()
      }, []);
    
      useEffect(() => {
        async function fetchData() {
          try {
            const imagesList = await getCourseById();
            console.log(imagesList)
          } catch(err) {
            console.log(err)
          }   
        }
        fetchData()
      }, []);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1 className={font.className}>Cursos</h1>
                    <h1 className={font.className}>Menu</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.picture}/>
                    <h2 className={font.className}>Nome da Escola <span>=&gt;</span></h2>
                    <h3 className={font.className}>Aprenda:</h3>    
                </div>
                <div className={styles.content}>
                    <div className={styles.picture}/>
                    <h2 className={font.className}>Nome da Escola <span>=&gt;</span></h2>
                    <h3 className={font.className}>Aprenda:</h3>    
                </div>
                <div className={styles.content}>
                    <div className={styles.picture}/>
                    <h2 className={font.className}>Nome da Escola <span>=&gt;</span></h2>
                    <h3 className={font.className}>Aprenda:</h3>                      
                </div>
         
            </div>            
        </div>
        // <Link href='/courses/[id]' as={'/courses/' + value[0]}>
        //       <a>{value[1].title}</a>
        // </Link>
    )
}