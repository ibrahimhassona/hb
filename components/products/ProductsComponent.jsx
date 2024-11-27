import React from 'react';
import Card from './Card';
import { useTranslations } from 'next-intl';
import ProductSkeleton from '../ProductSkeleton';



const ProductsComponent = ({ className, data }) => {
  const t = useTranslations("product");
  // Show loader if data is not available
  if (!data) {
    return (
      <div className="min-h-[500px] shadow-sm p-4 rounded-md grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start h-fit w-full justify-items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={`skeleton-${index}`} className="w-full ">
            <ProductSkeleton className="h-full w-full animate-pulse" />
          </div>))}
      </div>
    );
  }

  // Show message if data array is empty
  if (data?.length === 0) {
    return (
      <div className="min-h-[500px] w-full flex items-center justify-center">
        <p className="text-gray-500 text-lg select-none">{t("no_products_founded")}</p>
      </div>
    );
  }

  return (
    <div
      className={`${className} min-h-[790px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start h-fit w-full justify-items-center`}
    >
      {data?.map((item, index) => (
        <Card key={item.id || item.slug || index} item={item} />
      ))}
    </div>
  );
};

export default ProductsComponent;
