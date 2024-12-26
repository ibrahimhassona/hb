import React from 'react';
import VariantSelect from './VariantSelect';
import { useTranslations } from 'next-intl';


const ProductSelect = ({ product, dataAttributes, onVariantSelect }) => {
    const t = useTranslations("product")
    const sizes = dataAttributes?.filter(item => item.Variant_Type == "size")
    const colors = dataAttributes?.filter(item => item.Variant_Type == "color")
    // console.log("sizes ======>", sizes)
    // console.log("colors ======>", colors)
    return (
        <div className="grid grid-cols-2 items-center gap-2 mb-4">
            {/* Capacity Select */}
            {sizes?.length > 0 && <VariantSelect title={t("size")} data={sizes} onVariantSelect={onVariantSelect} />}
            {/* Size Select */}
            {colors?.length > 0 && <VariantSelect title={t("color")} data={colors} onVariantSelect={onVariantSelect} />}
        </div >
    );
};

export default ProductSelect;