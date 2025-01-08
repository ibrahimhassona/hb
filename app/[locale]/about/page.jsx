import AboutContent from '@/components/about/AboutContent';
import NavBar from '@/components/navbar/NavBar';
import { getData } from '@/utils/functions/getData';

import React from 'react';
// ================= Meta Data ==================
export async function generateMetadata({ params }) {
    const locale = params.locale;
    const data = await getData(locale, 'about-sections?populate=*')
    const metadata = {
        title: data && data[1].Section_attributes[0].title,
        description: data && data[1].Section_attributes[0].description,
        charset: "UTF-8",
        robots: "index, follow",
    }
    return metadata;
    // console.log("metadataAbout====>", data[1].Section_attributes[0])
}
const page = () => {
    return (
        <>
            <section className="relative m-auto">
                <div className="bg-black/50 top-0 right-0 absolute cust-trans w-full start-0 z-40">
                    <NavBar props={{ text: 'white', bg: 'primary' }} />
                </div>
            </section>
            {/* -------- NavBar -------- */}
            {/* --------------- About Content ------------- */}
            < AboutContent />
        </>
    );
};

export default page;
