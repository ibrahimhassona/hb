import Image from 'next/image'
import React from 'react'

const ContentProduct = () => {
    return (
        <div className="w-[50%] max-lg:w-full text-right text-lightGray">
            <div className="mb-6">
                <h4 className="text-primary text-sm mb-2">سيدر</h4>
                <h1 className="text-2xl font-bold text-lightGray mb-4">جهاز تعطير ذكي سيدر</h1>
                <p className="text-lightGray text-sm leading-relaxed">
                    يمكن التحكم في الجهاز عن طريق تطبيق هاتف ذكي (يتم تحميله بالباركود الموجود داخل العلبة) أو من خلال الجهاز مباشرة.
                </p>
            </div>

            <div className="mb-6 text-lightGray">
                <h2 className="font-bold mb-4">اماكن استخدام الجهاز :</h2>
                <ul className="space-y-2">
                    <li className="before:content-['✓'] before:mx-2">تعطير الغرف</li>
                    <li className="before:content-['✓'] before:mx-2">تعطير الشقق والفلل</li>
                    <li className="before:content-['✓'] before:mx-2">تعطير المكاتب</li>
                    <li className="before:content-['✓'] before:mx-2">تعطير المجمعات والمولات</li>
                    <li className="before:content-['✓'] before:mx-2">تعطير الاستراحات والأماكن الترفيهية</li>
                    <li className="before:content-['✓'] before:mx-2">تعطير المعارض التجارية والصالونات</li>
                </ul>
            </div>

            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">السعر شامل الضريبة</span>
                    <span className="text-primary text-2xl font-bold">1,495 <small className='text-xs text-lightGray'>ريال</small></span>
                </div>
            </div>

            <div className='flex items-center w-full max-sm:justify-center'>
                <button className="w-full bg-primary hover:bg-lightPrimary cust-trans text-white py-3 rounded-lg flex items-center justify-center gap-2 max-lg:w-fit px-4 ">
                    الشراء من موقع محطة البناء
                </button>
                <Image src='/buildStation.png' alt='build Station' width={400} height={400} className='w-[100px]' />
            </div>
        </div>
    )
}
export default ContentProduct