import React from 'react'
import { FaCheck, FaClipboardList, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';

const TermsContent = () => {
    return (
        <div className="mx-auto bg-white shadow-sm rounded-md p-6 cust-trans animate-fade-up">
            <h1 className="text-2xl font-bold text-primary mb-6 border-b-2 border-gray-200 pb-4">
                الشروط والأحكام
            </h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-darkGray mb-4 flex items-center">
                    <FaClipboardList className="ml-3 text-blue-600" />
                    مقدمة
                </h2>
                <p className="text-darkGray leading-relaxed">
                    نرحب بك في خدماتنا. هذه الشروط والأحكام تحدد القواعد والتوجيهات للاستخدام الأمثل لموقعنا أو تطبيقنا.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-darkGray mb-4 flex items-center">
                    <FaCheck className="ml-3 text-primary" />
                    قبول الشروط
                </h2>
                <p className="text-darkGray leading-relaxed">
                    باستخدامك لهذه المنصة، فإنك توافق صراحةً على جميع الشروط والأحكام المذكورة أدناه.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-darkGray mb-4 flex items-center">
                    <FaShieldAlt className="ml-3 text-purple-600" />
                    حقوق المستخدم
                </h2>
                <ul className="list-disc pr-6 text-darkGray space-y-2">
                    <li>الحق في استخدام الخدمات وفقًا للشروط المحددة</li>
                    <li>الحماية الكاملة لبياناتك الشخصية</li>
                    <li>إمكانية إلغاء الحساب في أي وقت</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-darkGray mb-4 flex items-center">
                    <FaBalanceScale className="ml-3 text-red-600" />
                    المسؤولية القانونية
                </h2>
                <p className="text-darkGray leading-relaxed">
                    نحن غير مسؤولين عن أي أضرار مباشرة أو غير مباشرة تنتج عن استخدام الخدمة بشكل مخالف للشروط.
                </p>
            </section>

            <div className="bg-gray-100 p-4 rounded-lg mt-6 text-center">
                <p className="text-darkGray">
                    آخر تحديث: نوفمبر 2024
                </p>
            </div>
        </div>
    )
}

export default TermsContent