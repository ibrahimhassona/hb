"use client"
import SimilartProducts from "@/components/products/SimilartProducts"
import Loader from "@/components/Loader"
import Path from "@/components/Path"
import ProductAccordion from "@/components/product/ProductAccordion"
import ProductDetails from "@/components/product/ProductDetails"
import { getData } from "@/utils/functions/getData"
import { useQuery } from "@tanstack/react-query"
import { useLocale, useTranslations } from "next-intl"
import React from 'react'
// Custom hook for fetching product data
const useProduct = (locale, value) => {
  const url = `products?populate=*&filters[slug][$eq]=${value}&filters[isVisible][$eq]=true`
  return useQuery({
    queryKey: ['product', locale, value],
    queryFn: () => getData(locale, url),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  })
}
const ProductView = ({ slug }) => {
  const t = useTranslations("product")
  const locale = useLocale()
  // Fetch product data using the custom hook
  const { data, error, isLoading } = useProduct(locale, slug)
  const categories = {
    main: data?.[0]?.main_categories,
    sub: data?.[0]?.sub_categories || [],
  };
  if (isLoading) return <Loader />
  if (error) return <div>Some Thing Wnt Wrong !</div>
  // ======= Data Path =========
  const dataPath = [
    { title: t("home"), url: process.env.NEXT_PUBLIC_BASE_URL },
    {
      title: categories.main ? categories.main[0]?.title : categories.sub[0]?.title,
      url: categories.main ? `${process.env.NEXT_PUBLIC_BASE_URL}/products?category=${categories?.main[0]?.slug}` : `${process.env.NEXT_PUBLIC_BASE_URL}/products?sub-category=${categories?.sub[0]?.slug}`
    },
    { title: data[0]?.title, url: "#" }
  ];


  return (
    <>
      <div className="px-4 xl:px-40 my-8">
        <div className=" mb-4">
          <Path data={dataPath} className='text-darkGray' />
        </div>
        {/* ---- Part ---- */}
        <ProductDetails product={data[0]} categories={categories} />
        <ProductAccordion product={data[0]} />
      </div>
      <SimilartProducts type="category" title={t("similar_products")} url={`products?filters[sub_categories][slug][$eq]=${categories.sub[0]?.slug}&populate=*&filters[isVisible][$eq]=true`} slug={categories.sub[0]?.slug} />
    </>
  )
}

export default ProductView