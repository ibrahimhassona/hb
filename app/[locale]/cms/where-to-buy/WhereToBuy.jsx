"use client"
import Path from '@/components/Path'
import LocationMaps from '@/components/wheretobuy/LocationMaps'
import SelectItems from '@/components/wheretobuy/SelectItems'
import { useLocale, useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { MdPushPin } from 'react-icons/md'
import { BiSolidWatch } from "react-icons/bi";
import { IoPhonePortrait } from 'react-icons/io5'
import { HiLocationMarker } from 'react-icons/hi'
import { useQuery } from '@tanstack/react-query'
import { getData } from '@/utils/functions/getData'

const useBranches = (locale) => {
    const url = 'branches?populate=*'
    return useQuery({
        queryKey: ['branches', locale],
        queryFn: () => getData(locale, url),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
    })
}
const WhereToBuy = () => {
    const t = useTranslations("Locations")
    const locale = useLocale()
    const dataPath = [
        { title: t("home"), url: '/' },
        { title: t("where_buy"), url: '/cms/where-to-buy' },
    ]
    const [selectedValue, setSelectedValue] = useState(t("all"));
    const [selectedBreanch, setSelectedBranch] = useState(null)
    const { data: dataQ } = useBranches(locale)

    //------ To Get The Selected From Map -------
    const clickedItemHandler = (item) => {
        setSelectedBranch(item);
    };
    //------ To Get The Selected From Select Component -------
    const SelectHandler = (value) => {
        setSelectedValue(value);
    };
    // ------- To Update Selected branch When Select From Select component ----
    useEffect(() => {
        const sBreanch = dataQ?.filter(branch => branch.title == selectedValue)
        if (sBreanch) {
            setSelectedBranch(sBreanch[0])
        } else {
            setSelectedBranch(null)
        }
    }, [selectedValue])
    return (
        <div className='px-4 xl:px-40'>
            <Path data={dataPath} className={'text-darkGray'} />
            <div className="mx-auto bg-white shadow-sm rounded-md p-6 cust-trans animate-fade-up">
                <h1 className="text-2xl font-bold text-primary mb-6 border-b-2 border-gray-200 pb-4 capitalize">
                    {t("where_buy")}
                </h1>
                <section className="flex max-md:flex-col gap-2 text-darkGray">
                    <div className='w-full flex-1 h-[500px] border  max-sm:h-[350px] shadow-md rounded-md'>
                        <div className='flex flex-col gap-4 items-center p-2 max-sm:min-h-[250px] '>
                            <h2 className='font-semibold text-lg capitalize text-darkGray'>{t("search_place")}</h2>
                            {/* =========== Select Location =========== */}
                            <SelectItems items={dataQ} selectHandler={SelectHandler} selectedValue={selectedValue} placeholder={t("search_location")} all={true} />
                            {/* --------- Branch Details ------- */}
                            {selectedBreanch != null && <div className='shadow rounded-sm w-full text-center animate-fade-up cust-trans'>
                                {/* -------- Branch Detailes --------- */}
                                <div className='p-2 bg-green-100 flex flex-col w-full gap-2  '>
                                    {/* -------- Branch Title --------- */}
                                    <h3 className='text-darkGray text-sm font-semibold flex items-center gap-2'>
                                        <MdPushPin size={22} className={`text-primary  ${locale == 'ar' ? 'rotate-90' : '-rotate-90'}`} />
                                        <span>{selectedBreanch?.title}</span>
                                    </h3>
                                    {/* ---- Address ---- */}
                                    <p className='text-darkGray text-sm text-start flex items-start gap-2 '>
                                        <HiLocationMarker size={25} className='text-primary' />
                                        <span className='font-semibold '> {t("address")}:</span>
                                        {selectedBreanch?.address}
                                    </p>
                                    {/* ----- Phone ----- */}
                                    <a className='text-darkGray text-sm text-start flex items-start gap-2  ' href={`tel:${selectedBreanch?.phone}`}>
                                        <IoPhonePortrait size={20} className='text-primary' />
                                        <span className='font-semibold '> {t("phone")}:</span>
                                        {selectedBreanch?.phone}
                                    </a>
                                    {/* ----- Times ----- */}
                                    {selectedBreanch.work_time.length > 0 && <ul className='flex flex-col mt-2 gap-2 '>
                                        <span className='text-darkGray text-sm text-start flex items-start gap-2 '>
                                            <BiSolidWatch size={20} className='text-primary' />
                                            <span className='font-semibold '>{t("working_hours")}:</span>
                                        </span>
                                        <div className='overflow-y-scroll h-[220px] flex flex-col mt-2 gap-1 '>
                                            {selectedBreanch.work_time.map((day, index) => (
                                                <li key={index} className=' rounded-sm  border-b border-green-700 flex items-center gap-1 justify-between text-xs p-2 text-darkGray bg-white'>
                                                    <span className=' font-semibold'>{day.day}</span>
                                                    <span>{day.time}</span>
                                                </li>
                                            ))}
                                        </div>
                                    </ul>
                                    }
                                </div>
                            </div>}
                        </div>
                    </div>
                    {/* =========== Map =========== */}
                    <LocationMaps positions={dataQ} selectedValue={selectedValue} clickedItemHandler={clickedItemHandler} />
                </section>
            </div>
        </div>
    )
}

export default WhereToBuy