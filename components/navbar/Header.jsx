import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  const t = useTranslations("nav")
  const dataLinks = [
    {title: t("home"), href: '/', id: 1},
    {title: t("who_are"), href: '/', id: 2},
    {title: t("products"), href: false, id: 3},
    {title: t("news"), href: '/', id: 4},
    {title: t("contactUs"), href: '/', id: 5},
  ]

  return (
    <div className='h-[70px] w-full gap-2 flex items-center justify-start m-auto max-md:hidden'>
      {/* ------- Logo -------- */}
      <Image src='/Hypnotek-logo.png' alt='Hypotek Logo' height={1000} width={1000} className='w-[40px]' />
      
      {/* --------- Links -------- */}
      <div className='flex gap-2 text-sm'>
        {dataLinks.map((link) => (
          link.href ? (
            <Link href={link.href} key={link.id} className={`font-[500] cust-trans hover:text-primary ${link.id == 1 ? 'text-primary' : ''}`}>
              {link.title}
            </Link>
          ) : (
            <button key={link.id} className='font-[500] cust-trans hover:text-primary flex items-center'>
              {link.title}
              <IoIosArrowDown/>
            </button>
          )
        ))}
      </div>
    </div>
  )
}

export default Header