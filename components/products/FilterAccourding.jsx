"use client";
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

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

const FilterAccordion = ({ className }) => {
  const [openSections, setOpenSections] = useState({
    categories: false,
    subcategories: false,
    price: false
  });
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setSelectedSubcategories([]); // Reset selected subcategories
    // Automatically open subcategories section upon category selection
    setOpenSections(prev => ({
      ...prev,
      subcategories: true
    }));
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

  const AccordionHeader = ({ title, isOpen, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 border-b border-gray-200 text-lightGray"
    >
      <span className=" font-medium">{title}</span>
      <IoIosArrowDown 
        size={20}
        className={`cust-trans ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      />
    </button>
  );

  return (
    <div className={`bg-white rounded-lg shadow text-lightGray ${className}`}>
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">التصفية حسب</h2>
      </div>

      {/* Categories Section */}
      <div>
        <AccordionHeader 
          title="الفئات"
          isOpen={openSections.categories}
          onClick={() => toggleSection('categories')}
        />
        <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          openSections.categories ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="p-4 space-y-2">
            {Object.entries(categories).map(([key, category]) => (
              <div 
                key={key} 
                onClick={() => handleCategoryChange(key)} 
                className={`flex items-center gap-2 cursor-pointer p-2 rounded-md  cust-trans hover:bg-teal-50 hover:text-primary
                  ${selectedCategory === key ? 'bg-teal-50 text-primary' : 'bg-white text-lightGray'}`}
              >
                <span className="text-sm">{category.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subcategories Section */}
      <div>
        <AccordionHeader 
          title="الفئة الفرعية"
          isOpen={openSections.subcategories}
          onClick={() => toggleSection('subcategories')}
        />
        <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          openSections.subcategories ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="p-4 space-y-2">
            {selectedCategory ? (
              categories[selectedCategory].items.map(item => (
                <div 
                  key={item.id} 
                  onClick={() => handleSubcategoryChange(item.id)} 
                  className={`flex items-center gap-2 cursor-pointer p-2  rounded-md cust-trans hover:bg-teal-50 hover:text-primary
                    ${selectedSubcategories.includes(item.id) ?  'bg-teal-50 text-primary' : 'bg-white text-lightGray'}`}
                >
                  <span className="text-sm">{item.name}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">الرجاء اختيار فئة أولاً</p>
            )}
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div>
        <AccordionHeader 
          title="السعر"
          isOpen={openSections.price}
          onClick={() => toggleSection('price')}
        />
        <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          openSections.price ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="p-4 space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="price" className="form-radio" />
              <span className="text-sm">أقل من 100 ريال</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="price" className="form-radio" />
              <span className="text-sm">100 - 500 ريال</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="price" className="form-radio" />
              <span className="text-sm">500 - 1000 ريال</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="price" className="form-radio" />
              <span className="text-sm">أكثر من 1000 ريال</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
