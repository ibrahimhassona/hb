"use client"
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { MdHome } from "react-icons/md";
import { TbReload } from "react-icons/tb";

export default function Custom404() {
  const t = useTranslations("404")
  const [counter, setCounter] = useState(5);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter()
  // Set client-side flag after mount
  useEffect(() => {
    setIsClient(true);
  }, []);
  // Countdown timer effect
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = process.env.NEXT_PUBLIC_BASE_URL;
    }
  }, [counter]);
  
  return (
    <div className="min-h-screen z-40 bg-gradient-to-b fixed w-full from-emerald-200 to-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col gap-4 justify-center items-center max-w-lg">
        {/* Giant 404 */}
        <h1 className="text-9xl max-sm:text-7xl text-primary opacity-70 ">404</h1>

        {/* Static message to avoid hydration mismatch */}
        <h2 className="text-2xl font-semibold text-primary text-center">
          {t("title")}
        </h2>
        {/* Description */}
        <p className="text-primary  text-center">
          {isClient ? (
            `${t("description")} ${counter} ${t("second")}!`
          ) : (
            `${t("description")} ${t("seconds")}!`
          )}
        </p>
        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={() => window.location.href = process.env.NEXT_PUBLIC_BASE_URL}
            className="flex items-center gap-2 bg-primary text-white px-6 max-sm:px-2 max-sm:text-xs max-sm:h-[50px] max-sm:py-1 py-2 rounded-lg hover:bg-lightPrimary cust-trans"
            
          >
            <MdHome size={20} />
            {t("goHome")}
          </button>
          <button
            className="flex items-center gap-2 border border-primary text-primary px-6 py-2 rounded-lg  max-sm:px-2 max-sm:text-xs max-sm:h-[50px] max-sm:py-1 hover:text-lightPrimary hover:border-lightPrimary cust-trans"
          onClick={()=>router.back()}
          >
            <TbReload size={20} className={`${counter <= 2 ? 'animate-spin cust-trans ' : ""} `} />
            {t("goBack")}
          </button>
        </div>
      </div>
    </div>
  );
}