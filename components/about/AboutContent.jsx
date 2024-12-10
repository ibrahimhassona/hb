"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbStar } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { TfiTarget } from "react-icons/tfi";
import { useLocale, useTranslations } from 'next-intl';
import { getData } from "@/utils/functions/getData"
import { useQuery } from "@tanstack/react-query"
import Slider from '../Slider';
import Loader from '../Loader';

export const useAbout = (locale) => {
    const url = 'about-sections?populate=*'
    return useQuery({
        queryKey: ['about', locale],
        queryFn: () => getData(locale, url),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
    })
}
const AboutContent = () => {
    const locale = useLocale()
    const { data, isLoading } = useAbout(locale)
    const t = useTranslations("nav")
    const dataPath = [
        { title:t("home"), url: '/' },
        { title: t("who_are"), url: '/about' },
    ]
    if(!data){
      return  <Loader/>
    }
    return (
        <>
            <Slider number={2} top={true} dataPath={dataPath} />
            {data && <Part1 data={data[1]} />}
            {data && <Part2 data={data[2]} />}
            {data && <Part3 data={data[0]} />}
            <Part4 locale={locale} />
        </>
    )
}

export default AboutContent

// ============ Part One =============

const Part1 = ({ data }) => {
    const { title, description, sub_title } = data.Section_attributes[0]
    return (
        <div className='px-4 xl:px-40 grid grid-cols-2 max-md:flex flex-col  items-center  my-2'>
            {/* ----- Image ------ */}
            <Image src={data.poster.url} alt='alt' height={400} width={400} className='max-md:w-full' />
            {/* ----- Content ------ */}
            <div className='flex flex-col gap-4 max-md:py-8'>
                <h2 className='text-primary font-[600] '>{title}</h2>
                <h3 className='text-[30px] font-[600] max-md:text-[20px]'>{sub_title}</h3>
                <p className='text-lightGray max-md:leading-7 '>{description}</p>
            </div>
        </div>
    )
}


// ============ Part Two =============

const Part2 = ({ data }) => {
    const { title, description, sub_title } = data.Section_attributes[0]
    const [one, two, three, four] = data.features
    const t = useTranslations("about")
    return (
        <div className='px-4 xl:px-40 my-2 py-8 flex flex-col gap-4 items-center w-full'>
            {/* ----- Head ------ */}
            <div className='flex flex-col items-center justify-center gap-3'>
                <h2 className='text-primary font-[600] text-lg'>{title}</h2>
                <h3 className='text-[35px] font-[500] max-md:text-[20px]'>{sub_title}</h3>
                <p>{description}</p>
            </div>
            {/* ----- Content ------ */}
            <div className='flex flex-col gap-4 max-md:py-8'>
                <div className=" mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center  mx-auto">
                        {/* Right Features */}
                        <div className="text-right flex flex-col gap-8">
                            <FeatureCard
                                title={one.title}
                                description={one.description}
                            />
                            <FeatureCard
                                title={two.title}
                                description={two.description}
                            />
                        </div>
                        {/* Center Image */}
                        <Image
                            src={data.poster.url}
                            alt="Smart Lock Device"
                            width={400}
                            height={400}
                            className="h-full w-full "
                        />
                        {/* Left Features */}
                        <div className="text-right flex flex-col gap-8">
                            <FeatureCard
                                title={three.title}
                                description={three.description}
                            />
                            <FeatureCard
                                title={four.title}
                                description={four.description}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Link href='/products?category=smart-life' className='w-fit capitalize text-white py-2 px-4 hover:bg-lightPrimary bg-primary cust-trans rounded-md'>{t("explore")}</Link>
        </div>
    )
}

    ;


const FeatureCard = ({ title, description }) => (
    <div className={`bg-teal-50 hover:bg-teal-200 group p-4 cursor-pointer rounded-lg relative group hover:shadow-sm cust-trans flex flex-col gap-2`}>
        <div className=" w-8 h-8 bg-teal-100 flex items-center justify-center rounded-full">
            <TbStar className='text-primary' />
        </div>
        <h3 className="text-primary text-start font-[600] text-md  group-hover:text-white cust-trans">{title}</h3>
        <p className="text-gray-600 text-start text-sm leading-relaxed group-hover:text-white cust-trans">{description}</p>
    </div>
);

// ============ Part Three =============
const Part3 = ({ data }) => {
    const { title, description } = data.Section_attributes[0]
    const [one, two] = data.features
    return (
        <div className='pe-4 xl:pe-40 max-md:px-4 max-md:xl:px-40 grid grid-cols-2 gap-8 max-md:gap-16 items-center justify-between max-md:flex flex-col my-8 py-6 '>
            {/* --------- Image -------- */}
            <div className='h-[400px] max-md:h-[300px] overflow-hidden rounded-e-3xl max-md:rounded-xl max-md:w-full '>
                <Image
                    src={data.poster.url}
                    alt='about content 3'
                    width={500}
                    height={0}
                    className='w-full h-[400px] max-md:h-[300px]'
                />
            </div>
            {/* --------- Content -------- */}
            <div className='flex flex-col gap-3'>
                <h2 className='text-primary font-[600] text-lg'>{title}</h2>
                <h3 className='text-lightGray font-[600] mb-[20px] '>{description}</h3>
                <div className='relative ps-[50px] flex flex-col gap-16 py-4 '>
                    {/* Item */}
                    <div className=' flex justify-between items-start gap-5'>
                        <div className='text-primary bg-teal-50 h-[40px] w-[40px] ] z-20 flex items-center justify-center rounded-full absolute start-0'>
                            <FiEye size={20} />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-primary '>{one.title}</h3>
                            <p className='text-lightGray'>{one.description}</p>
                        </div>
                    </div>
                    {/* Item */}
                    <div className=' flex gap-5'>
                        <div className='text-primary bg-teal-50 h-[40px] w-[40px] ] z-20 flex items-center justify-center rounded-full absolute start-0'>
                            <TfiTarget size={20} />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-primary '>{two.title}</h3>
                            <p className='text-lightGray'>{two.description}</p>
                        </div>
                    </div>
                    {/* ------- Span Line Column --------- */}
                    <span className='absolute  h-[110%] start-[18px] rounded-full z-10 -top-[5%] border-2'
                        style={{
                            borderImageSource: 'linear-gradient(180deg, rgba(236, 228, 228, 0) 0%, #ECE4E4 26%, #ECE4E4 75.5%, rgba(236, 228, 228, 0) 100%)',
                            borderImageSlice: 1
                        }}>
                    </span>
                </div>
            </div>
        </div>
    )
}

// ============ Part Three =============
const Part4 = () => {
    return (
        <Slider number={3} top={false} />
    )
}



