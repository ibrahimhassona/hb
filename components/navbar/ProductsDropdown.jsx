"use client"
import { getData } from '@/utils/functions/getData';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Loader from '../Loader';

export const useMainCategories = (locale) => {
  const url = 'main-categories?populate=*';

  return useQuery({
    queryKey: ['mainCategories', locale],
    queryFn: () => getData(locale, url),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
};

const ProductsDropdown = () => {
  // ======= Translation ==========
  const t = useTranslations('menu')
  // ======= Localization ==========
  const locale = useLocale()
  const { data, error, isLoading } = useMainCategories(locale);


  return (
    <section className={`-start-full absolute top-[calc(100%+10px)]  w-full lg:w-[600px] md:w-[600px] animate-fade-up cust-trans bg-white shadow-lg rounded-lg p-4 z-50`}>
      {
        isLoading ? <h1>{t('loading')}</h1> : <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {data?.map((category) => (
              <div key={category.id} className="space-y-4">
                <h3 className="text-md font-semibold text-start text-lightGray border-b pb-2 ps-2">
                  {category.title}
                </h3>
                <ul className="flex flex-col">
                  {category.sub_categories.map((subCategory) => (
                    <li key={subCategory.id}>
                      <Link
                        href={`/products?sub-category=${subCategory.slug}`}
                        className="block capitalize text-start text-gray-600 hover:text-primary cust-trans py-1.5 px-2 rounded-md hover:bg-teal-50"
                      >
                        {subCategory.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products?category=${category.slug}`}
                  className="text-primary hover:text-primary/80 text-right flex items-center gap-2 w-full cust-trans text-sm font-medium py-1.5 px-2 hover:bg-teal-50"
                >
                  {t('ShowAll')}
                  <MdKeyboardDoubleArrowLeft className={`${locale=='en'?'rotate-180':''}`} />
                </Link>
              </div>
            ))}
          </div>
        </>
      }
    </section>
  );
};

export default ProductsDropdown;