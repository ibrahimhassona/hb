"use client"

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const SelectItems = ({ items, selectHandler, selectedValue, placeholder, all }) => {
    // ============= Hooks ====================
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("Locations")
    // ============= Handle Search =============== 
    const handleSearch = (e) => {
        setQuery(e.target.value);
    };
    // ========== Filter Data ===================
    const filterArray = items?.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    return (
        <div className="w-[300px] max-sm:w-[200px] text-sm border border-primary outline-1 rounded-sm  relative">
            <button className="w-full h-full p-2 flex items-center gap-1 text-primary " onClick={() => setIsOpen(!isOpen)}>
                <IoIosArrowUp className={`${isOpen ? 'rotate-180' : ''} text-xl cust-trans`} />
                <span className="flex-1">{selectedValue}</span>
            </button>
            {/* ============= Select ============= */}
            <div className={`${isOpen ? 'visible' : 'hidden'} w-full p-2 h-[200px] cust-trans absolute top-[40px] z-30 shadow-md rounded-sm right-0 bg-white`}>
                <input
                    type="text"
                    placeholder={placeholder}
                    className="py-1 px-2 text-sm w-full border rounded-sm my-2 focus:outline-primary"
                    onChange={handleSearch}
                    value={query}
                />
                <div className="w-full h-[calc(100%-40px)] overflow-auto cust-trans">
                    <span
                        className={`${query == "" && selectedValue == t("all") ? 'bg-primary text-white' : ''} my-1 line-clamp-1 cust-trans rounded-sm hover:bg-primary hover:text-white hover:cursor-pointer px-2 py-1`}
                        onClick={() => { selectHandler(t("all")); setQuery(""); setIsOpen(false); }}
                    >{t("all")}
                    </span>
                    {filterArray && filterArray?.map(item => (
                        <span
                            key={item.id}
                            className={`${item?.title === selectedValue ? 'bg-primary text-white' : ''} my-1 line-clamp-1 cust-trans rounded-sm hover:bg-primary hover:text-white hover:cursor-pointer px-2 py-1`}
                            onClick={() => { setIsOpen(false); selectHandler(item?.title); }}
                        >
                            {item?.title || 'No title available'}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SelectItems;