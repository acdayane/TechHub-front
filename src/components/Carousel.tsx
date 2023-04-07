import styles from '@/styles/Home.module.css'
import Image from 'next/legacy/image'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import student from '../assets/student-unsplash.jpg'

export default function CarouselImages() {

    return (
        <div style={{display: "block", width: 1100, padding: 30}}>
            <Carousel fade>
                <Carousel.Item interval={5000}>                                      
                    <Image
                        className='d-block w-100'
                        unoptimized
                        src={student}
                        alt="student"
                        layout="fill"
                        priority
                    />          
                    {/* <img src={student} alt="student" className='d-block w-100'/> */}
                    <Carousel.Caption>
                        <h1>Encontre a melhor escola de programação para você</h1>
                        <p>Informações sobre os principais bootcamps em Desenvolvimento Web Full Stack do Brasil em um só lugar.</p>
                    </Carousel.Caption>             
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <Image
                    className='d-block w-100'
                        unoptimized
                        src={student}
                        alt="student"
                        layout="fill"
                        objectFit="contain"
                        priority
                    /> 
                    {/* <img src={student} alt="student" className='d-block w-100'/> */}
                    <Carousel.Caption>
                        <h1>Encontre a melhor escola de programação para você</h1>
                        <p>Informações sobre os principais bootcamps em Desenvolvimento Web Full Stack do Brasil em um só lugar.</p>
                    </Carousel.Caption>
                </Carousel.Item>               
          </Carousel>
        </div>
      );
}