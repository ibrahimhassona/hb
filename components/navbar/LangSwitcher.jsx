"use client"
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["200", "300", "400", "500", "700", "800", "900"] });

const LangSwitcher = ({ props }) => {
    const pathname = usePathname()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)

    const changeLanguage = (locale) => {
        const currentPath = pathname
        const newPath = currentPath.startsWith('/en') || currentPath.startsWith('/ar')
            ? `/${locale}${currentPath.slice(3)}`
            : `/${locale}${currentPath}`

        router.push(newPath)
        setIsOpen(false)
    }

    const text = props?.text
    const bg = props?.bg
    const currentLang = pathname.startsWith('/ar') ? 'ar' : 'en'

    return (
        <div className="relative animate-flip-up text-sm z-10 max-sm:w-[120px]">
            {/* Create a new stacking context with z-index */}
            <div className={`relative ${tajawal.className}`}>
                <button
                    onClick={toggleDropdown}
                    className={`${isOpen ? `${props?'bg-primary':'bg-gray-100'}` : ''} 
                              flex items-center gap-2 cust-trans px-3 py-2 rounded-md 
                              relative z-10`} // Added z-index to button
                >
                    <Image
                        src={currentLang === 'ar' ? '/Flags.png' : '/Flags-en.png'}
                        width={24}
                        height={24}
                        alt={currentLang === 'ar' ? 'Arabic' : 'English'}
                    />
                    <span>{currentLang === 'ar' ? 'العربية' : 'English'}</span>
                    <IoIosArrowDown 
                        size={20} 
                        className={`${isOpen ? 'rotate-180' : ''} cust-trans`} 
                    />
                </button>

                {/* Dropdown with higher z-index */}
                {isOpen && (
                    <div className={` absolute left-[inherit] right-[inherit] mt-1 bg-white 
                                   ${props?'text-darkGray':""} border rounded-md shadow-lg 
                                   animate-fade-up cust-trans w-full overflow-hidden
                                   z-20`}> {/* Changed absolute to fixed and increased z-index */}
                        <button
                            onClick={() => changeLanguage('ar')}
                            className={`flex items-center justify-center text-xs gap-2 w-full 
                                      m-auto px-2 py-2 rounded-sm hover:bg-primary hover:text-white 
                                      cust-trans ${currentLang == 'ar' ? 'bg-primary text-white' : ''}`}
                        >
                            <Image src="/Flags.png" width={24} height={24} alt="Arabic" />
                            <span>العربية</span>
                        </button>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`flex items-center text-xs justify-center gap-2 w-full 
                                      m-auto px-2 mt-[1px] py-2 rounded-sm hover:bg-primary 
                                      hover:text-white cust-trans 
                                      ${currentLang == 'en' ? 'bg-primary text-white' : ''}`}
                        >
                            <Image src="/Flags-en.png" width={24} height={24} alt="English" />
                            <span>English</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LangSwitcher