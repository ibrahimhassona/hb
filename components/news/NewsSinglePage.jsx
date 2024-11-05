import React from 'react'
import Path from '../Path'
import { IoShareSocialOutline } from "react-icons/io5";
import NewsGallery from './NewsGallery';

const NewsSinglePage = () => {
    const dataPath = [
        { title: "الرئيسية", url: '/' },
        { title: "الأخبار", url: '/news' },
        { title: "هيبنوتيك في الصين", url: '/' },
    ]
    const images=[

        '/news/news-1.jpg',
        '/news/news-2.jpg',
        '/news/news-3.jpg',
        '/news/news-4.jpg',
        '/news/news-1.jpg',
        '/news/news-2.jpg',
        '/news/news-3.jpg',
    ]

    const text=['بدأت مجموعة Marketing Home Group (MHG) الاستعدادات لإطلاق علامة تجارية جديدة "Hypnotek®" وهي علامة تجارية عالية التقنية موجهة نحو التصميم تحتوي على عائلات مختلفة من المنتجات الذكية والملحقات التي تندرج في فئة إنترنت الأشياء. من المتوقع أن يتم الإطلاق في الربع الثاني من عام 2020، حيث ستتم أنشطة تصميم المنتج وتحديد المصادر في النصف الثاني من عام 2019.','وبما أن الشفافية هي قيمة أساسية في MHG؛ رئيس المجموعة م. أجرى مسعد الغفاري تغطية على وسائل التواصل الاجتماعي في ديسمبر 2019 أظهرت القيمة المضافة داخل المنتجات. وقد حظيت التغطية بإعجاب وترحيب غير عاديين مع تقديم تعليقات حية حول الطلب وتعطش السوق لمثل هذه المنتجات عالية الجودة.']
    return (
        <div className='px-4 xl:px-40 '>
            {/* ------ SRC Path ------ */}
            <Path data={dataPath} className='text-darkGray' />
            {/* ==================== Content =============== */}
            <article className=''>
                {/* -------------- Title -------------- */}
                <div className='flex items-center justify-between w-full my-4'>
                    <h1 className='text-darkGray font-bold text-2xl max-md:text-md'>هيبنوتيك في الصين</h1>
                    <span className='bg-green-100 rounded-full text-primary h-[35px] w-[35px] shadow cursor-pointer cust-trans hover:bg-green-200 flex items-center justify-center'>
                        <IoShareSocialOutline size={25}/>
                    </span>
                </div>
                {/* ---------- Description ------------ */}
                <div className='flex flex-col gap-4 my-4'>
                    <span className='text-sm text-gray-400 max-md:text-xs'>2024-01-29 • 2 / دقيقة قراءة</span>
                  {text.map((item,index)=>(<p className='text-darkGray max-md:text-sm' key={index}>{item}</p>))}
                </div>
            {/* ==================== Gallery =============== */}
                <NewsGallery images={images}/>
            </article>
        </div>
    )
}

export default NewsSinglePage