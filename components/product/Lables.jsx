import { useTranslations } from 'next-intl'
import React from 'react'

const Lables = ({ product }) => {
    const t = useTranslations("product")
    return (
        <>
            {product?.isFeature && <div className='absolute bg-red-500 top-14 end-0 w-[70px] line-clamp-1 animate-fade-up cust-trans flex items-center  px-2 py-1 rounded-s-md text-white z-20'>
                <span className='text-[10px] line-clamp-1'>{t('feature')}</span>
            </div>}
            {product?.stock == 0 && <div className={`absolute bg-orange-500 text-xs  w-[70px] animate-fade-up cust-trans ${product?.isFeature ? 'top-[82px]' : 'top-14'} end-0 flex items-center gap-2 px-2 py-1 rounded-s-md text-white z-20`}>
                <span className='text-[10px] line-clamp-1 '>{t("outOfStock")}</span>
            </div>}
        </>
    )
}

export default Lables