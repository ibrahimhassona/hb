import Link from 'next/link';
import React from 'react';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const ProductsDropdown = () => {
  const menuItems = {
    'الحياة الذكية': [
      { id: 'smart-1', name: 'مفاتيح ذكية' },
      { id: 'smart-2', name: 'مراقبة الضغط الذكية' },
      { id: 'smart-3', name: 'مكيفات الهواء' },
      { id: 'smart-4', name: 'محابس ذكية' },
      { id: 'smart-5', name: 'ستائر ذكية' },
      { id: 'smart-6', name: 'قفل الباب الذكي' },
      { id: 'smart-7', name: 'ميزان ذكي' }
    ],
    'الإضاءة الذكية': [
      { id: 'light-1', name: 'إضاءة أرضية' },
      { id: 'light-2', name: 'إضاءة طاولة' },
      { id: 'light-3', name: 'إضاءة معلقة' },
      { id: 'light-4', name: 'إضاءة مخفية' }
    ],
    'الأجهزة متعددة الاستخدام': [
      { id: 'multi-1', name: 'أجهزة التحضير الذكية' },
      { id: 'multi-2', name: 'الجرائد الذكية' },
      { id: 'multi-3', name: 'اندرويد تي' },
      { id: 'multi-4', name: 'مرآة ذكية' },
      { id: 'multi-5', name: 'حامل أكواب وسجائر' }
    ]
  };

  return (
    <section className="absolute top-[calc(100%+10px)] -right-full w-full lg:w-[600px] md:w-[600px] animate-fade-up cust-trans bg-white shadow-lg rounded-lg p-4 z-50">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
      {Object.entries(menuItems).map(([category, items]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-md font-semibold text-right text-lightGray border-b pb-2 ps-2">
            {category}
          </h3>
          <ul className="flex flex-col">
            {items.map(({ id, name }) => (
              <li key={id}>
                <Link 
                  href={`/products/${id}`}
                  className="block text-right text-gray-600 hover:text-primary cust-trans py-1.5 px-2 rounded-md hover:bg-teal-50"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href={`#`}
            className="text-primary hover:text-primary/80 text-right flex items-center gap-2 w-full cust-trans text-sm font-medium py-1.5 px-2  hover:bg-teal-50"
          >
            عرض الكل
            <MdKeyboardDoubleArrowLeft/>
          </Link>
        </div>
      ))}
    </div>
  </section>
  );
};

export default ProductsDropdown;
