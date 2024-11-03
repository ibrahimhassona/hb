import React from 'react'
import Card from './Card'

const ProductsComponent = ({className}) => {
    const productsData = [
        {
            title: 'روبوت مكنسة كهربائية D3 الذكية',
            category: 'الحياة الذكية',
            price: 1499,
            image: '/products/product-1.png',
            slug: 'product-one'
        },
        {
            title: 'روبوت مكنسة كهربائية D3 الذكية',
            category: 'الحياة الذكية',
            image: '/products/product-1.png',
            slug: 'product-two'
        },
        {
            title: 'روبوت مكنسة كهربائية D3 الذكية',
            category: 'الحياة الذكية',
            price: 1499,
            image: '/products/product-1.png',
            slug: 'product-three'
        },
        {
            title: 'روبوت مكنسة كهربائية D3 الذكية',
            category: 'الحياة الذكية',
            price: 1499,
            image: '/products/product-1.png',
            slug: 'product-four'
        },
        {
            title: 'سيدار جهاز معطر ذكية',
            category: 'أجهزة التعطير الذكية',
            price: 499,
            image: '/products/product-2.png',
            slug: 'product-five'
        },
        {
            title: 'سيدار جهاز معطر ذكية',
            category: 'أجهزة التعطير الذكية',
            price: 499,
            image: '/products/product-2.png',
            slug: 'product-six'
        },
        {
            title: 'سيدار جهاز معطر ذكية',
            category: 'أجهزة التعطير الذكية',
            price: 499,
            image: '/products/product-2.png',
            slug: 'product-seven'
        },
        {
            title: 'سيدار جهاز معطر ذكية',
            category: 'أجهزة التعطير الذكية',
            price: 499,
            image: '/products/product-2.png',
            slug: 'product-eight'
        },
        {
            title: 'ليبرا قفل الباب الذكي',
            category: 'أجهزة التعطير الذكية',
            price: 499,
            image: '/products/product-3.png',
            slug: 'product-nine'
        },
        {
            title: 'ليبرا قفل الباب الذكي',
            category: 'أجهزة التعطير الذكية',
            price: 499,
            image: '/products/product-3.png',
            slug: 'product-ten'
        },
        {
            title: 'ليبرا قفل الباب الذكي',
            category: 'أجهزة التعطير الذكية',
            price: 499,
            image: '/products/product-3.png',
            slug: 'product-eleven'
        },
        {
            title: 'ليبرا قفل الباب الذكي',
            category: 'أجهزة التعطير الذكية',
            price: 499,
            image: '/products/product-3.png',
            slug: 'product-twelve'
        }
    ];
    
  return (
    <div className={`${className} grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-center w-full  justify-items-center`}>
        {productsData.map((item,index)=>(<Card key={index} item={item}/>))}        
    </div>
  )
}

export default ProductsComponent