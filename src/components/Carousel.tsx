import styles from '@/styles/Home.module.css'
import Image from 'next/legacy/image'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'

export default function CarouselImages() {

    return (
        <div className='d-block w-100'>
            <Carousel fade>
                <Carousel.Item interval={5000} className={styles.picCarousel}>                                      
                    <Image
                        className='d-block w-100'
                        style={{opacity: "80%"}}
                        unoptimized
                        src={photo1}
                        alt="student"
                        layout="fill"
                        objectFit="cover"                       
                        priority
                    />        
                    <Carousel.Caption>
                        <h1>Encontre a melhor escola de programação para você</h1>
                        <p>Informações sobre os principais bootcamps em Desenvolvimento Web Full Stack do Brasil em um só lugar</p>
                    </Carousel.Caption>             
                </Carousel.Item>
                <Carousel.Item interval={5000} className={styles.picCarousel}>
                    <Image
                        className='d-block w-100'
                        unoptimized
                        src={photo2}
                        style={{opacity: "80%"}}
                        alt="student"
                        layout="fill"
                        objectFit="cover"    
                        priority
                    /> 
                    <Carousel.Caption>
                        <h1>Encontre a melhor escola de programação para você</h1>
                        <p>Informações sobre os principais bootcamps em Desenvolvimento Web Full Stack do Brasil em um só lugar</p>
                    </Carousel.Caption>
                </Carousel.Item>               
          </Carousel>
        </div>
      );
}