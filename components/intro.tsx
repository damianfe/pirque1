"use client"
import Image from 'next/image'
import React from 'react'
import { AnimationDefinition, motion } from 'framer-motion'
import useIntersection from '@/utils/use-inter-section'

export default function Intro() {
  const animacion: AnimationDefinition = {
    // Define las propiedades de tu animación aquí
  };
  const { elementRef } = useIntersection("intro", animacion)
  
  return (
    <section ref={elementRef} id="home" className='mx-auto max-w-6xl mt-24 sm:mb-[15rem]'>
      <div className='flex flex-row justify-between items-center mx-5 mb-5'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='flex flex-row items-center'
        >
          <Image
            className='w-10 h-10'
            src={'/logo.png'}
            quality={95}
            width={20}
            height={20}
            alt='Logo app'
          />
          <span className='font-bold text-[1rem] sm-text-xl ml-1'>Disfruta Pirque</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='bg-white cursor-pointer hover:bg-purple-50 active:bg-purple-50 focus:bg-purple-50 border text-[0.9rem] sm:text-[1rem] border-black rounded-lg w-[6.3rem] h-[2.1rem] sm:w-[8.1rem] sm:h-[2.5rem]'>
          Reservar
        </motion.button>
      </div>
      <div className='flex flex-col sm:flex-row justify-between mx-5 items-start '>
        <div className=' flex flex-col sm:pr-5 md:pr-10'>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className='text-2xl mt-5 mb:0 sm:text-3xl md:text-5xl'
          >
            Celebra tus Eventos en Nuestra Quinta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className='mt-3 sm:mt-5'
          >
            Disfruta de momentos inolvidables en nuestra quinta para eventos. Contamos con amplios espacios, hermosos jardines y todas las comodidades para hacer de tu celebración un éxito.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='flex mt-5 gap-5 flex-col xl:flex-row mx-auto sm:mx-0'
          >
            
          </motion.div>
        </div>
        <motion.video
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className='relative mx:auto sm:mx-0 flex h-[23rem] w-[27rem] sm:w-[26rem] sm:h-[30rem] lg:w-[39rem] lg:h-[37rem] '
          muted
          autoPlay
          loop
        >
         
        </motion.video>
      </div>
    </section>
  )
}
