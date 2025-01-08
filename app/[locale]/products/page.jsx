import NavBar from '@/components/navbar/NavBar';
import Path from '@/components/Path';
import BrowseProducts from '@/components/products/BrowseProducts';
import { getData } from '@/utils/functions/getData';
import { useTranslations } from 'next-intl';
import React from 'react';
// ================= Meta Data ==================
export async function generateMetadata({ params, searchParams }) {
    // ---- Locale ----
    const locale = params.locale;
    // ---- Fetch Sub Category ----
    const data = await getData(locale, 'sub-categories?')
    // ---- KeyWords ----
    const arrayKeyWords = data.map(item => item.title)
    let metadata = {}
    // ---- Get Title Of Sub Categories ----
    const value = searchParams['sub-category'];
    let cat = data && data.filter(item => item.slug == value)
    let title = cat && cat[0]?.title
    if (locale == 'ar') {
        metadata = {
            title: title || 'المنتجات',
            description: arrayKeyWords.join(" "),
            keywords: arrayKeyWords || [],
            robots: "index, follow",
        }
    } else {
        metadata = {
            title: title || 'Products',
            description: arrayKeyWords.join(" "),
            keywords: arrayKeyWords || [],
            robots: "index, follow",
        }
    }
    return metadata;
}

const page = ({ searchParams }) => {
    const t = useTranslations("product")
    const dataPath = [
        { title: t("home"), url: '/' },
        { title: t("products"), url: '/products' },
    ]
    return (
        <>
            <div className='relative bg-[url(/products/products-landing.jfif)] h-[450px] bg-cover bg-center overflow-hidden'>
                <div className='w-full h-full bg-black/70 absolute top-0 right-0'>
                    {/* -------- NavBar -------- */}
                    <NavBar props={{ text: 'white', bg: 'primary' }} />
                    {/* ------ Landing ------ */}
                    <div className='px-4 xl:px-40 h-full cust-trans animate-flip-up'>
                        {/* ---- About Description ---- */}
                        <div className='flex flex-col justify-around w-[70%] max-sm:w-full gap-4 h-[250px] '>
                            {/* ------ SRC Path ------ */}
                            <Path data={dataPath} className='text-white' />
                            <div className='flex flex-col gap-2 max-sm:gap-5'>
                                <h1 className='text-[40px] max-sm:text-[30px] font-bold text-primary max-sm:text-xl'>{t("head_title")}</h1>
                                <p className='text-white text-[20px] font-[500] max-sm:text-sm'>{t("description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------- About Content ------------- */}
            <BrowseProducts searchParams={searchParams} />
        </>
    );
};

export default page;
