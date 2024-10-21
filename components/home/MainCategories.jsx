import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const MainCategories = () => {
  const t = useTranslations("main_categories");

  const categories = [
    { id: 1, title: 'أجهزة التعطير الذكية', image: '/section1/card_1.png' },
    { id: 2, title: 'الحياة الذكية', image: '/section1/card_2.png' },
    { id: 3, title: 'الإضاءة الذكية', image: '/section1/card_3.png' },
    { id: 4, title: 'أجهزة متعددة الاستخدام', image: '/section1/card_4.png' },
    { id: 5, title: 'اندروميدا', image: '/section1/card_5.png' },
    { id: 6, title: 'الخزائن الذكية', image: '/section1/card_6.png' },
  ];

  return (
    <section className='px-4 xl:px-40 py-8'>
      <h1 className="font-[600] text-[30px] text-darkGray  mb-6">
        {t("title")}
      </h1>
      {/* ============= DeskTop Screen =========== */}
      <Link href='/' className="grid grid-cols-1 gap-4 md:grid-cols-4 max-lg:hidden ">
        {categories.map((category, index) => (
          <div
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
              src={category.image}
              alt={category.title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            {/* ========== Title ======== */}
            <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center ${index == 0 ? 'justify-start' : index == 5 ? 'justify-end' : 'justify-center'} p-4`}>
              <h2 className="text-white text-xl text-center font-semibold backdrop-blur-sm bg-black/20 p-8 rounded-md group-hover:text-primary group-hover:bg-black/30  cust-trans">
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </Link>
      {/* ============= Small Screen =========== */}
      <Link href='/' className="grid grid-cols-2 gap-4 lg:hidden">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`
              group
              relative rounded-2xl overflow-hidden
              ${index === 0 || index === 5 ? 'col-span-2 w-full' : 'col-span-1 w-full'} 
               
              h-[250px] max-sm:h-[200px] 
            `}
          >
            <Image
              src={category.image}
              alt={category.title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl w-full"
            />
            {/* ========== Title ======== */}
            <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center ${index == 0 ? 'justify-start' : index == 5 ? 'justify-end' : 'justify-center'} p-4`}>
              <h2 className="text-white text-lg text-center font-semibold backdrop-blur-sm bg-black/20 p-8 rounded-md group-hover:text-primary group-hover:bg-black/30  cust-trans">
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </Link>
    </section>
  );
};

export default MainCategories;
