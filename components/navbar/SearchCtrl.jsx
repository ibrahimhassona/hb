"use client"
import { useLocale, useTranslations } from 'next-intl'
import React, { useEffect, useRef, useState } from 'react'
import { IoClose } from "react-icons/io5"
import { IoIosSearch } from "react-icons/io"
import { useQuery } from '@tanstack/react-query'
import { getData } from '@/utils/functions/getData'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Search hook with proper conditions
const useSearch = (locale, value) => {
    const enabled = value?.length >= 3;
    const url = enabled
        ? `products?populate=*&filters[$or][0][title][$containsi]=${value}&filters[$or][1][SKU][$containsi]=${value}`
        : null;
    return useQuery({
        queryKey: ['search', locale, value],
        queryFn: () => getData(locale, url),
        enabled: enabled,
        staleTime: 1000 * 60 * 5,
        retry: 2,
    });
};

const SearchCtrl = ({ props }) => {
    const t = useTranslations("nav");
    const locale = useLocale();
    const inputRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const router = useRouter();
    // ========== Get Data From Hook ============
    const { data: searchResults, isLoading } = useSearch(locale, value);
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);
    // // ================ Enter key To open the Search Result Page  ================
    // useEffect(() => {
    //     const handleKeyDown = (event) => {
    //         if (event.keyCode === 13 && searchResults?.length > 0) {
    //             const newUrl = `/products/searchItemsByStr?searchText=${encodeURIComponent(searchText)}`;
    //             router.replace(newUrl);
    //         }
    //     };
    //     document.addEventListener('keydown', handleKeyDown);
    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [searchResults, router]);
    // ---- Put Value And Target ------
    const handleValue = (e) => {
        setValue(e.target.value);
        if (e.target.value.length > 0 && !isOpen) {
            setIsOpen(true);
        }
    };
    // ---- Close And Reset value ------
    const handleClose = () => {
        setIsOpen(false);
        setValue("");
    };
    // =============== Highlighted Text ==============
    const HighlightedText = ({ text, searchValue }) => {
        if (!searchValue) return text;

        const parts = text.split(new RegExp(`(${searchValue})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === searchValue.toLowerCase() ? (
                <span key={index} className="bg-lightPrimary text-white">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <div className="">
            {/* ============= Search SECTION ============= */}
            <div className=''>
                <div className={`border-gray-50/30 border cust-trans 
                ${isOpen ? 'animate-flip-up' : 'hidden'} rounded-sm text-darkGray  flex px-2 items-center bg-white shadow max-md:absolute top-[calc(100%+1px)]  max-md:w-[100%] max-md:h-[50px]   max-md:left-0 w-[300px] max-md:rounded-sm left-[10%] z-30`}
                >
                    <IoClose
                        size={22}
                        onClick={handleClose}
                        className="cursor-pointer cust-trans hover:text-primary ml-2"
                    />
                    <input
                        onChange={handleValue}
                        value={value}
                        ref={inputRef}
                        type="text"
                        className="text-sm text-darkGray cust-trans rounded-md  outline-none font-normal w-[200px] flex-1 placeholder:text-darkGray placeholder:text-xs bg-transparent px-2 py-2"
                        placeholder={t('searchPlaceholder')}
                    />
                </div>
                {/* ============= Search BTN ============= */}
                <button
                    className={`cust-trans cursor-pointer flex items-center
                    ${isOpen ? 'hidden' : 'animate-flip-up'}`}
                    onClick={() => setIsOpen(true)}
                >
                    <IoIosSearch
                        size={20}
                        className={`text-${props?.text || 'darkGray'} cust-trans hover:text-primary`}
                    />
                </button>
            </div>
            {/* Search Results Dropdown */}
            {isOpen && value.length >= 3 && (
                <div className="absolute  max-md:top-[85px] max-md:w-[100%]  max-md:left-0 top-[36px] animate-fade-up cust-trans  w-[300px] bg-white mt-1 rounded-sm shadow z-30">
                    {isLoading ? (
                        <div className="p-4 text-center text-gray-600">
                            <div className="flex  gap-1 items-center justify-center w-full">
                                {/* Spinner */}
                                <span className="w-[20px] h-[20px] border-2 border-gray-100 border-t-lightPrimary rounded-full animate-spin"></span>
                                {t('loading')}...
                            </div>
                        </div>
                    ) : searchResults?.length > 0 ? (
                        <div className="max-h-60 overflow-y-auto flex flex-col gap-1 py-4">
                            {searchResults?.map((product) => (
                                <div
                                    onClick={() => {
                                        const newUrl = `/products/${encodeURIComponent(product.slug)}`;
                                        router.replace(newUrl);
                                    }}
                                    className='flex cursor-pointer rounded-sm gap-2 items-center w-[90%] py-1 px-2 shadow-sm m-auto bg-gray-50 border border-gray-200 hover:border-green-300 cust-trans' key={product.id}>
                                    <Image src={product?.main_image.url} height={100} width={100} className='w-[50px] rounded-sm' alt={product?.title} />
                                    <div className='flex flex-col items-start h-full justify-between w-full gap-2'>
                                        <h2 className='text-darkGray font-semibold line-clamp-1'>
                                            <HighlightedText
                                                text={product.title}
                                                searchValue={value}
                                            />
                                        </h2>
                                        <div className='w-full flex items-center justify-between '>
                                            <span className='text-xs  text-gray-400'> {t("sku")}: <HighlightedText
                                                text={product.SKU}
                                                searchValue={value}
                                            />
                                            </span>
                                            {/* price */}
                                            <span className='text-primary text-xs '>{product.price.toLocaleString()}{" "}{t("sar")}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button className='text-darkGray  hover:text-primary cust-trans border border-darkGray hover:border-primary w-fit px-3 text-xs py-1 m-auto mt-4 rounded-sm '>{t("visit_results")}</button>
                        </div>
                    ) : (
                        <div className="p-4 text-center text-gray-600">
                            {t("noResults")}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchCtrl;

 