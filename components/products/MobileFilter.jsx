"use client";
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
// ========== Data Used To make Filter ==========
const categories = {
    smartLife: {
        title: 'الحياة الذكية',
        items: [
            { id: 'smart-1', name: 'مفاتيح ذكية' },
            { id: 'smart-2', name: 'مراقبة الضغط الذكية' },
            { id: 'smart-3', name: 'مكيفات الهواء' },
            { id: 'smart-4', name: 'محابس ذكية' },
            { id: 'smart-5', name: 'ستائر ذكية' },
            { id: 'smart-6', name: 'قفل الباب الذكي' },
            { id: 'smart-7', name: 'ميزان ذكي' }
        ],
    },
    smartLighting: {
        title: 'الإضاءة الذكية',
        items: [
            { id: 'light-1', name: 'إضاءة أرضية' },
            { id: 'light-2', name: 'إضاءة طاولة' },
            { id: 'light-3', name: 'إضاءة معلقة' },
            { id: 'light-4', name: 'إضاءة مخفية' }
        ],
    },
    multiUseDevices: {
        title: 'الأجهزة متعددة الاستخدام',
        items: [
            { id: 'multi-1', name: 'أجهزة التحضير الذكية' },
            { id: 'multi-2', name: 'الجرائد الذكية' },
            { id: 'multi-3', name: 'اندرويد تي' },
            { id: 'multi-4', name: 'مرآة ذكية' },
            { id: 'multi-5', name: 'حامل أكواب وسجائر' }
        ],
    }
};
// ========== Mobile Filter Component ==========
const MobileFilter = ({ className }) => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const handleSectionClick = (section) => {
        setSelectedSection(section === selectedSection ? null : section);
    };

    const handleCategoryChange = (categoryKey) => {
        setSelectedCategory(categoryKey);
        setSelectedSubcategories([]);
    };

    const handleSubcategoryChange = (itemId) => {
        setSelectedSubcategories(prev => {
            const isSelected = prev.includes(itemId);
            if (isSelected) {
                return prev.filter(id => id !== itemId);
            } else {
                return [...prev, itemId];
            }
        });
    };

    const FilterButton = ({ title, isActive, onClick }) => (
        <button
            onClick={onClick}
            className={`flex items-center justify-between p-3 rounded-md border text-sm
        ${isActive ? 'bg-teal-50 border-primary text-primary' : 'bg-white border-gray-200 text-lightGray'}`}
        >
            <span className='text-sm max-sm:text-xs'>{title}</span>
            <IoIosArrowDown
                size={16}
                className={`mr-1 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}
            />
        </button>
    );
    // ======= Prices Options ========
    const priceOptions = [
        { id: 'price-1', label: 'أقل من 100 ريال' },
        { id: 'price-2', label: '100 - 500 ريال' },
        { id: 'price-3', label: '500 - 1000 ريال' },
        { id: 'price-4', label: 'أكثر من 1000 ريال' }
    ];
    // ======= The component ========
    return (
        <div className={`bg-white ${className} w-full`}>
            <div className='flex items-center justify-between w-full'>
                {/* ====== Section ======= */}
                <div className='flex flex-col w-full '>
                    {/* -------------- Header ----------------*/}
                    <div className="flex gap-2 p-4 bg-white w-full items-center justify-between max-sm:flex-col max-sm:gap-6">
                        <h2 className=" text-lightGray font-semibold ">تصفية حسب</h2>
                        {/* --------------- Filter Buttons -------------- */}
                        <div className='flex items-center gap-2'>
                            <FilterButton
                                title="الفئات"
                                isActive={selectedSection === 'categories'}
                                onClick={() => handleSectionClick('categories')}
                            />
                            <FilterButton
                                title="الفئة العمرية"
                                isActive={selectedSection === 'subcategories'}
                                onClick={() => handleSectionClick('subcategories')}
                            />
                            <FilterButton
                                title="السعر"
                                isActive={selectedSection === 'price'}
                                onClick={() => handleSectionClick('price')}
                            />
                        </div>
                    </div>

                    {/*------------ Filter Content --------------- */}
                    <div className={`bg-white mt-1 cust-trans  relative h-full z-30
                     ${selectedSection ? 'max-h-96' : 'max-h-0'}`}>

                        {/* --------- Categories Content --------- */}
                        {selectedSection === 'categories' && (
                            <div className="px-4 py-2 flex flex-col gap-1 absolute w-full -top-3 drop-shadow-md right-0 bg-white rounded-md cust-trans animate-fade-up  shadow-md">
                                {Object.entries(categories).map(([key, category]) => (
                                    <div
                                        key={key}
                                        onClick={() => handleCategoryChange(key)}
                                        className={`p-2 rounded-md cursor-pointer cust-trans text-sm text-lightGray
                                        ${selectedCategory === key ? 'bg-teal-50 text-primary' : 'hover:bg-gray-50'}`}
                                    >
                                        {category.title}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/*--------- Subcategories Content ---------*/}
                        {selectedSection === 'subcategories' && (
                            <div className="px-4 py-2 flex flex-col gap-1 absolute w-full -top-3 drop-shadow-md right-0 bg-white rounded-md cust-trans animate-fade-up  shadow-md">
                                {selectedCategory ? (
                                    categories[selectedCategory].items.map(item => (
                                        <div
                                            key={item.id}
                                            onClick={() => handleSubcategoryChange(item.id)}
                                            className={`p-2 rounded-md cursor-pointer cust-trans text-sm text-lightGray
                                            ${selectedSubcategories.includes(item.id) ? 'bg-teal-50 text-primary' : 'hover:bg-gray-50'}`}
                                        >
                                            {item.name}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 p-3 text-sm">الرجاء اختيار فئة أولاً</p>
                                )}
                            </div>
                        )}
                        {/* --------- Price Content --------- */}
                        {selectedSection === 'price' && (
                            <div className="px-4 py-2 flex flex-col gap-1 absolute w-full -top-3 drop-shadow-md right-0 bg-white rounded-md cust-trans animate-fade-up  shadow-md ">
                                {priceOptions.map(option => (
                                    <div
                                        key={option.id}
                                        onClick={() => setSelectedPrice(option.id)}
                                        className={`p-2 rounded-md cursor-pointer cust-trans text-sm text-lightGray
                                        ${selectedPrice === option.id ? 'bg-teal-50 text-primary' : 'hover:bg-gray-50'}`}
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFilter;