import NavBar from '@/components/navbar/NavBar';
import React from 'react'
import TermsContent from './TermsContent';
import Path from '@/components/Path';
// ================= Meta Data ==================
export async function generateMetadata({ params }) {
    const locale = params.locale;
    let metadata = {};

    if (locale == 'ar') {
        metadata = {
            title: 'الشروط والأحكام',
            description: 'نرحب بك في خدماتنا. هذه الشروط والأحكام تحدد القواعد والتوجيهات للاستخدام الأمثل لموقعنا أو تطبيقنا.',
            charset: "UTF-8",
            robots: "index, follow",
        };
    } else {
        metadata = {
            title: 'Terms and Conditions',
            description: 'Welcome to our services. These terms and conditions outline the rules and guidelines for using our website or application.',
            charset: "UTF-8",
            robots: "index, follow",
        };
    }

    return metadata;
}

const page = () => {
    const dataPath = [
        { title: "الرئيسية", url: '/' },
        { title: "الشروط والأحكام", url: '/cms/terms-and-conditions' },
    ]
    return (
        <>
            <NavBar />
            <div className=" mx-auto px-4 xl:px-40 py-8 text-start" >
                <Path data={dataPath} className={'text-darkGray'} />
                {/* ========= Content ========== */}
                <TermsContent />
            </div>
        </>
    );

}

export default page