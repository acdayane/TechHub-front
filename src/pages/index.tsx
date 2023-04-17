import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'
import { getTechnologies } from './api/technologies.api'
import { Technology } from '@/types/index.types'
import CarouselImages from '@/components/Carousel'
import { useGlobalContext } from '@/contexts/globalContext'
import Header from '@/components/Header'

export default function Home() {
  const [techList, setTechList] = useState<Technology[] | null>(null);
  const { token } = useGlobalContext();
  
  useEffect(() => {
    getTechnologies()
      .then((res) => setTechList(res))
      .catch((err) => console.log(err))
  }, []);

  if (techList === null) return;

  return (
    <main className={styles.main}>
      <Header/>
      <div className={styles.container}>
        <CarouselImages/>        
        <div className={styles.grid}>
          <div className={styles.card}>
              <Link href="/schools">
              <h2>Escolas <span>&#8594;</span></h2>
              <p>Encontre instituições que oferecem cursos de tecnologia.</p>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="/courses">
              <h2>Cursos <span>&#8594;</span></h2>
              <p>Veja detalhes e avaliações sobre os cursos.</p>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href={token !== null ? "/community" : "/login"}>
              <h2>Comunidade <span>&#8594;</span></h2>
              <p>Interaja com outros estudantes de tecnologia.</p>
            </Link>
          </div>
        </div>            
        <h2>Qual tecnologia mais te atrai?</h2>
        <p>Descubra onde aprender.</p>
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
    </div>        
  </main>
  )
}
