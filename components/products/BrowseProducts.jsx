"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getData } from '@/utils/functions/getData'
import { useLocale } from 'next-intl'
import { useQuery } from '@tanstack/react-query'
import SideBar from './SideBar'
import ProductsComponent from './ProductsComponent'
import MobileFilter from './MobileFilter'
import Pagination from './Pagination'
import Loader from '../Loader'

const useProducts = (locale, url) => {
    return useQuery({
        queryKey: ['products', locale, url],
        queryFn: () => getData(locale, url),
        staleTime: 1000 * 60 * 5,
        retry: 2,
    });
};

const BrowseProducts = () => {
    const [url, setUrl] = useState('products?filters[main_category][slug][$eq]=smart-life&populate=*')
    const searchParams = useSearchParams()

    useEffect(() => {
        const categoryKey = searchParams.has('sub-category') ? 'sub-category' : 'category'
        const categoryValue = searchParams.get(categoryKey)
        const condition = categoryKey === 'category' ? 'main-categories' : 'sub-categories'
        if (condition == 'main-categories') {

            setUrl(`products?filters[main_category][slug][$eq]=${categoryValue}&populate=*`)
        }
         else {

            setUrl(`products?filters[sub_categories][slug][$eq]=${categoryValue}&populate=*`)
        }
    }, [searchParams])

    const locale = useLocale()
    const { data, error, isLoading } = useProducts(locale, url);
    console.log(data)

    return (
        <>
            <div className='px-4 xl:px-40 bg-white flex max-md:flex-col max-md:justify-center items-start gap-4 py-12 relative'>
                {/* <MobileFilter className={`hidden max-md:flex`} /> */}
                <SideBar className={` `} />
                <ProductsComponent
                    className={``}
                    searchParams={searchParams}
                    data={data}
                />
            </div>
            <Pagination />
        </>
        // <></>
    )
}

export default BrowseProducts