import { useTranslations } from 'next-intl';
import React from 'react'
const LoadMore = ({ isLoading, handleLoadeMore ,limit}) => {
    const t = useTranslations("menu")
    return (
        <>
            <div className="flex justify-center py-8">
                <button onClick={() => handleLoadeMore(limit + 25)} className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 cust-trans disabled:bg-teal-300">
                    <span className="flex items-center gap-2">
                        {t("load_more")}
                        {isLoading && <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>}
                    </span>
                </button>
            </div>
        </>
    )
}

export default LoadMore