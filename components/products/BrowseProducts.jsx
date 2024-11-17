"use client"
import React from 'react'
import FilterAccourding from './FilterAccourding'
import ProductsComponent from './ProductsComponent'
import MobileFilter from './MobileFilter'
import Pagination from './Pagination'
import { getData } from '@/utils/functions/getData'
import { useLocale } from 'next-intl'
import Loader from '../Loader'
import { useQuery } from '@tanstack/react-query'

const useProducts = (locale) => {
    const url = 'products?populate=*';

    return useQuery({
        queryKey: ['products', locale],
        queryFn: () => getData(locale, url),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 2,
    });
};
const BrowseProducts = ({ searchParams }) => {
    // ======= Localization ==========
    const locale = useLocale()
    const { data, error, isLoading } = useProducts(locale);

    return (
        <>
            <div className='px-4 xl:px-40 bg-white flex max-md:flex-col max-md:justify-center items-start  gap-4 py-12'>
                {/* ===== Filter Accourding ====== */}
                <FilterAccourding className={`  max-md:hidden`} />
                <MobileFilter className={` hidden max-md:flex `} />
                {/* ===== Products ====== */}
                {data ?
                    <ProductsComponent className={` flex-1 `} searchParams={searchParams} data={data} /> :
                    <Loader />
                }
            </div>
            <Pagination />
        </>
    )
}

export default BrowseProducts