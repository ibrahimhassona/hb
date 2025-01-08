import NavBar from '@/components/navbar/NavBar';
import NewsContent from '@/components/news/NewsContent';
import Path from '@/components/Path';
import { useTranslations } from 'next-intl';
import React from 'react';
// ================= Meta Data ==================
export function generateMetadata({ params }) {
    const locale = params.locale;
    let enMetadata = {
        title: 'News',
        description: "The most important news of Hypnotic, branch updates, and new policies.",
        robots: "index, follow",
    };
    let arMetadata = {
        title: 'الاخبار',
        description: "اهم اخبار هيبنوتيك واخبار الفروع والسياسات الخاصة الجديدة",
        robots: "index, follow",
    }
    return locale == "ar" ? arMetadata : enMetadata;
}

const page = () => {
    const t = useTranslations("news")
    const dataPath = [
        { title: t("home"), url: '/' },
        { title: t("news"), url: '/news' },
    ]
    return (
        <>
            <div className='relative bg-[url(/news/news-landing.png)] h-[450px] bg-cover bg-center overflow-hidden'>
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
                                <h1 className='text-[40px] max-sm:text-[30px] font-bold text-primary'>{t("stay_updated")}</h1>
                                <p className='text-white text-[20px] font-[500]'>{t("newsletter_text")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------- News Content ------------- */}
            <NewsContent />
        </>
    );
};

export default page;
