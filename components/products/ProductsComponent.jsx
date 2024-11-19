"use client"
import React, { useEffect } from 'react';
import Card from './Card';
import { grid } from 'ldrs';
import { useTranslations } from 'next-intl';



const ProductsComponent = ({ className, data }) => {
  const t = useTranslations("product");
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Register the grid loader
      grid.register();
    }
  }, [])
  // Show loader if data is not available
  if (!data) {
    return (
      <div className="min-h-[500px] w-full flex items-center justify-center">
        <l-grid size="100" speed="1" color="#2dbbab" />
      </div>
    );
  }

  // Show message if data array is empty
  if (data.length === 0) {
    return (
      <div className="min-h-[500px] w-full flex items-center justify-center">
        <p className="text-gray-500 text-lg select-none">{t("no_products_founded")}</p>
      </div>
    );
  }

  return (
    <div
      className={`${className} min-h-[500px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start h-fit w-full justify-items-center`}
    >
      {data.map((item, index) => (
        <Card key={item.id || item.slug || index} item={item} />
      ))}
    </div>
  );
};

export default ProductsComponent;
