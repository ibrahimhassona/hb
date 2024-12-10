"use client"
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { MdHome } from "react-icons/md";
import { TbReload } from "react-icons/tb";

export default function Error() {
  const t = useTranslations("error");
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
     router.back();
    }
  }, [counter]);

  return (
    <div className="min-h-screen top-0 right-0 z-40 bg-gradient-to-b fixed w-full from-red-200 to-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col gap-4 justify-center items-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-9xl max-sm:text-6xl text-red-500 opacity-70 ">500</h1>

        {/* Error Title */}
        <h2 className="text-2xl text-red-500 font-semibold ">
          {t("title")}
        </h2>

        {/* Description with countdown */}
        <p className="text-red-500">
          {isClient ? (
            `${t("description")} ${counter} ${t("second")} !`
          ) : (
            `${t("description")} ${t("seconds")} !`
          )}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={() => window.location.href = process.env.NEXT_PUBLIC_BASE_URL}
            className="flex items-center gap-2 bg-red-500 text-white px-6 max-sm:px-2 max-sm:text-xs max-sm:h-[50px] max-sm:py-1 py-2 rounded-lg hover:bg-red-400 cust-trans"
          >
            <MdHome size={20} />
            {t("goHome")}
          </button>
          <button
            onClick={() => router.refresh()}
            className="flex items-center gap-2 border border-red-500 text-red-500 px-6 py-2 rounded-lg  max-sm:px-2 max-sm:text-xs max-sm:h-[50px] max-sm:py-1 hover:text-red-400 hover:border-red-400 cust-trans"
          >
            <TbReload size={20} className={`${counter <= 2 ? 'animate-spin cust-trans ' : ""} `} />
            {t("tryAgain")}
          </button>
        </div>
      </div>
    </div>
  );
}