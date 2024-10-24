"use client"
import { usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import ProductsDropdown from './ProductsDropdown'

const Header = ({ props }) => {
  //  ========== Translations ============
  const t = useTranslations("nav")
  //  == Get Pathname to use it in active class ==
  const currentPath = usePathname()
  //  ======== Dropdown State ========
  const [isOpen, setIsOpen] = useState(false);
  //  ======== Nav Data ========
  const dataLinks = [
    { title: t("home"), href: '/', id: 1 },
    { title: t("who_are"), href: '/about', id: 2 },
    { title: t("products"), href: false, id: 3 },
    { title: t("news"), href: '/news', id: 4 },
    { title: t("contactUs"), href: '/contactUs', id: 5 },
  ]
  // ============ Handle If Clicked Out The Products Menu => closed ==========
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (isOpen && !event.target.closest('.dropdown-container')) {
  //       setIsOpen(false)
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => document.removeEventListener('mousedown', handleClickOutside)
  // }, [isOpen])
  //  ========= Is Active Condition ==============
  const isActive = (href) => currentPath === href;
  return (
    <div className='h-[70px] w-full gap-2 flex items-center justify-start m-auto max-md:hidden'>
      {/* ------- Logo -------- */}
      <Image src='/Hypnotek-logo.png' alt='Hypotek Logo' height={1000} width={1000} className='w-[40px]' />

      {/* --------- Links -------- */}
      <div className='flex gap-2 text-sm'>
        {dataLinks.map((link) => (
          link.href ? (
            <Link href={link.href} key={link.id} className={`font-[500] cust-trans hover:text-primary ${isActive(link.href) ? 'text-primary' : `${props ? 'text-white' : ''}`}`}>
              {link.title}
            </Link>
          ) : (
            // ------ Products Menu Dropdown ----------
            <div className='relative' key={link.id}>
              <button  className={`font-[500] cust-trans hover:text-primary flex items-center gap-1 group ${props ? 'text-white' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.title}
                <IoIosArrowDown className={`cust-trans ${isOpen ? 'rotate-180' : ''}  group-hover:text-primary`} />
              </button>
              {/* ------ If Open Get The component ------- */}
              {isOpen && <ProductsDropdown />}
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default Header