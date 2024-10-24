import AboutContent from '@/components/about/AboutContent';
import NavBar from '@/components/navbar/NavBar';
import Path from '@/components/Path';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <>
            <div className='relative bg-[url(/about/about-landing.jpg)] h-[450px] bg-cover bg-center '>
                <div className='w-full h-full bg-black/70 absolute top-0 right-0'>
                    {/* -------- NavBar -------- */}
                    <NavBar props={{ text: 'white', bg: 'primary' }} />
                    {/* ------ Landing ------ */}
                    <div className='px-4 xl:px-40 h-full cust-trans animate-flip-up'>
                        {/* ---- About Description ---- */}
                        <div className='flex flex-col justify-around w-[70%] max-sm:w-full gap-4 h-[250px] '>
                        {/* ------ SRC Path ------ */}
                        <Path/>
                          <div>
                          <h1 className='text-[40px] max-sm:text-[30px] font-bold text-primary'>كل شي بـدأ من هنـا !</h1>
                          <p className='text-white text-[20px] font-[500]'>عالم هيبنوتيك يخلق مستقبل التكنولوجيا في منزلك. نحن نقدم العديد من منتجات تكنولوجيا المنزل الذكي. جربه الآن!</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------- About Content ------------- */}
            <AboutContent />
        </>
    );
};

export default page;
