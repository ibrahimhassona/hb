"use client"
import { useSearch } from '@/components/navbar/SearchCtrl';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect } from 'react'
import Card from '../Card';
import { grid } from 'ldrs';
import Path from '@/components/Path';
const SearchContent = ({ value }) => {
    // ======= Translation =======
    const locale = useLocale()
    const t = useTranslations("nav")
    const { data: searchResults } = useSearch(locale, value.value);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Register the grid loader
            grid.register();
        }
    }, [])
    const dataPath = [
        { title: t("home"), url: '/' },
        { title: `${t("search_result")} ( ${value.value} ) ${t("contains")} ${searchResults?searchResults?.length:'__'} ${t("results")}`, url: '#' },
    ]
    return (
        <div className='px-4 xl:px-40 my-5'>
            <Path data={dataPath} className={'text-darkGray'}/>
            <div className=' p-2 shadow-sm rounded-md my-6'>
                {searchResults ? <div className={` min-h-[500px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start h-fit w-full justify-items-center`}>
                    {searchResults.map((item, index) => (
                        <Card search={true} item={item} key={index} value={value?.value} />
                    ))
                    }
                </div>
                    // ---------- Loader ------------
                    : <div className="min-h-[500px] w-full flex items-center justify-center ">
                        <l-grid size="100" speed="1" color="#2dbbab" />
                    </div>}
            </div>
        </div>
    )
}

export default SearchContent