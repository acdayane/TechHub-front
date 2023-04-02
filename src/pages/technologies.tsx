import styles from '@/styles/Home.module.css'
import { Comfortaa } from 'next/font/google'
import React, { useEffect } from 'react'
import { getSchools } from "./api/schools.api"

const font = Comfortaa({ subsets: ['latin'] })

export default function Technologies() {
 
  useEffect(() => {
    getSchools()
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }, []);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1 className={font.className}>Escolas</h1>
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
    )
}