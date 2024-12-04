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
    { title: t("home"), href: '/', id: 1, link: true },
    { title: t("who_are"), href: '/about', id: 2, link: true },
    { title: t("products"), href: '/products', id: 3, link: false },
    { title: t("news"), href: '/news', id: 4, link: true },
    { title: t("contactUs"), href: '/contactUs', id: 5, link: true },
  ]
  //  ========= Is Active Condition ==============
  const isActive = (href) => currentPath.split('/')[1] == href.slice(1)
  return (
    <div className='h-[70px] w-full gap-2 flex items-center justify-start m-auto max-md:hidden'>
      {/* ------- Logo -------- */}
      <Image src='/Hypnotek-logo.png' alt='Hypotek Logo' height={1000} width={1000} className='w-[40px]' />

      {/* --------- Links -------- */}
      <div className='flex gap-2 text-sm'>
        {dataLinks.map((link) => (
          link.link ? (
            <Link href={link.href} key={link.id} className={`font-[500] cust-trans hover:text-primary ${isActive(link.href) ? 'text-primary' : `${props ?  `text-${props.text}` : ''}`}`}>
              {link.title}
            </Link>
          ) : (
            // ------ Products Menu Dropdown ----------
            <div className='relative' key={link.id}>
              <button className={`font-[500] cust-trans hover:text-primary flex items-center gap-1 group  ${props ? (isActive(link.href) ? 'text-primary' : `text-${props.text}`) : (isActive(link.href) ? 'text-primary' : '')}`}
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