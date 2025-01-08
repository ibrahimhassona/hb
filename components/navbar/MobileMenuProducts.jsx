import React from 'react';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { GoPlus } from "react-icons/go";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useTranslations } from 'next-intl';

const MobileMenuProducts = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    handleBack,
    setIsOpen,
    locale
}) => {
    const t = useTranslations("nav")
    const commonStyles = {
        categoryButton: "flex items-center justify-between border-b border-white/20 pb-2 cust-trans hover:text-white/80",
        productLink: "border-b border-white/20 pb-2 text-start cust-trans hover:text-white/80 "
    };

    return (
        <div className="animate-fade-left cust-trans text-white">
            {/* ------ Back Button ----- */}
            <button
                onClick={handleBack}
                className="flex items-center mb-6 text-lg gap-2 cust-trans hover:text-white/80"
                >
                <RiArrowGoBackFill className="text-xl" />
                {selectedCategory ? selectedCategory.title : t("products")}
            </button>

                {/* ------ Selected Main Category ----- */}
            {!selectedCategory ? (
                <div className="flex flex-col gap-4 text-white">
                    {categories.map((category) => (
                        <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category)}
                        className={commonStyles.categoryButton}
                        >
                            {category.title}
                            <GoPlus className="text-2xl" />
                        </button>
                    ))}
                </div>
            ) : (
                // ------ Sub Selected  -----
                <div className="flex flex-col gap-4 animate-fade-left text-white cust-trans">
                    {selectedCategory.sub_categories.slice(0,6).map((item) => (
                        <Link
                        href={`/products?sub-category=${item.slug}`}
                        key={item.id}
                        className={commonStyles.productLink}
                        onClick={() => setIsOpen(false)}
                        >
                            <span className='ms-6'>{item.title}</span>
                        </Link>
                    ))}
                    {/* ------ Show All Products In Category ----- */}
                    <Link
                        href={`/products?category=${selectedCategory.slug}`}
                        className="flex items-center justify-end gap-2 text-white hover:text-white/80 mt-2 cust-trans"
                        onClick={() => setIsOpen(false)} >
                        {t("ShowAll")}
                        <IoIosArrowBack className={`text-xl ${locale == 'en' ? ' rotate-180' : ''}`} />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenuProducts;