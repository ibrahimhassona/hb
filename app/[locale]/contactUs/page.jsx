
import ContactUsContent from '@/components/contact/ContactUsContent'
import NavBar from '@/components/navbar/NavBar'
import Path from '@/components/Path'
import React from 'react'

const page = () => {
    const dataPath = [
        { title: "الرئيسية", url: '/' },
        { title: "تواصل معنـا", url: '/contactUs' },
    ]
    return (
        <>
            <div className='relative bg-[url(/contact-landing.jfif)] h-[450px] bg-cover bg-center overflow-hidden'>
                <div className='w-full h-full bg-black/70 absolute top-0 right-0'>
                    {/* -------- NavBar -------- */}
                    <NavBar props={{ text: 'white', bg: 'primary' }} />
                    {/* ------ Landing ------ */}
                    <div className='px-4 xl:px-40 h-full cust-trans animate-flip-up'>
                        {/* ---- About Description ---- */}
                        <div className='flex flex-col justify-around w-[70%] max-sm:w-full gap-4 h-[250px] '>
                            {/* ------ SRC Path ------ */}
                            <Path data={dataPath} className='text-white' />
                            <div>
                                <h1 className='text-[40px] max-sm:text-[30px] font-bold text-primary'>كيف يمكننـا مساعدتك؟</h1>
                                <p className='text-white text-[20px] font-[500]'>نحن نقدر استفساراتك وأفكارك وملاحظاتك. اتصالك معنا هو الخطوة الأولى نحو تجربة سلسة ومرضية.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  =============== Content ==================  */}
            <ContactUsContent />
        </>
    )
}

export default page