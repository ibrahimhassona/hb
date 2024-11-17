"use client"
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from 'react'
import { useTranslations } from "next-intl";

const VariantSelect = ({ data, title ,className}) => {
    const t = useTranslations("product")
    const [selected, setSelected] = useState({ text:t("select_value"), value: "" })
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`w-full relative  ${className} flex flex-col `}>
            
            <div onClick={()=>setIsOpen(!isOpen)} className={`text-primary border ${isOpen?'border-primary':'border-green-100'} cust-trans px-4 py-1 flex items-center gap-2 justify-between rounded-md cursor-pointer`}>
                <span className="text-primary capitalize select-none max-sm:text-sm" >{title} : {selected.text}</span>
                <IoIosArrowDown className={`cust-trans ${isOpen?' rotate-180':''}`}/>
            </div>
            {isOpen &&
                <div className="flex z-20 text-start flex-col absolute top-[105%] border w-full rounded-md shadow-sm  py-1 gap-1 bg-white animate-flip-up cust-trans px-2">
                    {data.map((item) => (
                        <span onClick={()=>{setSelected({text:item.name,value:item.SKU});setIsOpen(false)}} key={item.id} value={item.SKU} className={`${selected.value==item.SKU?'bg-green-50 text-primary':'text-darkGray'} hover:text-primary hover:bg-green-50 rounded-md px-2 w-full cust-trans max-sm:text-sm cursor-pointer capitalize py-1`}>
                            {item.name}
                        </span>
                    ))}
                </div>
            }
        </div>
    )
}

export default VariantSelect