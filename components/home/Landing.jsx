import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiArrowSquareOutLight } from 'react-icons/pi';

const Landing = () => {
    const t = useTranslations("nav");

    return (
        <section className="h-[calc(100vh-110px)] flex overflow-hidden max-md:flex-col-reverse max-md:my-8 max-md:h-auto px-4 xl:px-40 w-[95%] m-auto">
            <article className="flex flex-col justify-center items-start gap-4 w-full cust-trans animate-flip-up">
                <h1 className="text-primary font-bold text-[40px] max-sm:text-[25px] max-md:text-center">
                    {t("mainTitle")}
                </h1>
                <p className="text-lg leading-relaxed text-darkGray max-md:text-center">
                    {t("mainText")}
                </p>
                {/* ======= Links ======= */}
                <div className='flex w-full justify-between items-center gap-2 cust-trans animate-flip-up'>
                    <Link href="/" className="bg-primary hover:bg-lightPrimary hover:border-lightPrimary cust-trans max-md:w-full text-white px-4 max-sm:px-2  max-sm:text-sm py-2 rounded-md border-2 border-primary text-center " aria-label="Go to products">
                        {t("productsLink")}
                    </Link>
                    {/* ====== Link ===== */}
                    <Link href="/" className='bg-white text-primary w-full border-primary border-2 px-4 max-sm:px-2 max-sm:text-sm py-2 rounded-md hidden items-center justify-center gap-1 max-md:flex'>
                        <span className=''>{t("btn")}</span>
                        <PiArrowSquareOutLight  className="text-primary max-sm:text-lg text-2xl" />
                    </Link>
                </div>
            </article>

            {/* Section for the image banner */}
            <div className=" flex items-center justify-center  ">
                <Image
                    src="/panner/allpanner.png"
                    alt="Product showcase banner"
                    height={400}
                    width={400}
                    objectFit="contain"
                    className="w-full max-md:w-[60%]"
                    priority
                />
            </div>
        </section>
    );
};

export default Landing;
