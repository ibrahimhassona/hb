import AboutContent from '@/components/about/AboutContent';
import NavBar from '@/components/navbar/NavBar';
import Path from '@/components/Path';
import React from 'react';

const page = () => {
    const dataPath = [
        { title: "الرئيسية", url: '/' },
        { title: "منجاتنا", url: '/products' },
    ]
    return (

            <div className='relative bg-[url(/products/products-landing.jfif)] h-[450px] bg-cover bg-center '>
                <div className='w-full h-full bg-black/70 absolute top-0 right-0'>
                    {/* -------- NavBar -------- */}
                    <NavBar props={{ text: 'white', bg: 'primary' }} />
                    {/* ------ Landing ------ */}
                    <div className='px-4 xl:px-40 h-full cust-trans animate-flip-up'>
                        {/* ---- About Description ---- */}
                        <div className='flex flex-col justify-around w-[70%] max-sm:w-full gap-4 h-[250px] '>
                            {/* ------ SRC Path ------ */}
                            <Path data={dataPath} />
                            <div>
                                <h1 className='text-[40px] max-sm:text-[30px] font-bold text-primary'>اكتشف مستقبل الحياة الذكية</h1>
                                <p className='text-white text-[20px] font-[500]'>تصفح مجموعتنا من الأجهزة الذكية المصممة لتعزيز الراحة والأمان والملاءمة.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default page;
