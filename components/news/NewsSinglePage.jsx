"use client"
import React from 'react'
import Path from '../Path'
import { IoShareSocialOutline } from "react-icons/io5";
import NewsGallery from './NewsGallery';
import { useTranslations } from 'next-intl';
import parse from 'html-react-parser'
import SocialMediaShare from './SocialMediaShare';


const NewsSinglePage = ({ data }) => {
    const t = useTranslations("news")
    const {
        createdAt = null,
        description = '',
        image = null,
        short_description = '',
        slug = '',
        title = ''
    } =  data 
    // -------- Get Data --------
    const dataPath = [
        { title: t("home"), url: '/' },
        { title: t("news"), url: '/news' },
        { title: title, url: `/news/${slug}` },
    ]
    console.log(createdAt)

    return (
        <div className='px-4 xl:px-40 '>
            {/* ------ SRC Path ------ */}
            <Path data={dataPath} className='text-darkGray' />
            {/* ==================== Content =============== */}
            <article className=''>
                {/* -------------- Title -------------- */}
                <div className='flex items-center justify-between w-full my-4'>
                    <h1 className='text-darkGray font-bold text-2xl max-md:text-md'>{title}</h1>
                    {/* <span className='bg-green-100 rounded-full text-primary h-[35px] w-[35px] shadow cursor-pointer cust-trans hover:bg-green-200 flex items-center justify-center'> */}
                        {/* <IoShareSocialOutline size={25} /> */}
                        <SocialMediaShare/>
                    {/* </span> */}
                </div>
                {/* ---------- Description ------------ */}
                <div className='flex flex-col gap-4 my-4'>
                    <span className='text-sm  text-gray-400 max-md:text-xs'>{new Date(createdAt).toLocaleDateString('en')}</span>
                    <div className='text-sm text-darkGray'>{parse(short_description)}</div>
                    <div className='text-sm  text-darkGray'>{parse(description)}</div>
                </div>
                {/* ==================== Gallery =============== */}
                <NewsGallery images={image} />
            </article>
        </div>
    )
}

export default NewsSinglePage