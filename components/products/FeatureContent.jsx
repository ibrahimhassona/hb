"use client"
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { useIsFeature } from '../home/FeaturedProducts'
import Path from '../Path'
import Card from './Card'
import ProductSkeleton from '../ProductSkeleton'

const FeatureContent = () => {
    const locale = useLocale()
    const t = useTranslations("nav")
    const { data: products, isLoading } = useIsFeature(locale)

    const dataPath = [
        { title: t("home"), url: '/' },
        { title: `${t("feature_result")}`, url: '#' },
    ]
    if (!products) {
        return (
          <div className="my-6 px-4 xl:px-40 min-h-[500px] shadow-sm p-4 rounded-md grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start h-fit w-full justify-items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="w-full ">
                <ProductSkeleton className="h-full w-full animate-pulse" />
              </div>))}
          </div>
        );
      }
    
    return (
        <div className='px-4 xl:px-40'>
            <Path data={dataPath} className={'text-darkGray'} />
            <h1 className='text-2xl my-4 max-md:text-lg font-bold text-start text-darkGray'>
                {t("feature_result")}
            </h1>
            <div className='p-2 shadow-sm rounded-md my-6'>
                <div className="min-h-[500px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start h-fit w-full justify-items-center">
                    { 
                        products?.map((item, index) => (
                            <Card 
                                search={true} 
                                item={item} 
                                key={item.id || index} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FeatureContent