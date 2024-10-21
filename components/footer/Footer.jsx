import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";

const FooterLink = ({ href, children }) => (
  <Link href={href} className="hover:text-lightPrimary  transition-all duration-300">
    {children}
  </Link>
);

const SocialIcon = ({ href, Icon }) => (
  <Link href={href} className='bg-white p-1 rounded-full hover:bg-gray-200  transition-all duration-300'>
    <Icon size={20} className='text-primary text-center' />
  </Link>
);

const Footer = () => {
  const locale = useLocale();
  const year = new Date().getFullYear().toLocaleString(locale).replace(/[٬,]/g, '');

  const brands = [
    { name: 'Ice Bear', logo: '/footer/Ice-bear-logo.png' },
    { name: 'Build Station', logo: '/footer/Build-station-logo.png' },
    { name: 'Illus', logo: '/footer/illus-logo.png' },
    { name: 'Ceramic Home', logo: '/footer/Ceramic-home-logo.png' },
    { name: 'Lighting Stores', logo: '/footer/Lighting-stores-logo.png' },
    { name: 'MHG', logo: '/footer/MHG-logo.png' },
  ];

  const products = [
    { name: 'الإضاءة الذكيـة', href: '/' },
    { name: 'اندروميـدا', href: '/' },
    { name: 'الأجهزة متعددة الاستخدام', href: '/' },
    { name: 'أجهزة التعطير الذكيـة', href: '/' },
    { name: 'الخزائن الذكيـة', href: '/' },
  ];

  const companyLinks = [
    { name: 'من نحن', href: '/' },
    { name: 'أين يمكنني الشراء', href: '/' },
    { name: 'تواصل معنا', href: '/' },
    { name: 'الشروط والأحكام', href: '/' },
  ];

  return (
    <footer className="bg-primary text-white text-sm w-full">
      <div className="mx-auto px-4 xl:px-40 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start max-md:items-center mx-auto max-md:w-fit justify-center gap-8 w-full">
          {/* Logo Section */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center ">
            <Image src='/white-logo.png' width={40} height={40} alt='Logo' />
            <p className="max-w-xs">حيث يلتقي الابتكار مع الراحة وكل زاوية تتألق بالحلول الذكية.</p>
            <p>إحدى شركات مجموعة منزل التسويق القابضة</p>
            {/* Our Brands Logos */}
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              {brands.map((brand) => (
                <Link key={brand.name} href='/' aria-label={`Visit ${brand.name}`}>
                  <Image src={brand.logo} width={32} height={32} alt={`${brand.name} logo`} />
                </Link>
              ))}
            </div>
            <p className='text-sm'>
              جميع الحقوق محفوظة مجموعة منزل التسويق {year} &copy;
            </p>
          </div>

              <div className='flex justify-between items-start '>
          {/* Products */}
          <div className="text-right flex flex-col items-center ">
            <h3 className="font-bold mb-4 text-lg flex flex-col w-full items-start">المنتجات</h3>
              <ul className="flex flex-col w-full items-start justify-center gap-2">
                {products.map((product) => (
                  <li key={product.name}>
                    <FooterLink href={product.href}>{product.name}</FooterLink>
                  </li>
                ))}
              </ul>
          </div>

          {/* The Company */}
          <div className="text-right flex flex-col items-center ">
          <h3 className="font-bold mb-4 text-lg flex flex-col w-full items-start">الشركة</h3>
              <ul className="flex flex-col w-full items-start justify-center gap-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href}>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
          </div>
              </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-teal-700 py-4 px-4 xl:px-40 flex flex-col md:flex-row items-center justify-between">
        <div className='flex flex-wrap gap-2 items-center justify-center md:justify-start mb-4 md:mb-0'>
          <span>{year} &copy;</span>
          <span>هيبنوتيك.</span>
          <span>جميع الحقوق محفوظة.</span>
        </div>
        {/* Social Media */}
        <div className='flex items-center gap-3'>
          <SocialIcon href='/' Icon={RiTwitterXLine} />
          <SocialIcon href='/' Icon={FaLinkedinIn} />
          <SocialIcon href='/' Icon={FaFacebookF} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;