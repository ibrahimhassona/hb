import React from 'react';
import VariantSelect from './VariantSelect';
import { useTranslations } from 'next-intl';


const ProductSelect = ({ product }) => {
    console.log(product?.colors)
    const t = useTranslations("product")
    return (
        <div className="grid grid-cols-2 items-center gap-2 mb-4">
            {/* Capacity Select */}
            {product?.capacity.length > 0 && <VariantSelect title={t("size")} data={product?.capacity} />}
            {/* Size Select */}
            {product?.size.length > 0 && <VariantSelect title={t("capacity")} data={product?.size} />}
        </div >
    );
};

export default ProductSelect;