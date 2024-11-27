import NavBar from '@/components/navbar/NavBar';
import React from 'react'
import TermsContent from './TermsContent';
import Path from '@/components/Path';

const page = () => {
    const dataPath = [
        { title: "الرئيسية", url: '/' },
        { title: "الشروط والأحكام", url: '/cms/terms-and-conditions' },
    ]
    return (
        <>
            <NavBar />
                <div className=" mx-auto px-4 xl:px-40 py-8 text-start" >
                    <Path  data={dataPath} className={'text-darkGray'}/>
                    {/* ========= Content ========== */}
                    <TermsContent/>
            </div>
        </>
    );

}

export default page