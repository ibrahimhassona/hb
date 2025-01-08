import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Lables from '../product/Lables';
export const ProductCard = ({ product, locale }) => {
    const t = useTranslations("product")
    return (
        <div className="relative rounded-lg overflow-hidden shadow-md h-64 max-sm:h-[200px] border border-gray-100 group cursor-pointer ">
           <Lables product={product} />
            {product?.images_url && (
                <Image
                    src={product.images_url.split(",")[0]}
                    alt={product.title || ''}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between max-sm:text-xs items-start flex-col gap-1 border border-[#C0C0C0] p-2 rounded-md overflow-hidden bg-black/30 backdrop-blur-lg">
                    {/* ------- Sub Categories --------- */}
                    <div className='flex items-center gap-1 w-full'>
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = `/products?sub-category=${product.main_categories[0].slug}`;
                            }}
                            className="text-[#C0C0C0]  text-xs line-clamp-1 bg-black/40 px-2 py-[2px] rounded-md w-fit hover:text-white cust-trans cursor-pointer"
                        >
                            {product.sub_categories[0]?.title}
                        </span>
                       { product.main_categories[1] && <span
                            onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = `/products?sub-category=${product.main_categories[1].slug}`;
                            }}
                            className="text-[#C0C0C0]  text-xs line-clamp-1 bg-black/40 px-2 py-[2px] rounded-md w-fit hover:text-white cust-trans cursor-pointer"
                        >
                            {product.sub_categories[1]?.title}
                        </span>}
                    </div>
                    {/* ------- End Sub Categories --------- */}
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-sm max-md:text-[14px] max-sm:text-xs font-semibold mb-1 text-start text-white line-clamp-1">
                            {product?.title?.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
                        </h3>
                        {/* ---- Price ----- */}
                        <p className="text-gray-200 text-start text-sm max-md:text-[10px] flex">
                            {product?.price?.toLocaleString()} <span className=' text-[9px]'>{t("sar")}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};