"use client"
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from 'react'
import { useTranslations } from "next-intl";
import Image from "next/image";

const VariantSelect = ({ data, title, className, onVariantSelect }) => {
    const t = useTranslations("product")
    const [selected, setSelected] = useState({ text: t("select_value"), value: null })
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`w-full relative  ${className} flex flex-col `}>

            <div onClick={() => setIsOpen(!isOpen)} className={`text-darkGray border ${isOpen ? 'border-gray-200 bg-green-100 text-primary' : 'border-gray-100'} cust-trans px-4 py-1 bg-gray-50 flex items-center gap-2 justify-between rounded-md cursor-pointer`}>
                <span className=" capitalize select-none max-sm:text-sm line-clamp-1" >{title} : {selected.text}</span>
                <IoIosArrowDown className={`cust-trans ${isOpen ? ' rotate-180' : ''}`} />
            </div>
            {isOpen &&
                <div className="flex z-20 text-start flex-col absolute bottom-[105%] border w-full rounded-md shadow-sm  py-1 gap-1 bg-white animate-fade-up max-h-60 overflow-y-auto cust-trans px-2 ">
                    {data.map((item) => (
                        <span onClick={() => { setSelected({ text: item.var_value, value: item.var_value }); setIsOpen(false) ;onVariantSelect(item) }} key={item.id} value={item.var_value} className={`${selected.value == item.SKU ? 'bg-gray-50 text-primary' : 'text-darkGray'} hover:text-primary hover:bg-green-50 flex items-center justify-between  shadow-sm py-2 rounded-sm px-2 w-full cust-trans text-sm cursor-pointer  capitalize `}>
                            {item.var_value}
                            <Image alt="variant Image" src={item.images_url.split(',')[0]} width={100} height={100} className="w-[30px] h-[30px] border border-primary rounded-md" />
                        </span>
                    ))}
                </div>
            }
        </div>
    )
}

export default VariantSelect