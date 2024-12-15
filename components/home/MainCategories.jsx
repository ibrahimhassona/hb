
"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { getFeaturedCategories } from '@/utils/hooks/featuredCategories';
import { grid } from 'ldrs';

const MainCategories = () => {
  const t = useTranslations("main_categories");
  const locale = useLocale()
  const featuredCategories = getFeaturedCategories(locale)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Register the grid loader
      grid.register();
    }
  }, [])
  if (featuredCategories.length < 6) {
    return (
      <div className="min-h-[500px] w-full flex items-center justify-center ">
        <l-grid size="100" speed="1" color="#2dbbab" />
      </div>
    )
  }
  return (
    <section className='px-4 xl:px-40 py-8'>
      <h1 className="font-[600] text-2xl text-darkGray  mb-6">
        {t("title")}
      </h1>
      {/* ============= DeskTop Screen =========== */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 max-lg:hidden ">
        {featuredCategories.slice(0, 6).map((category, index) => (
          <Link
            href={`/products?sub-category=${category.slug}`}
            key={category.id}
            className={`
              group
              cust-trans
              relative rounded-2xl overflow-hidden
              ${index === 0 || index === 5 ? 'md:col-span-2' : 'md:col-span-1'}
              w-full h-[287px] 
            `}
          >
            <Image
              src={category.image[0]?.url}
              alt={category.title}
              layout="fill"
              loading="lazy"
              quality={100} 
              placeholder="blur"
              blurDataURL={`/isNoavilable-${locale}.png`}
              className="rounded-2xl"
            />
            {/* ========== Title ======== */}
            <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center ${index == 0 ? 'justify-start' : index == 5 ? 'justify-end' : 'justify-center'} p-4`}>
              <h2 className="text-white text-xl text-center font-semibold backdrop-blur-sm bg-black/20 p-8 rounded-md group-hover:text-primary group-hover:bg-black/30  cust-trans">
                {category.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      {/* ============= Small Screen =========== */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {featuredCategories.slice(0, 6).map((category, index) => (
          <Link
            href={`/products?sub-category=${category.slug}`}
            key={category.id}
            className={`
              group
              relative rounded-2xl overflow-hidden
              ${index === 0 || index === 5 ? 'col-span-2 w-full' : 'col-span-1 w-full'} 
               
              h-[250px] max-sm:h-[200px] 
            `}
          >
            <Image
              src={category.image[0]?.url}
              alt={category.title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl w-full"
              loading="lazy"
            />
            {/* ========== Title ======== */}
            <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center ${index == 0 ? 'justify-start' : index == 5 ? 'justify-end' : 'justify-center'} p-4`}>
              <h2 className="text-white text-lg max-sm:text-sm text-center font-semibold backdrop-blur-sm bg-black/20 p-8 rounded-md group-hover:text-primary group-hover:bg-black/30  cust-trans">
                {category.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MainCategories;
