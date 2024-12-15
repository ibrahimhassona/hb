
import ContactUsContent from '@/components/contact/ContactUsContent'
import NavBar from '@/components/navbar/NavBar'
import Path from '@/components/Path'
import { useTranslations } from 'next-intl'
import React from 'react'
// ================= Meta Data ==================
export async function generateMetadata({ params }) {
    const locale = params.locale;
    let metadata = {}
    if (locale == 'ar') {
        metadata = {
            title: 'تـواصل معنـا',
            description: 'كيف يمكننـا مساعدتك؟ نحن نقدر استفساراتك وأفكارك وملاحظاتك. اتصالك معنا هو الخطوة الأولى نحو تجربة سلسة ومرضية.',
            charset: "UTF-8",
            robots: "index, follow",
        }
    } else {
        metadata = {
            title: 'Contact us',
            description: 'How can we help you? We value your questions, ideas and feedback. Contacting us is the first step towards a smooth and satisfying experience.',
            charset: "UTF-8",
            robots: "index, follow",
        }
    }
    return metadata;
}
const page = () => {
    const t = useTranslations("contactUs")
    const dataPath = [
        { title: t("home"), url: '/' },
        { title: t("contactUs"), url: '/contactUs' },
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
                            <div className='flex flex-col gap-2 max-sm:gap-4'>
                                <h1 className='text-[40px] max-sm:text-[30px] font-bold text-primary max-sm:text-xl'>{t("head")}</h1>
                                <p className='text-white text-[20px] font-[500] max-sm:text-sm'>{t("text")}
                                </p>
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