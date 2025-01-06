"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getData } from '@/utils/functions/getData'
import { useLocale } from 'next-intl'
import { useQuery } from '@tanstack/react-query'
import SideBar from './SideBar'
import ProductsComponent from './ProductsComponent'
import LoadMore from '../LoadMore'
import { getProducts } from '@/utils/functions/getProducts'

const useProducts = (locale, url) => {
  return useQuery({
    queryKey: ['products', locale, url],
    queryFn: () => getProducts(locale, url),
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};

const BrowseProducts = () => {
  const [url, setUrl] = useState('products?populate=*&filters[isVisible][$eq]=true')
  const searchParams = useSearchParams()
  const [limit, setLimit] = useState(25)
  const handleLoadeMore = (value) => {
    setLimit(value)
  }
  useEffect(() => {
    const categoryKey = searchParams.has('sub-category')
      ? 'sub-category'
      : searchParams.has('category')
        ? 'category'
        : '';

    const categoryValue = searchParams.get(categoryKey);

    if (categoryKey === 'category') {
      setUrl(`products?filters[main_categories][slug][$eq]=${categoryValue}&populate=*&filters[isVisible][$eq]=true&pagination[limit]=${limit}`);
    } else if (categoryKey === 'sub-category') {
      setUrl(`products?filters[sub_categories][slug][$eq]=${categoryValue}&populate=*&filters[isVisible][$eq]=true&pagination[limit]=${limit}`);
    } else {
      setUrl(`products?populate=*&filters[isVisible][$eq]=true&pagination[limit]=${limit}`);
    }
  }, [searchParams, limit]);

  const locale = useLocale()
  const { data, error, isLoading } = useProducts(locale, url);
  return (
    <>
      <div className='px-4 xl:px-40 bg-white flex max-md:flex-col max-md:justify-center items-start gap-4 py-12 relative'>
        {/* <MobileFilter className={`hidden max-md:flex`} /> */}
        <SideBar handleLoadeMore={handleLoadeMore} className={` `} />
        <ProductsComponent
          className={`bg-white p-2 rounded-md`}
          searchParams={searchParams}
          data={data?.data}
        />
      </div>
      {data && data.meta.pagination.total >= limit && <LoadMore limit={limit} isLoading={isLoading} handleLoadeMore={handleLoadeMore} />}
    </>
  )
}

export default BrowseProducts