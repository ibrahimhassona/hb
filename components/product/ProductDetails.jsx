
"use client"
import { useQuery } from "@tanstack/react-query";
import ContentProduct from "./ContentProduct";
import GalleryProduct from "./GalleryProduct";
import { getData } from "@/utils/functions/getData";
import { useLocale } from "next-intl";
import { useState } from "react";
// ----------- Attributes ----------
const useAttributesProduct = (locale, value) => {
  const url = `products?populate=*&filters[slug][$eq]=${value}&filters[isVisible][$null]=true&pagination[pageSize]=100`
  return useQuery({
    queryKey: ['Attributes', locale, value],
    queryFn: () => getData(locale, url),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  })
}
const ProductDetails = ({ product, categories }) => {
  const locale = useLocale()
  // ----------- Logic for select attributes ---------
  const { data: dataAttributes } = useAttributesProduct(locale, product.slug)
  const [selectedVariant, setSelectedVariant] = useState({ slug: null })
  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant)
  }
  // console.log("selectedVariant=====>", selectedVariant.Variant_Type, selectedVariant)
  console.log("=====>", product.main_category, product)
  return (
    <div className="flex flex-row max-lg:flex-col justify-between gap-8  max-w-7xl ">
      {/* Gallery Section */}
      <GalleryProduct product={selectedVariant.slug != null ? selectedVariant : product} />
      {/* Content Section */}
      <ContentProduct
        product={selectedVariant.slug != null ? selectedVariant : product}
        dataAttributes={dataAttributes}
        onVariantSelect={handleVariantSelect}
        categories={categories}
      />
    </div>
  );
};

export default ProductDetails;