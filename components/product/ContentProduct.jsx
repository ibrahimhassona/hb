import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductSelect from './ProductSelect'
import parse from 'html-react-parser'
import SoldTogether from './SoldTogether'
import SelectColor from './SelectColor'
import Error from '@/app/[locale]/error'
import ProductCategories from './ProductCategories'


const ContentProduct = ({ product, dataAttributes, onVariantSelect, categories, parentProduct }) => {
    if (!product || !product.slug) {
        // Instead of updating state here, render an error page directly
        return <Error />;
    }
    const t = useTranslations("product")
    return (
        <div className="w-[50%] max-lg:w-full text-start text-lightGray flex  flex-col justify-between">
            {/* ========= (Title & Description) & Price ========== */}
            <div className='flex items-start gap-4 max-sm:flex-col max-sm:gap-2 w-full  justify-between'>
                {/* -------- (Title & Description)  --------- */}
                <div className="mb-6 ">
                    {/* --- Sub Categories ----- */}
                    <div className='flex items-center gap-2 flex-wrap'>
                        <ProductCategories categories={categories} />
                    </div>
                    <h1 className="text-2xl font-bold text-lightGray mb-4 ">{product?.title}</h1>
                    {product?.description && parse(product?.short_description)}
                </div>
                {/* --------- Price -------------- */}
                <div className="flex items-start gap-2 flex-col justify-center w-full max-lg:my-4">
                    <div className="flex justify-between items-start  mb-4 flex-col  max-sm:flex-row-reverse gap-2 w-full">
                        <span className="text-primary text-2xl font-bold">{Number(product?.price).toLocaleString()}<small className='text-xs text-lightGray mx-1'>{t('sar')}</small></span>
                        <span className="text-gray-500  max-sm:text-sm  max-sm:text-normal text-xs ">{t('tax_price')}</span>
                    </div>
                    <div className='flex flex-col max-sm:flex-row gap-2 max-sm:justify-around w-full items-start'>
                        {/* ------- SKU -------- */}
                        <div className='text-gray-500 text-xs  p-2 bg-green-50  shadow-sm  rounded-md'>{t("sku")} : <span className='text-primary font-semibold'>{product.SKU}</span></div>
                        {/* ------- Stock -------- */}
                        <div className='text-gray-500 text-xs p-2 bg-green-50  shadow-sm  rounded-md'>{t("stock")} : <span className={`${product.stock < 5 ? 'text-red-500 ' : 'text-primary '} font-semibold`}>{product.stock}</span></div>
                    </div>
                </div>
            </div>
            {/* --------------- Variants Options ------------- */}
            <ProductSelect onVariantSelect={onVariantSelect} product={product} dataAttributes={dataAttributes} />
            {/* --------------- Bought Together ------------- */}
            {parentProduct.bought_together.length > 0 && <SoldTogether product={parentProduct} varProduct={product} />}
            {/* ---------------- Button -------------- */}
            <div className='flex items-center w-full max-sm:justify-center'>
                <Link href={product?.buildstation_url} target='_blank' className="w-full bg-primary hover:bg-lightPrimary cust-trans text-white py-3 rounded-lg flex items-center justify-center gap-2 max-lg:w-fit px-4 ">
                    {t('purchase_from_site')}
                </Link>
                <Image src='/buildStation.png' alt='build Station' width={400} height={200} className='w-[100px]' />
            </div>
            {/* ---------------- End Button ------------- */}
        </div>
    )
}
export default ContentProduct