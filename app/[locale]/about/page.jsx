import AboutContent from '@/components/about/AboutContent';
import NavBar from '@/components/navbar/NavBar';
import React from 'react';

const page = () => {
    

    return (
        <>
            <section className="relative m-auto">
                <div className="bg-black/50 top-0 right-0 absolute cust-trans w-full start-0 z-40">
                    <NavBar props={{ text: 'white', bg: 'primary' }} />
                </div>
            </section>
            {/* -------- NavBar -------- */}
            {/* --------------- About Content ------------- */ }
            < AboutContent />
        </>
    );
};

export default page;
