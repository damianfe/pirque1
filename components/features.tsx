"use client"
import { servicios } from '@/lib/data'
import useInterSection from '@/utils/use-inter-section';
import Image from 'next/image';
import{motion} from 'framer-motion';
import react from 'react'

type Feature = {
    title: string,
    description: string,
    imagePath: string;
    alt: string;
}

interface IFeatures {
    item: Feature
    index: number
}

const Feature = ({ item, index }: IFeatures) => {

const animation = {opacity: 1, x: 0}
const {elementRef, control} = useInterSection("features",animation);


    return (
        <motion.div
        ref={elementRef}
        initial={{opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        animate={control}
        className={`flex flex-col-reverse ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} ${index === 0 ? "sm:mt-[2rem]" : "sm:mt-[18rem]"} ${index === 0 ? "mt-[2rem]" : "mt-[10rem]"} mt-[10rem] items-center `}>
            <div className={`px-10 ${index % 2 === 0 ? "sm:pr-20" : "sm:pl-20"}flex flex-col items-start`}>
                <h2 className='mx-auto sm:mx-0 text-2xl sm:text-4xl mb-5 font-bold mt-5 sm:mt-0'>{item.title}</h2>
                <p className="text-justify text-sm sm:text-xl text-gray-500 leading-[1.8rem]">{item.description}</p>
            </div>
            <Image
                className='rounded-[1.5rem] border border-gray-150 shadow-sm w-[12.5rem] h-[12.5rem]'
                src={item.imagePath}
                width={200}
                height={200}
                alt={item.alt}
            />
        </motion.div>

    )
}
export default function Features() {
    return (
        <section
        id="servicios"
            className='mx-auto w-full sm:max-w-2xl sm:mt-[18rem]'
        >
            <h1 className=' text-center text-2xl text-green-950 mt-5 sm:mt-0 sm:text-3xl'>Servicios</h1>
            {servicios.map((item, index) =>
                <Feature key={item.title} item={item} index={index} />
            )}
        </section>
    )

}